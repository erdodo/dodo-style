import React from 'react';
import PropTypes from 'prop-types';
import {BiDownArrowAlt,BiUpArrowAlt } from 'react-icons/bi';

//TODO: Multiple olunca içine tag alsın


/**
 * Select componenti, options prop'u ile gelen verileri selectbox içerisinde gösterir.
 *
 */
export default function SelectBox({classList,size,rounded,disabled,options,onSelect,value,multiple }) {
    const [visible, setVisible] = React.useState(false);
    const [filteredOptions, setFilteredOptions] = React.useState([]);
    const [_value, setValue] = React.useState(multiple?[]:"");
    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    const _size = {
        sm: `text-sm`,
        md: `text-md`,
        lg: `text-lg `,
        xl: ` text-xl `,
        "2xl": ` text-2xl `,
    };


    const _disabled = disabled && "opacity-50 cursor-not-allowed";
    React.useEffect(() => {

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
        if(value){
            setValue(options.find((item)=>item.value===value));
        }
    }, [value]);

    const inputChange = (e) => {
        let value = e.target.value;
        let filtered = options.filter((item) => {
            return item.label.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredOptions(filtered);
    }

    const selectClick = (value) => {
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
            setVisible(false);
            return;
        }
    }

    return (
        <>
            <div className={`${classList} ${_size[size]} ${_disabled} ${_rounded} relative border`}  >
                <div className={`${disabled?'cursor-not-allowed':'cursor-pointer'} flex flex-row items-center p-1 autocomplete-input` }  onClick={()=> !disabled && setVisible(!visible)}>
                    {!multiple &&<input type="text" disabled={disabled} className={`py-1 px-3`} onChange={inputChange} value={_value.label} />}
                    {multiple &&
                    <div className={`flex flex-row flex-wrap items-center w-[200px]`}>
                        {_value.map((item,index)=>(
                            <div key={item.value} className={`flex flex-row items-center py-1 px-3 m-1 bg-gray-200 rounded-md`}>
                                <span className={`m-1`}>{item.label}</span>
                                <span className={`cursor-pointer`} onClick={()=>selectClick(item)}>x</span>
                            </div>
                        ))}
                        <input type="text" disabled={disabled} className={`py-1 px-3  focus-visible:outline-none w-auto`} onChange={inputChange}  />
                    </div>

                    }
                    {!visible && <BiDownArrowAlt className={`${_size[size]} mx-2`} onClick={()=>setVisible(true)}/>}
                    {visible && <BiUpArrowAlt className={`${_size[size]} mx-2`} onClick={()=>setVisible(false)} />}
                </div>
                {
                    visible &&
                    <div className={` bg-white p-2 absolute border left-0 z-10 w-full ${_rounded} mt-1`}>
                        {filteredOptions?
                            Object.values(filteredOptions).map((item,index) => (
                                <div key={item} onClick={()=>selectClick(item)}
                                     className={`py-1 px-3 hover:bg-gray-100 cursor-pointer ${_rounded} ${_value.value === item.value ?'bg-gray-200 border':''} ${_value.includes(item)?'bg-gray-200 border':''}`} >
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
    value: PropTypes.string,

    /** multiple */
    multiple: PropTypes.bool,
};

SelectBox.defaultProps = {
    options: [],
    size:"md",
    onSelect: (value) => {
        // eslint-disable-next-line no-console
        console.log('You have clicked me!', value);
    }
};
