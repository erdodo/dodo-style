import React from 'react';
import PropTypes from 'prop-types';
import{BsX} from 'dodo-icons/react/bs'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'dodo-icons/react/ai'
import {FiMinus,FiPlus} from 'dodo-icons/react/fi'

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
import Else from "./inputs/Else";

import Config from "./config.json";
export default function Input(
    {
        type,onChange,value,size,
        notOutline,rounded,styleType,clear,showPassword,
        autoRow,limit,...props
    }
) {

    let [_value, setValue] = React.useState(value);
    const [textLength, setTextLength] = React.useState(0);
    const [error, setError] = React.useState(null);
    const [_inputType, setInputType] = React.useState(type);


    React.useEffect(() => {
        setValue(value);
    }, [value]);

    React.useEffect(() => {
        setInputType(type);
        setError(null);
    }, [type]);

    const onChangeInput = (event) => {
        if(type === 'checkbox') {
            setValue(event.target.checked)
            onChange(event)

        }else{

            setValue(event.target.value)
            onChange(event)
            setTextLength(event.target.value.length)
        }
    }
    const valueArttir = () => {
        if(props.max && _value>=props.max) return;
        if(typeof _value !== "number") setValue(1);
        else setValue(_value?_value+1: (props.max > 1? 1:props.max));
    }
    const valueAzalt = () => {
        if(props.min && _value<=props.min) return;
        if (typeof _value !== "number") setValue(-1);
        else setValue(_value?_value-1: (props.min < -1? -1:props.min ));
    }


    return (
        <div className={"flex flex-col "}>
            <div className={`flex flex-row items-center `}>
                {
                    ['switch',"checkbox"].includes(type)  &&
                    <CheckBox {...props}  value={_value} onChange={onChangeInput}
                              size={size}   limit={limit}
                              type={type} styleType={styleType}
                              notOutline={notOutline} rounded={rounded}  />
                }
                {
                    type === "color" &&
                    <Color />
                }
                {
                    type === "email" &&
                    <Email {...props}  value={_value} onChange={onChangeInput} setError={setError}
                           size={size}   limit={limit}
                           type={type} styleType={styleType}
                           notOutline={notOutline} rounded={rounded}    />
                }
                {
                    type === "number" &&
                    <Number {...props}  value={_value} onChange={onChangeInput}
                            size={size}   limit={limit}
                            type={type} styleType={styleType}
                            notOutline={notOutline} rounded={rounded} />
                }
                {
                    type === "password" &&
                    <Password inputType={_inputType} {...props}  value={_value} onChange={onChangeInput}
                              size={size}   limit={limit}
                              type={type} styleType={styleType}
                              notOutline={notOutline} rounded={rounded}
                    />
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
                    <Tel {...props}  value={_value} onChange={onChangeInput}
                         size={size}   limit={limit}
                         type={type} styleType={styleType}
                         notOutline={notOutline} rounded={rounded} />
                }
                {
                    type === "text" &&
                    <Text {...props}  value={_value} onChange={onChangeInput}
                          size={size}   limit={limit}
                          type={type} styleType={styleType}
                          notOutline={notOutline} rounded={rounded}
                    />
                }
                {
                    type === "textarea" &&
                    <TextArea  {...props}  value={_value} onChange={onChangeInput}
                               size={size}   limit={limit}
                               type={type} styleType={styleType}
                               notOutline={notOutline} rounded={rounded}  autoRow={autoRow} />
                }
                {
                    type === "url" &&
                    <Url {...props}  value={_value} onChange={onChangeInput}
                         size={size}   limit={limit}
                         type={type} styleType={styleType}
                         notOutline={notOutline} rounded={rounded} />
                }
                {
                    ["date","time","datetime-local","month","week","file"].includes(type) &&

                    <Else
                        {...props}  value={_value} onChange={onChangeInput}
                        size={size}   limit={limit}
                        type={type} styleType={styleType}
                        notOutline={notOutline} rounded={rounded}
                    />
                }
                {(clear || showPassword || limit||_inputType==="number") &&  <div className={"flex flex-row items-center border-r pr-2"}>
                    { clear &&
                        <button className={"dodo-clear bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded-full !ml-2"} onClick={()=>{setValue("");setTextLength(0)}}>
                            <BsX className={`text-gray-500 ${Config.textSizes[size]}`} />
                        </button>
                    }
                    {showPassword && type==="password" && _inputType==="password"&&
                        <button className={"dodo-show-password bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded-full !ml-2"} onClick={()=>{ setInputType('text') }}>
                            <AiOutlineEye className={`text-gray-500 ${Config.textSizes[size]}`} />
                        </button>
                    }
                    {showPassword && type==="password" &&_inputType==="text"&&
                        <button className={"dodo-visible-password bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white rounded-full !ml-2"} onClick={()=>{setInputType('password') }}>
                            <AiOutlineEyeInvisible className={`text-gray-500 ${Config.textSizes[size]}`} />
                        </button>
                    }
                    {limit &&
                        <span className={`dodo-limit text-gray-400 !text-sm rounded-full !ml-2` }>
                            {textLength ?? 0}/{limit}
                        </span>
                    }
                    {
                        _inputType==="number"&&

                            <div className={"flex flex-row !ml-2"}>

                                <button  onClick={valueAzalt} className={"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"}>
                                    <FiMinus className={`text-gray-400 hover:text-gray-600 dark:text-gray-700  dark:hover:text-gray-500 ${Config.textSizes[size]}`} />
                                </button>
                                <button onClick={valueArttir} className={"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"}>
                                    <FiPlus className={`text-gray-400 hover:text-gray-600 dark:text-gray-700  dark:hover:text-gray-500 ${Config.textSizes[size]}`} />
                                </button>
                            </div>

                    }

                </div>}
            </div>


            {error && <span className="text-danger-500 text-sm mt-1">{error}</span>}
        </div>
    );
}
Input.propTypes = {


    /** Child elemanı */
    value: PropTypes.any,

    /** Uygulanmak istenen class listesi */
    className: PropTypes.string,

    /** Tip */
    type: PropTypes.oneOf(["text","password","email","number","date","time","datetime-local","month","week","file","checkbox","switch","radio","range","tel","url","color","textarea"]),

    /** Hiçbir border olmasın */
    notOutline: PropTypes.bool,

    /** Stil tipi */
    styleType: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

    /** Köşe yumuşatma seviyesi */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl','2xl','3xl', 'full']),

    /** Büyüklük */
    size: PropTypes.oneOf(["xs",'sm', 'md', 'lg', 'xl', '2xl',"3xl"]),

    /** Disabled seçeneği */
    disabled: PropTypes.bool,

    /** Tıklandığında çalışacak method */
    onClick: PropTypes.func,

    /** Değiştiğinde çalışacak method */
    onChange: PropTypes.func,

    /** Butonun inline style'ı */
    style: PropTypes.object,


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

    /** "Checkbox" label */
    beforeLabel: PropTypes.any,

    /** "Checkbox" label */
    afterLabel: PropTypes.any,

};

Input.defaultProps = {
    size:"md",
    rounded:"md",
    type:"text",
    styleType: 'primary',
    onClick: () => {},
    onChange: () => {}
};
