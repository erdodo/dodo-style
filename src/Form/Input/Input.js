import React from 'react';
import PropTypes from 'prop-types';
import{BsArrowUpSquareFill,BsArrowDownSquareFill} from '../../icons/bs'
import DateComponent from "./Date";
//todo: min,max,buttonVisible,errorVisible,step,placeholder,maxLength,minLength,passVisible
/**
 * Input Componenti
 *
 */
export default function Input({classList, type,onClick,onChange,disabled,value,size,notOutline,rounded,style,styleType,displayFormat,valueFormat,hover,min,max}) {
    const _id= new Date().getTime();
    const [_value, setValue] = React.useState(null);
    const [error, setError] = React.useState(null);

    //Baş: Stil İşlemleri
    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    if(rounded==='2xl') _rounded = 'rounded-[1rem]';
    if(rounded==='3xl') _rounded = 'rounded-[1.2rem]';
    const _size = {
        sm: `py-1 px-2  text-sm `,
        md: `py-2 px-4  text-md`,
        lg: `py-3 px-6  text-lg `,
        xl: `py-4 px-8 text-xl `,
        "2xl": `py-5 px-10 text-2xl `,
    };
    const _notOutline = notOutline&& "!border-[transparent] ";
    let _type ="";
    const defaultStyleTypes = {
        default: 'bg-white text-gray-900 border border-gray-300 shadow-gray-300 shadow-lg',
    }
    if (styleType === 'default') {
        _type = defaultStyleTypes.default;
    }
    //Son: Stil İşlemleri

    React.useEffect(() => {
        setValue(value);

    }, [value]);
    React.useEffect(() => {
        setError(null);
        setValue(null)
    }, [type]);
    React.useEffect(() => {
        onChange(_value)
    }, [_value]);

    const onChangeInput = (event) => {
        if(type==="email" && !validateEmail(event.target.value)) setError("Geçerli bir email adresi giriniz")
        if(type==="email" && validateEmail(event.target.value)) setError("")
        setValue(event.target.value);
        onChange(event.target.value)
    }
    const validateEmail =(mail)=>
    {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        return (false)
    }

    return (
        <div className={"flex flex-col"}>
            {
                type === 'date' &&
                <DateComponent className={`${classList} ${_size[size]} ${_rounded} ${_notOutline} ${_type}  w-full`} value={value}
                               onChange={setValue} showType={"day"} displayFormat={displayFormat} valueFormat={valueFormat} hover={hover}
                               min={min} max={max}
                />
            }
            {
                !['date'].includes(type) &&
                <div className={"relative"}>
                    <input className={`${classList} ${_size[size]} ${_rounded} ${_notOutline} ${_type}  w-full`} type={type} value={_value} style={style}
                           onClick={onClick} disabled={disabled} onChange={onChangeInput} id={_id+'_input'} min={min} max={max}/>
                    {
                        type==="number"&&
                        <div className={"absolute right-0 top-0 bottom-0 flex items-center justify-center px-2"}>
                            <div className={"flex flex-col"}>
                                <button className={"text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"} onClick={()=>setValue(Number(_value)+1)}>
                                    <BsArrowUpSquareFill className={`text-gray-400`} />
                                </button>
                                <button className={"text-gray-500 hover:text-gray-700 mt-0.5 focus:outline-none focus:text-gray-700"} onClick={()=>setValue(_value-1)}>
                                    <BsArrowDownSquareFill className={`text-gray-400`} />
                                </button>
                            </div>
                        </div>
                    }

                </div>
            }

            <span>{_value}</span>
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
}

Input.propTypes = {


    /** Child elemanı */
    value: PropTypes.string,

    /** Uygulanmak istenen class listesi */
    classList: PropTypes.string,

    /** Tip */
    type: PropTypes.oneOf(["text","password","email","number","date","time","datetime-local","month","week","search","tel","url","color"]),

    /** Hiçbir border olmasın */
    notOutline: PropTypes.bool,

    /** Stil tipi */
    styleType: PropTypes.oneOf(['default']),

    /** Köşe yumuşatma seviyesi */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl','2xl','3xl', 'full']),

    /** Büyüklük */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),

    /** Disabled seçeneği */
    disabled: PropTypes.bool,

    /** Tıklandığında çalışacak method */
    onClick: PropTypes.func,

    /** Değiştiğinde çalışacak method */
    onChange: PropTypes.func,

    /** Butonun inline style'ı */
    style: PropTypes.object,

    /** Görüntüleme formatı (date) */
    displayFormat: PropTypes.string,

    /** Değer formatı (date) */
    valueFormat: PropTypes.string,

    /** Hover */
    hover: PropTypes.bool,

    /** Alabileceği en az değer */
    min: PropTypes.number,

    /** Alabileceği en fazla değer */
    max: PropTypes.number,

};

Input.defaultProps = {
    value: 'Button',
    size:"md",
    type:"text",
    styleType: 'default',
    displayFormat: 'DD.MM.YYYY',
    valueFormat: 'YYYY-MM-DD',
    onClick: (event) => {
        console.log('You have clicked me!', event.target);
    },
    onChange: (event) => {
        console.log('You have changed me!', event);
    }
};
