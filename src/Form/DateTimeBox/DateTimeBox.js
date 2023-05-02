import React from "react";
import PropTypes from 'prop-types';




//todo: min,max,buttonVisible,errorVisible,step,placeholder,maxLength,minLength,passVisible

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
export default function DateTimeBox(
    {
        classList, type,onClick,onChange,disabled,value,size,
        notOutline,rounded,style,styleType,min,max,clear,showPassword,
        autoRow,rows,limit,placeholder,label,hover
    }
) {

    const [_value, setValue] = React.useState(null);
    const [error, setError] = React.useState(null);

    const [_inputType, setInputType] = React.useState( type === "datetime"?"datetime-local":type );

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
        default: 'bg-white text-gray-900 border border-gray-300 shadow-gray-300 shadow-lg dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:shadow-gray-800 dark:shadow-lg',
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
            setValue(event);
            onChange(event)

    }

    return (
        <div className={"flex flex-col "}>
            <div className={`flex flex-row items-center h-auto px-3 ${classList} ${_resize} ${_type} ${_size[size]} ${_rounded} ${_textSize[size]} ${_disabled}`}>
                <input type={_inputType} className={"focus-visible:outline-0 bg-transparent"}/>
                <div className={"flex flex-row items-center"}> </div>
            </div>


            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
        </div>
    );
}
DateTimeBox.propTypes = {


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

DateTimeBox.defaultProps = {
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




