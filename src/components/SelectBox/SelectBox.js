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
    const inputRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const [filteredOptions, setFilteredOptions] = React.useState([]);
    const [_value, setValue] = React.useState(multiple?[]:"");
    const [inputWidth, setInputWidth] = React.useState(50);
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
        console.log(value)
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
    const autoCompleteInputClick = () => {
        if(!disabled) setVisible(!visible);
        setTimeout(()=>{
            inputRef.current && inputRef.current.focus();
        },100)


    }
    return (
        <>
            <div className={`${classList} ${_size[size]} ${_height[size]} ${_disabled} ${_rounded} relative border`}  >

                <div className={`${disabled?'cursor-not-allowed':'cursor-pointer'} flex flex-row items-center h-full w-full autocomplete-input` }  onClick={autoCompleteInputClick} >
                    {!multiple && search && <input type="text" disabled={disabled} className={`px-3 focus-visible:outline-none ${_disabled}`}  onChange={inputChange} value={_value.label} />}
                    {multiple &&
                         <div className={`flex flex-row  items-center w-full  flex-wrap` }>
                            {_value.map((item,index)=>(
                                <Tag {...tag?.props} size={size} type={tag?.props?.type?tag?.props?.type:"primary"} classList={"m-[2px]"} close onClose={()=>selectClick(item)}>{item.label}</Tag>
                                /*<div key={item.value} className={`flex flex-row items-center py-1 px-3 m-1 bg-gray-200 rounded-md`}>
                                    <span className={`m-1`}>{item.label}</span>
                                    <span className={`cursor-pointer`} onClick={()=>selectClick(item)}>x</span>
                                </div>*/
                            ))}

                            {search && <input ref={inputRef} type="text" disabled={disabled} className={`${_disabled} px-3 bg-transparent focus-visible:outline-none min-w-60px max-w-[160px] `} style={{width:inputWidth+'px'}} onChange={inputChange}  />}


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
                                <div key={item.value}
                                     onClick={()=>selectClick(item)}
                                     className={`py-1 px-3 hover:bg-gray-100 cursor-pointer ${_rounded} ${_value.value === item.value ?'bg-gray-200 border':''} ${multiple && _value.includes(item)?'bg-gray-200 border':''}`} >
                                    {item.label}
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
