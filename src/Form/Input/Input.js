import React from 'react';
import PropTypes from 'prop-types';
import{BsArrowUpSquareFill,BsArrowDownSquareFill,BsX} from 'dodo-icons/bs'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'dodo-icons/ai'

import CheckBox from "./inputs/CheckBox";
import Radio from "./inputs/Radio";
import Color from "./inputs/Color";
import Email from "./inputs/Email";
import Number from "./inputs/Number";
import Password from "./inputs/Password";
import Text from "./inputs/Text";
import TextArea from "./inputs/TextArea";
import Range from "./inputs/Range";
import Tel from "./inputs/Tel";
import Url from "./inputs/Url";


//todo: min,max,buttonVisible,errorVisible,step,placeholder,maxLength,minLength,passVisible
// todo: sağdaki butonlar yazı üzerine geliyo
/**
 * id örneği
 * name örneği
 * class örneği
 * styleType örneği (primary,secondary,success,warning,danger,info,light,dark)
 * size örneği (sm,md,lg,xl,2xl,3xl)
 * disabled örneği
 * notOutline örneği
 * rounded örneği (sm,md,lg,xl,2xl,3xl)
 * styleType örneği (default)
 * min,max,step örneği(number)
 * showPassword örneği (password)
 * autoRow örneği (textarea)
 * clear örneği
 * limit örneği
 * placeholder örneği
 */
/**
 * Input Componenti
 *
 */
export default function Input(
    {
        classList, type,onClick,onChange,disabled,value,size,
        notOutline,rounded,style,styleType,min,max,clear,showPassword,
        autoRow,rows,limit,placeholder,label
    }
) {

    const [_value, setValue] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [_inputType, setInputType] = React.useState(type);

    //Baş: Stil İşlemleri
    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    if(rounded==='2xl') _rounded = 'rounded-[1rem]';
    if(rounded==='3xl') _rounded = 'rounded-[1.2rem]';

    const _size = {
        sm: `min-h-[32px]`,
        md: `min-h-[36px]`,
        lg: `min-h-[44px] `,
        xl: `min-h-[54px]`,
        "2xl": `min-h-[58px]`,
        "3xl": `min-h-[66px] `,
    };
    const _textSize = {
        sm: `!text-sm`,
        md: `!text-md`,
        lg: `!text-lg`,
        xl: `!text-xl`,
        "2xl": `!text-2xl`,
        "3xl": `!text-3xl`,
    }
    const _notOutline = notOutline&& "!border-[transparent] ";
    const _resize = type=== 'textarea' ? 'resize' : 'resize-none';
    let _type ="";
    const defaultStyleTypes = {
        default: 'bg-white text-gray-900 border border-gray-300 shadow-gray-300 shadow-lg',
    }
    if (styleType === 'default') {
        _type = defaultStyleTypes.default;
    }
    const _disabled = disabled ? 'opacity-50 cursor-not-allowed !bg-gray-100' : '';
    //Son: Stil İşlemleri

    React.useEffect(() => {
        setValue(value);
    }, [value]);

    React.useEffect(() => {
        setError(null);
    }, [type]);
    React.useEffect(() => {
        onChange(_value)
    }, [_value]);

    const onChangeInput = (event) => {
        if(type === 'checkbox') {
            setValue(event.target.checked);
            onChange(event.target.checked)
        }else{

            setValue(event.target.value);
            onChange(event.target.value)
        }
    }
    const valueArttir = () => {
        if(max && _value>=max) return;
        setValue(_value?_value+1: (max > 1? 1:max));
    }
    const valueAzalt = () => {
        if(min && _value<=min) return;
        setValue(_value?_value-1: (min < -1? -1:min ));
    }


    return (
        <div className={"flex flex-col "}>
            <div className={`flex flex-row items-center h-auto px-3 ${classList} ${_resize} ${_type} ${_size[size]} ${_rounded} ${_textSize[size]} ${_disabled}`}>
                {
                    ['switch',"checkbox"].includes(type)  &&
                    <CheckBox label={label} type={type} value={_value} onChange={onChangeInput} disabled={disabled} classList={`${classList} ${_disabled}`}  />
                }
                {
                    type === "color" &&
                    <Color />
                }
                {
                    type === "email" &&
                    <Email value={_value} onChange={onChangeInput} disabled={disabled} classList={` ${_disabled}`} placeholder={placeholder} setError={setError} />
                }
                {
                    type === "number" &&
                    <Number value={_value} onChange={onChangeInput} min={min} max={max} />
                }
                {
                    type === "password" &&
                    <Password inputType={_inputType} />
                }
                {
                    type === "radio" &&
                    <Radio />
                }
                {
                    type === "range" &&
                    <Range />
                }
                {
                    type === "tel" &&
                    <Tel />
                }
                {
                    type === "text" &&
                    <Text value={_value} onChange={onChangeInput} disabled={disabled} classList={`${classList} ${_disabled}`} placeholder={placeholder} limit={limit} />
                }
                {
                    type === "textarea" &&
                    <TextArea  value={_value} onChange={onChangeInput}
                               disabled={disabled} classList={`${classList} ${_disabled}`}
                               placeholder={placeholder} limit={limit} rows={rows} autoRow={autoRow} />
                }
                {
                    type === "url" &&
                    <Url />
                }
                <div className={"flex flex-row items-center"}>
                    { clear &&
                        <button className={"bg-gray-50 hover:bg-gray-200 rounded-full !ml-2"} onClick={()=>setValue("")}>
                            <BsX className={`text-gray-500 ${_textSize}`} />
                        </button>
                    }
                    {showPassword && type==="password" && _inputType==="password"&&
                        <button className={"bg-gray-50 hover:bg-gray-200 rounded-full !ml-2"} onClick={()=>{ setInputType('text') }}>
                            <AiOutlineEye className={`text-gray-500 ${_textSize}`} />
                        </button>
                    }
                    {showPassword && type==="password" &&_inputType==="text"&&
                        <button className={"bg-gray-50 hover:bg-gray-200 rounded-full !ml-2"} onClick={()=>{setInputType('password') }}>
                            <AiOutlineEyeInvisible className={`text-gray-500 ${_textSize}`} />
                        </button>
                    }
                    {limit &&
                        <span className={`text-gray-400 !text-sm rounded-full !ml-2` }>
                            {_value?.length ?? 0}/{limit}
                        </span>
                    }
                    {
                        _inputType==="number"&&

                            <div className={"flex flex-col !ml-2"}>
                                <button onClick={valueArttir}>
                                    <BsArrowUpSquareFill className={`text-gray-300 hover:text-gray-500 ${_textSize}`} />
                                </button>
                                <button  onClick={valueAzalt}>
                                    <BsArrowDownSquareFill className={`text-gray-300 hover:text-gray-500 ${_textSize}`} />
                                </button>
                            </div>

                    }

                </div>
            </div>


            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
}
Input.propTypes = {


    /** Child elemanı */
    value: PropTypes.string,

    /** Uygulanmak istenen class listesi */
    classList: PropTypes.string,

    /** Tip */
    type: PropTypes.oneOf(["text","password","email","number","date","time","datetime","month","week","file","checkbox","switch","radio","range","tel","url","color","textarea"]),

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

    /** Temizleme butonu */
    clear: PropTypes.bool,

    /** Şifre gösterme butonu */
    showPassword: PropTypes.bool,

    /** Satır sayısı (textarea) */
    rows: PropTypes.number,

    /** otomatik satır sayısı (textarea) */
    autoRow: PropTypes.bool,

    /** Karakter limiti */
    limit: PropTypes.number,

    /** placeholder */
    placeholder: PropTypes.string,

    /** Checkbox label */
    label: PropTypes.string,

};

Input.defaultProps = {
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
