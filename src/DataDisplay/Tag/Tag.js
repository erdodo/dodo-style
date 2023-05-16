import React from 'react';
import PropTypes from 'prop-types';
import { BsXCircle } from "dodo-icons/react/bs";
//todo: özel class list ve style örnekleri
/**
 * Özel yazılar için kullanılabilir
 *
 */
export default function Tag({classList, type,onClick,children,size,outline,notOutline,plain,gradient,rounded,close,onClose,style }) {

    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    if(rounded==='2xl') _rounded = 'rounded-[1rem]';
    if(rounded==='3xl') _rounded = 'rounded-[1.2rem]';
    const _size = {
        sm: `py-0.5 px-1 text-sm `,
        md: `py-1 px-1.5 text-sm `,
        lg: `py-1.5 px-2.5 text-md`,
        xl: `py-2 px-3.5  text-lg `,
        "2xl": `py-2.5 px-5 text-xl `,
        "3xl": `py-3 px-6 text-2xl `,
    };

    let _type ="";
    const types = {
        primary:  'bg-primary-600 text-white  border border-primary-700 shadow-primary-300 shadow-lg dark:bg-primary-700 dark:border-primary-800 dark:shadow-primary-900 ',
        secondary: 'bg-secondary-600 text-white border border-secondary-700 shadow-secondary-300 shadow-lg dark:bg-secondary-700 dark:border-secondary-800 dark:shadow-secondary-900 ',
        danger: 'bg-danger-600 text-white border border-danger-700 shadow-danger-300 shadow-lg dark:bg-danger-700 dark:border-danger-800 dark:shadow-danger-900 ',
        warning: 'bg-warning-600 text-white border border-warning-700 shadow-warning-300 shadow-lg dark:bg-warning-700 dark:border-warning-800 dark:shadow-warning-900 ',
        success: 'bg-success-600 text-white border border-success-700 shadow-success-300 shadow-lg dark:bg-success-700 dark:border-success-800 dark:shadow-success-900 ',
        info: 'bg-info-600 text-white border border-info-700 shadow-info-300 shadow-lg dark:bg-info-700 dark:border-info-800 dark:shadow-info-900 ',
        light: 'bg-gray-600 text-white border border-gray-700 shadow-gray-300 shadow-lg dark:bg-gray-700 dark:border-gray-800 dark:shadow-gray-900 ',
        dark: 'bg-gray-700 text-white border border-gray-800 shadow-gray-300 shadow-lg dark:bg-gray-800 dark:border-gray-900 dark:shadow-gray-900 ',
    }
    const outlineTypes = {
        primary:  'bg-transparent text-primary-700 border border-primary-700 dark:text-primary-300 dark:border-primary-700',
        secondary: 'bg-transparent text-secondary-700 border border-secondary-700 dark:text-secondary-300 dark:border-secondary-700',
        danger: 'bg-transparent text-danger-700 border border-danger-700 dark:text-danger-300 dark:border-danger-700' ,
        warning: 'bg-transparent text-warning-700 border border-warning-700 dark:text-warning-300 dark:border-warning-700',
        success: 'bg-transparent text-success-700 border border-success-700 dark:text-success-300 dark:border-success-700',
        info: 'bg-transparent text-info-700 border border-info-700 dark:text-info-300 dark:border-info-700',
        light: 'bg-transparent text-gray-700 border border-gray-700 dark:text-gray-300 dark:border-gray-700',
        dark: 'bg-transparent text-gray-700 border border-gray-700 dark:text-gray-300 dark:border-gray-700',
    }
    const plainTypes = {
        primary:  'bg-primary-200 text-primary-900 border border-primary-500 dark:bg-primary-700/30 dark:border-primary-800 dark:text-primary-100',
        secondary: 'bg-secondary-200 text-secondary-900 border border-secondary-500 dark:bg-secondary-700/30 dark:border-secondary-800 dark:text-secondary-100',
        danger: 'bg-danger-200 text-danger-900 border border-danger-500 dark:bg-danger-700/30 dark:border-danger-800 dark:text-danger-100',
        warning: 'bg-warning-200 text-warning-900 border border-warning-500 dark:bg-warning-700/30 dark:border-warning-800 dark:text-warning-100',
        success: 'bg-success-200 text-success-900 border border-success-500 dark:bg-success-700/30 dark:border-success-800 dark:text-success-100',
        info: 'bg-info-200 text-info-900 border border-info-500 dark:bg-info-700/30 dark:border-info-800 dark:text-info-100',
        light: 'bg-gray-200 text-gray-900 border border-gray-500 dark:bg-gray-700/30 dark:border-gray-800 dark:text-gray-100',
        dark: 'bg-gray-700 text-gray-100 border border-gray-500 dark:bg-gray-800/30 dark:border-gray-900 dark:text-gray-100',
    }
    const gradientTypes = {
        primary:  'bg-gradient-to-r from-cyan-500 to-info-600 text-white',
        secondary: 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white',
        danger: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white',
        warning: 'bg-gradient-to-r from-orange-500 to-amber-600 text-white',
        success: 'bg-gradient-to-r from-emerald-500 to-success-600 text-white',
        info: 'bg-gradient-to-r from-info-500 to-cyan-600 text-white',
        light: 'bg-gradient-to-r from-black/10 to-black/40 text-black',
        dark: 'bg-gradient-to-r from-black/60 to-black/90 text-white',
    }

    const _closeButtonsize = {
        sm: `text-sm `,
        md: ` text-sm `,
        lg: `text-md`,
        xl: `text-lg `,
        "2xl": `text-xl `,
        "3xl": `text-2xl `,
    };
    let _closeType = "";
    const closeTypes = {
        primary:  'text-white px-0 py-0 hover:shadow-primary-400 hover:shadow-md rounded-full cursor-pointer',
        secondary: 'text-white px-0 py-0 hover:shadow-secondary-400 hover:shadow-md rounded-full cursor-pointer',
        danger: 'text-white px-0 py-0 hover:shadow-danger-400 hover:shadow-md rounded-full cursor-pointer',
        warning: 'text-white px-0 py-0 hover:shadow-warning-400 hover:shadow-md rounded-full cursor-pointer',
        success: 'text-white px-0 py-0 hover:shadow-success-400 hover:shadow-md rounded-full cursor-pointer',
        info: 'text-white px-0 py-0 hover:shadow-info-400 hover:shadow-md rounded-full cursor-pointer',
        light: 'text-black px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
        dark: 'text-white px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    }
    const closeOutlineTypes = {
        primary:  'text-primary-900 px-0 py-0 hover:shadow-primary-400 hover:shadow-md rounded-full cursor-pointer',
        secondary: 'text-secondary-900 px-0 py-0 hover:shadow-secondary-400 hover:shadow-md rounded-full cursor-pointer',
        danger: 'text-danger-900 px-0 py-0 hover:shadow-danger-400 hover:shadow-md rounded-full cursor-pointer',
        warning: 'text-warning-900 px-0 py-0 hover:shadow-warning-400 hover:shadow-md rounded-full cursor-pointer',
        success: 'text-success-900 px-0 py-0 hover:shadow-success-400 hover:shadow-md rounded-full cursor-pointer',
        info: 'text-info-900 px-0 py-0 hover:shadow-info-400 hover:shadow-md rounded-full cursor-pointer',
        light: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
        dark: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    }
    const closePlainTypes = {
        primary:  'text-primary-900 px-0 py-0 hover:shadow-primary-400 hover:shadow-md rounded-full cursor-pointer',
        secondary: 'text-secondary-900 px-0 py-0 hover:shadow-secondary-400 hover:shadow-md rounded-full cursor-pointer',
        danger: 'text-danger-900 px-0 py-0 hover:shadow-danger-400 hover:shadow-md rounded-full cursor-pointer',
        warning: 'text-warning-900 px-0 py-0 hover:shadow-warning-400 hover:shadow-md rounded-full cursor-pointer',
        success: 'text-success-900 px-0 py-0 hover:shadow-success-400 hover:shadow-md rounded-full cursor-pointer',
        info: 'text-info-900 px-0 py-0 hover:shadow-info-400 hover:shadow-md rounded-full cursor-pointer',
        light: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
        dark: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    }
    const _notOutline = notOutline && "!border-[transparent]"
    if(outline){
        _type = outlineTypes[type];
    } else if (plain){
        _type = plainTypes[type];
    }else if(gradient){
        _type = gradientTypes[type];
    } else{
        _type = types[type];
    }

    if(close && outline){
        _closeType = closeOutlineTypes[type];
    }else if(close && plain){
        _closeType = closePlainTypes[type];
    }else if(close){
        _closeType = closeTypes[type];
    }
    return (
        <>
            <div className={`${classList} ${_size[size]} ${_rounded} ${_type} ${_notOutline} w-fit flex flex-row items-center`} style={style} onClick={onClick}  >
                {children}
                {close && <BsXCircle onClick={onClose} className={`ml-2  ${_closeButtonsize[size]} ${_closeType}`} />}
            </div>

        </>
    );
}

Tag.propTypes = {

    /** Child elemanı */
    children: PropTypes.node.isRequired,

    /** Uygulanmak istenen class listesi */
    classList: PropTypes.string,

    /** Tip */
    type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']),

    /** Sadece çerçeveden oluşsun */
    outline: PropTypes.bool,

    /** Hiçbir border olmasın */
    notOutline: PropTypes.bool,

    /** Arka planı daha açık renkte olsun */
    plain: PropTypes.bool,

    /** Köşe yumuşatma seviyesi */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl','2xl','3xl', 'full']),

    /** Büyüklük */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),

    /** Kapatma seçeneği ekle */
    close: PropTypes.bool,

    /** Tag kapatma fonksiyonu */
    onClose: PropTypes.func,

    /** Inline style'ı */
    style: PropTypes.object,
};

Tag.defaultProps = {
    type:"primary",
    children: "Tag",
    size:"md"
};
