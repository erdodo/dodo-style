import React from 'react';
import PropTypes from 'prop-types';
import { BsXCircle } from "dodo-icons/bs";
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
        primary:  'bg-sky-600 text-white  border border-sky-700 shadow-sky-300 shadow-lg dark:bg-sky-700 dark:border-sky-800 dark:shadow-sky-900 ',
        secondary: 'bg-slate-600 text-white border border-slate-700 shadow-slate-300 shadow-lg dark:bg-slate-700 dark:border-slate-800 dark:shadow-slate-900 ',
        danger: 'bg-red-600 text-white border border-red-700 shadow-red-300 shadow-lg dark:bg-red-700 dark:border-red-800 dark:shadow-red-900 ',
        warning: 'bg-yellow-600 text-white border border-yellow-700 shadow-yellow-300 shadow-lg dark:bg-yellow-700 dark:border-yellow-800 dark:shadow-yellow-900 ',
        success: 'bg-green-600 text-white border border-green-700 shadow-green-300 shadow-lg dark:bg-green-700 dark:border-green-800 dark:shadow-green-900 ',
        info: 'bg-blue-600 text-white border border-blue-700 shadow-blue-300 shadow-lg dark:bg-blue-700 dark:border-blue-800 dark:shadow-blue-900 ',
        light: 'bg-gray-600 text-white border border-gray-700 shadow-gray-300 shadow-lg dark:bg-gray-700 dark:border-gray-800 dark:shadow-gray-900 ',
        dark: 'bg-gray-700 text-white border border-gray-800 shadow-gray-300 shadow-lg dark:bg-gray-800 dark:border-gray-900 dark:shadow-gray-900 ',
    }
    const outlineTypes = {
        primary:  'bg-transparent text-sky-700 border border-sky-700 dark:text-sky-300 dark:border-sky-700',
        secondary: 'bg-transparent text-slate-700 border border-slate-700 dark:text-slate-300 dark:border-slate-700',
        danger: 'bg-transparent text-red-700 border border-red-700 dark:text-red-300 dark:border-red-700' ,
        warning: 'bg-transparent text-yellow-700 border border-yellow-700 dark:text-yellow-300 dark:border-yellow-700',
        success: 'bg-transparent text-green-700 border border-green-700 dark:text-green-300 dark:border-green-700',
        info: 'bg-transparent text-blue-700 border border-blue-700 dark:text-blue-300 dark:border-blue-700',
        light: 'bg-transparent text-gray-700 border border-gray-700 dark:text-gray-300 dark:border-gray-700',
        dark: 'bg-transparent text-gray-700 border border-gray-700 dark:text-gray-300 dark:border-gray-700',
    }
    const plainTypes = {
        primary:  'bg-sky-200 text-sky-900 border border-sky-500 dark:bg-sky-700/30 dark:border-sky-800 dark:text-sky-100',
        secondary: 'bg-slate-200 text-slate-900 border border-slate-500 dark:bg-slate-700/30 dark:border-slate-800 dark:text-slate-100',
        danger: 'bg-red-200 text-red-900 border border-red-500 dark:bg-red-700/30 dark:border-red-800 dark:text-red-100',
        warning: 'bg-yellow-200 text-yellow-900 border border-yellow-500 dark:bg-yellow-700/30 dark:border-yellow-800 dark:text-yellow-100',
        success: 'bg-green-200 text-green-900 border border-green-500 dark:bg-green-700/30 dark:border-green-800 dark:text-green-100',
        info: 'bg-blue-200 text-blue-900 border border-blue-500 dark:bg-blue-700/30 dark:border-blue-800 dark:text-blue-100',
        light: 'bg-gray-200 text-gray-900 border border-gray-500 dark:bg-gray-700/30 dark:border-gray-800 dark:text-gray-100',
        dark: 'bg-gray-700 text-gray-100 border border-gray-500 dark:bg-gray-800/30 dark:border-gray-900 dark:text-gray-100',
    }
    const gradientTypes = {
        primary:  'bg-gradient-to-r from-cyan-500 to-blue-600 text-white',
        secondary: 'bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white',
        danger: 'bg-gradient-to-r from-rose-500 to-pink-600 text-white',
        warning: 'bg-gradient-to-r from-orange-500 to-amber-600 text-white',
        success: 'bg-gradient-to-r from-emerald-500 to-green-600 text-white',
        info: 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white',
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
        primary:  'text-white px-0 py-0 hover:shadow-sky-400 hover:shadow-md rounded-full cursor-pointer',
        secondary: 'text-white px-0 py-0 hover:shadow-slate-400 hover:shadow-md rounded-full cursor-pointer',
        danger: 'text-white px-0 py-0 hover:shadow-red-400 hover:shadow-md rounded-full cursor-pointer',
        warning: 'text-white px-0 py-0 hover:shadow-yellow-400 hover:shadow-md rounded-full cursor-pointer',
        success: 'text-white px-0 py-0 hover:shadow-green-400 hover:shadow-md rounded-full cursor-pointer',
        info: 'text-white px-0 py-0 hover:shadow-blue-400 hover:shadow-md rounded-full cursor-pointer',
        light: 'text-black px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
        dark: 'text-white px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    }
    const closeOutlineTypes = {
        primary:  'text-sky-900 px-0 py-0 hover:shadow-sky-400 hover:shadow-md rounded-full cursor-pointer',
        secondary: 'text-slate-900 px-0 py-0 hover:shadow-slate-400 hover:shadow-md rounded-full cursor-pointer',
        danger: 'text-red-900 px-0 py-0 hover:shadow-red-400 hover:shadow-md rounded-full cursor-pointer',
        warning: 'text-yellow-900 px-0 py-0 hover:shadow-yellow-400 hover:shadow-md rounded-full cursor-pointer',
        success: 'text-green-900 px-0 py-0 hover:shadow-green-400 hover:shadow-md rounded-full cursor-pointer',
        info: 'text-blue-900 px-0 py-0 hover:shadow-blue-400 hover:shadow-md rounded-full cursor-pointer',
        light: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
        dark: 'text-gray-900 px-0 py-0 hover:shadow-gray-400 hover:shadow-md rounded-full cursor-pointer',
    }
    const closePlainTypes = {
        primary:  'text-sky-900 px-0 py-0 hover:shadow-sky-400 hover:shadow-md rounded-full cursor-pointer',
        secondary: 'text-slate-900 px-0 py-0 hover:shadow-slate-400 hover:shadow-md rounded-full cursor-pointer',
        danger: 'text-red-900 px-0 py-0 hover:shadow-red-400 hover:shadow-md rounded-full cursor-pointer',
        warning: 'text-yellow-900 px-0 py-0 hover:shadow-yellow-400 hover:shadow-md rounded-full cursor-pointer',
        success: 'text-green-900 px-0 py-0 hover:shadow-green-400 hover:shadow-md rounded-full cursor-pointer',
        info: 'text-blue-900 px-0 py-0 hover:shadow-blue-400 hover:shadow-md rounded-full cursor-pointer',
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
