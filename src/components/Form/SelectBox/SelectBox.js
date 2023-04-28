import React from 'react';
import PropTypes from 'prop-types';
import {BsArrowDownShort,BsArrowUpShort } from 'react-icons/bs';
import Tag from "../Tag";
//TODO: Hover olduğunda açılsın seçeneği


/**
 * Select componenti, options prop'u ile gelen verileri selectbox içerisinde gösterir.
 *
 */
export default function SelectBox({classList,size,rounded,disabled,options,onSelect,value,multiple,tag,search }) {
    const _id = new Date().getTime()
    const inputRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const [filteredOptions, setFilteredOptions] = React.useState([]);
    const [_value, setValue] = React.useState(multiple?[]:"");
    const [inputWidth, setInputWidth] = React.useState(150);
    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    const _size = {
        sm: `text-sm`,
        md: `text-md`,
        lg: `text-lg `,
        xl: ` text-xl `,
        "2xl": ` text-2xl `,
    };
    const _height = {
        sm: `h-[32px]`,
        md: `h-[36px]`,
        lg: `h-[46px] `,
        xl: ` h-[44px] `,
        "2xl": ` h-[58px] `,
        "3xl": ` h-[66px] `,
    }


    const _disabled = disabled && "opacity-50 cursor-not-allowed";
    React.useEffect(() => {
        console.log(tag?.props)
        if(visible){
            document.addEventListener("click", (e)=>{
                if(e.target.closest(".autocomplete-input")){
                    return;
                }
                setVisible(false);
            });
        }
    }, [visible]);
    React.useEffect(() => {
        if(options){
            setFilteredOptions(options);
        }
    }, [options]);
    React.useEffect(() => {
        if(multiple){
            if(value){
                setValue(value.map((item)=>options.find((option)=>option.value===item)));
            }
        }else{
            if(value){
                setValue(options.find((option)=>option.value===value));
            }
        }
    }, [value]);

    const inputChange = (e) => {
        setInputWidth(inputRef.current.scrollWidth)
        let value = e.target.value;
        let filtered = options.filter((item) => {
            return item.label.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredOptions(filtered);
        setVisible(true)

    }

    const selectClick = (value) => {
        if(value){
            document.getElementById(_id+'_searchInput').value = "";
            if(multiple){
                let _values = [..._value];
                if(_value.find((item)=>item.value===value.value)){
                    _values = _values.filter((item)=>item.value!==value.value);
                }else{
                    _values.push(value);
                }
                setValue(_values);
                onSelect(_values.map((item)=>item.value));
                return;
            }else{
                setValue(value);
                onSelect(value.value);
                return;
            }

        }

    }
    const autoCompleteInputClick = () => {
        if(!disabled) setVisible(!visible);
        setTimeout(()=>{
            inputRef.current && inputRef.current.focus();
        },100)
    }
    const parentKeyDown = (e) => {


        console.log('key:',e.key)
        console.log('target id:',e.target.id)
        if(!visible) setVisible(true)
        let rules = [
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_searchInput",
                nextEl: _id+"_option_0",
                action: (el,nextEl) =>nextFocus(el,nextEl)
            },
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_option_"+e.target.tabIndex,
                nextEl: _id+"_option_"+(e.target.tabIndex+1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_option_"+e.target.tabIndex,
                nextEl: _id+"_option_"+(e.target.tabIndex-1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_option_0",
                nextEl: _id+"_searchInput",
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_searchInput",
                nextEl: _id+"_tag_"+(_value.length-1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_tag_"+(_value.length-1),
                nextEl: _id+"_searchInput",
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_tag_"+e.target.tabIndex,
                nextEl: _id+"_tag_"+(e.target.tabIndex-1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_tag_"+e.target.tabIndex,
                nextEl: _id+"_tag_"+(e.target.tabIndex+1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ['Enter',' '],
                id: "_option_"+e.target.tabIndex,
                nextEl:'',
                action: () => selectItem(e.target.tabIndex)
            },
            {
                key: ['Enter',' '],
                id: "_searchInput",
                nextEl:'',
                action: () => selectItem(0)
            },
            {
                key: ['Escape'],
                id: "_searchInput",
                nextEl:'',
                action: () => setVisible(false)
            },
            {
                key: ['Escape'],
                id: "_option_"+e.target.tabIndex,
                nextEl:'',
                action: () => setVisible(false)
            },
            {
                key: ['Escape'],
                id: "_tag_"+e.target.tabIndex,
                nextEl:'',
                action: () => {
                    setVisible(false)
                    selectItem(e.target.tabIndex)
                    nextFocus(e.target,document.getElementById(_id+'_searchInput'))
                }
            }

        ]
        let isDefault = false;
        rules.forEach((rule)=>{
            if(rule.key.includes(e.shiftKey ? 'Shift_' + e.key:e.key) && _id+rule.id===e.target.id){
                isDefault = true;
            }
        })
        isDefault && e.preventDefault()
        let nextFocus = (el,nextEl) => {
            el && el.blur();
            nextEl && nextEl.focus();
        }
        const selectItem = (index) => {
            let option = filteredOptions[index];
            selectClick(option);
        }

        rules.forEach((rule)=>{
            console.log("Tuş:",e.shiftKey ? 'Shift_' + e.key:e.key)
            if(rule.key.includes(e.shiftKey ? 'Shift_' + e.key:e.key) && _id+rule.id===e.target.id){
                console.log('rule:',rule)
                let nextEl = document.getElementById(rule.nextEl);
                rule.action(e.target,nextEl);
            }
        })

    }


    return (
        <>
            <div className={`${classList} ${_size[size]} ${_height[size]} ${_disabled} ${_rounded} relative border`} onKeyDown={parentKeyDown} >

                <div className={`${disabled?'cursor-not-allowed':'cursor-pointer'} flex flex-row items-center  h-full w-full autocomplete-input` } tabIndex={0}  onClick={autoCompleteInputClick} >
                    {!multiple && search && <input type="text" id={_id+'_searchInput'} disabled={disabled} className={`px-3 focus-visible:outline-none ${_disabled}`}  onChange={inputChange} value={_value.label} />}
                    {multiple &&
                         <div className={`flex flex-row  items-center w-full  flex-wrap` }>
                            {_value.map((item,index)=>(
                                <div tabIndex={index} id={_id+'_tag_'+index}>
                                    <Tag {...tag?.props} size={size} id={_id+'_tag_'+index} type={tag?.props?.type?tag?.props?.type:"primary"} classList={"m-[2px]"} close onClose={()=>selectClick(item)}>{item.label}</Tag>
                                </div>
                                /*<div key={item.value} className={`flex flex-row items-center py-1 px-3 m-1 bg-gray-200 rounded-md`}>
                                    <span className={`m-1`}>{item.label}</span>
                                    <span className={`cursor-pointer`} onClick={()=>selectClick(item)}>x</span>
                                </div>*/
                            ))}

                            {search && <input ref={inputRef} type="text" id={_id+'_searchInput'} disabled={disabled} className={`${_disabled} px-3 bg-transparent focus-visible:outline-none min-w-60px max-w-[160px] `} style={{width:inputWidth+'px'}} onChange={inputChange}  />}


                        </div>
                    }
                    { !search && !multiple && <span className={`px-3 w-[100px] ${_disabled}`}>{_value.label}</span>}
                    { !search && multiple && _value.length<1 &&  <span className={"w-[100px]"}></span>}
                    <div className={"px-1 w-[30px]  "} >
                        {!visible && <BsArrowDownShort className={`${_size[size]} autocomplete-input`} />}
                        {visible && <BsArrowUpShort className={`${_size[size]} autocomplete-input`} />}
                    </div>
                </div>
                {
                    visible &&
                    <div className={` bg-white p-2 absolute border left-0 z-10 w-full rounded-md mt-1`}>
                        {filteredOptions.length>0?
                            Object.values(filteredOptions).map((item,index) => (
                                <div key={item.value} id={_id+'_option_'+index} tabIndex={index} value={item}
                                     onClick={()=>selectClick(item)}
                                     className={`py-1 px-3 hover:bg-gray-100 cursor-pointer mb-1 ${_rounded} ${_value.value === item.value ?'bg-gray-200 border':''} ${multiple && _value.includes(item)?'bg-gray-200 border':''}`} >
                                    {item.label}
                                    <input type={"hidden"} value={item} id={_id+'_option_input_'+index}/>
                                </div>
                            ))
                            :
                            <div className={`py-1 px-3 ${_rounded}`}>
                                Veri Bulunamadı
                            </div>
                        }
                    </div>
                }

            </div>
        </>
    );
}


SelectBox.propTypes = {
    /** AutoComplete class'ı */
    classList: PropTypes.string,

    /** AutoComplete köşe yumuşak olsun mu */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),

    /** AutoComplete büyüklüğü */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),

    /** AutoComplete disable olsun mu */
    disabled: PropTypes.bool,

    /** AutoComplete options */
    options: PropTypes.array,

    /** selected value */
    onSelect: PropTypes.func,

    /** selected value */
    value: PropTypes.any,

    /** multiple */
    multiple: PropTypes.bool,

    /** tag */
    tag: PropTypes.node,

    /** search */
    search: PropTypes.bool,
};

SelectBox.defaultProps = {
    options: [],
    size:"md",
    onSelect: (value) => {
        // eslint-disable-next-line no-console
        console.log('You have clicked me!', value);
    }
};
