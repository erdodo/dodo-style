import React from 'react';
import PropTypes from 'prop-types';
import {BiDownArrowAlt,BiUpArrowAlt } from 'react-icons/bi';
/**
 * Select componenti, options prop'u ile gelen verileri selectbox içerisinde gösterir.
 *
 */
export default function AutoComplete({classList,size,rounded,disabled,options,onSelect,value }) {
    const [visible, setVisible] = React.useState(false);
    const [filteredOptions, setFilteredOptions] = React.useState([]);
    const [_value, setValue] = React.useState("");
    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    const _size = {
        sm: `text-sm`,
        md: `text-md`,
        lg: `text-lg `,
        xl: ` text-xl `,
        "2xl": ` text-2xl `,
    };
    const _menu_class = {
        sm: `top-[38px]`,
        md: `top-[42px]`,
        lg: `top-[46px]`,
        xl: `top-[46px]`,
        "2xl": `top-[50px]`,
    };
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
        setValue(value);
        onSelect(value.value);
        setVisible(false);
    }

    return (
        <>
            <div className={`${classList} ${_size[size]} ${_rounded} relative border`}  >
                <div className={" flex flex-row items-center p-1 cursor-pointer autocomplete-input"} onClick={()=>setVisible(!visible)}>
                    <input type="text" className={`py-1 px-3`} onChange={inputChange} value={_value.label} />
                    {!visible && <BiDownArrowAlt className={`${_size[size]} mx-2`} onClick={()=>setVisible(true)}/>}
                    {visible && <BiUpArrowAlt className={`${_size[size]} mx-2`} onClick={()=>setVisible(false)} />}
                </div>
                {
                    visible &&
                    <div className={` bg-white p-2 absolute border left-0 z-10 w-full ${_rounded} ${_menu_class[size]}`}>
                        {filteredOptions?
                            Object.values(filteredOptions).map((item,index) => (
                                <div key={item} className={`py-1 px-3 hover:bg-gray-100 cursor-pointer ${_rounded} ${_value.value === item.value ?'bg-gray-200 border':''}`} onClick={()=>selectClick(item)}>
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

AutoComplete.propTypes = {
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
};

AutoComplete.defaultProps = {
    options: [],
    size:"md",
    onSelect: (value) => {
        // eslint-disable-next-line no-console
        console.log('You have clicked me!', value);
    }
};
