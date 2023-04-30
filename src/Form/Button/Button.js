import React from 'react';
import PropTypes from 'prop-types';
//todo: özel class list ve style örnekleri
/**
 * Button Componenti
 *
 */
export default function Button({classList, type,onClick,disabled,children,size,outline,notOutline,plain,rounded,link,gradient,style}) {

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
    let _type ="";
    const types = {
        primary:  'bg-sky-600 text-white hover:bg-sky-500 shadow-sky-300 shadow-lg  hover:border-sky-500 hover:shadow-sky-400 dark:bg-sky-700  dark:hover:bg-sky-600 dark:shadow-sky-900 dark:hover:shadow-sky-700',
        secondary: 'bg-slate-600 text-white hover:bg-slate-500 shadow-slate-300 shadow-lg hover:border-slate-500 hover:shadow-slate-400 dark:bg-slate-700  dark:hover:bg-slate-600 dark:shadow-slate-900 dark:hover:shadow-slate-700',
        danger: 'bg-red-600 text-white hover:bg-red-500 shadow-red-300 shadow-lg hover:border-red-500 hover:shadow-red-400 dark:bg-red-700  dark:hover:bg-red-600 dark:shadow-red-900 dark:hover:shadow-red-700',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-400 shadow-yellow-300 shadow-lg hover:border-yellow-400 hover:shadow-yellow-400 dark:bg-yellow-700  dark:hover:bg-yellow-600 dark:shadow-yellow-900 dark:hover:shadow-yellow-700',
        success: 'bg-green-600 text-white hover:bg-green-500 shadow-green-300 shadow-lg hover:border-green-500 hover:shadow-green-400 dark:bg-green-700  dark:hover:bg-green-600 dark:shadow-green-900 dark:hover:shadow-green-700',
        info: 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-300 shadow-lg hover:border-blue-500 hover:shadow-blue-400 dark:bg-blue-700  dark:hover:bg-blue-600 dark:shadow-blue-900 dark:hover:shadow-blue-700',
        light: 'bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-gray-300 shadow-lg hover:border-gray-300 hover:shadow-gray-400 dark:bg-gray-800  dark:hover:bg-gray-700 dark:shadow-gray-900 dark:hover:shadow-gray-700 dark:text-gray-200',
        dark: 'bg-gray-800 text-white hover:bg-gray-600 shadow-gray-300 shadow-lg hover:border-gray-600 hover:shadow-gray-400 dark:bg-gray-900  dark:hover:bg-gray-700 dark:shadow-gray-900 dark:hover:shadow-gray-700',
    }
    const outlineTypes = {
        primary:  'bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white hover:shadow-sky-300 hover:border-sky-600 hover:shadow-lg dark:text-sky-700 dark:border-sky-700 dark:hover:bg-sky-600 dark:hover:text-white dark:hover:shadow-sky-800 dark:hover:border-sky-600 dark:hover:shadow-lg',
        secondary: 'bg-transparent text-slate-600 border border-slate-600 hover:bg-slate-600 hover:text-white hover:shadow-slate-300 hover:border-slate-600 hover:shadow-lg dark:text-slate-700 dark:border-slate-700 dark:hover:bg-slate-600 dark:hover:text-white dark:hover:shadow-slate-800 dark:hover:border-slate-600 dark:hover:shadow-lg',
        danger: 'bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white hover:shadow-red-300 hover:border-red-600 hover:shadow-lg dark:text-red-700 dark:border-red-700 dark:hover:bg-red-600 dark:hover:text-white dark:hover:shadow-red-800 dark:hover:border-red-600 dark:hover:shadow-lg',
        warning: 'bg-transparent text-yellow-600 border border-yellow-600 hover:bg-yellow-500 hover:text-white hover:shadow-yellow-300 hover:border-yellow-600 hover:shadow-lg dark:text-yellow-700 dark:border-yellow-700 dark:hover:bg-yellow-600 dark:hover:text-white dark:hover:shadow-yellow-800 dark:hover:border-yellow-600 dark:hover:shadow-lg',
        success: 'bg-transparent text-green-600 border border-green-600 hover:bg-green-600 hover:text-white hover:shadow-green-300 hover:border-green-600 hover:shadow-lg dark:text-green-700 dark:border-green-700 dark:hover:bg-green-600 dark:hover:text-white dark:hover:shadow-green-800 dark:hover:border-green-600 dark:hover:shadow-lg',
        info: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-blue-300 hover:border-blue-600 hover:shadow-lg dark:text-blue-700 dark:border-blue-700 dark:hover:bg-blue-600 dark:hover:text-white dark:hover:shadow-blue-800 dark:hover:border-blue-600 dark:hover:shadow-lg',
        light: 'bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-gray-300 hover:border-gray-600 hover:shadow-lg dark:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:hover:shadow-gray-800 dark:hover:border-gray-600 dark:hover:shadow-lg',
        dark: 'bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-gray-300 hover:border-gray-600 hover:shadow-lg dark:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:hover:shadow-gray-800 dark:hover:border-gray-600 dark:hover:shadow-lg',
    }
    const plainTypes = {
        primary:  'bg-sky-100 hover:bg-sky-300 text-sky-900 border border-sky-400 hover:shadow-sky-300 hover:border-sky-500 hover:shadow-lg hover:border-sky-400/50 hover:text-white dark:bg-sky-700 dark:hover:bg-sky-600 dark:shadow-sky-900 dark:hover:shadow-sky-700 dark:text-sky-200',
        secondary: 'bg-slate-100 hover:bg-slate-300 text-slate-900 border border-slate-400 hover:shadow-slate-300 hover:border-slate-500 hover:shadow-lg hover:border-slate-400/50 hover:text-white dark:bg-slate-700 dark:hover:bg-slate-600 dark:shadow-slate-900 dark:hover:shadow-slate-700 dark:text-slate-200',
        danger: 'bg-red-100 hover:bg-red-300 text-red-900 border border-red-400 hover:shadow-red-300 hover:border-red-500 hover:shadow-lg hover:border-red-400/50 hover:text-white dark:bg-red-700 dark:hover:bg-red-600 dark:shadow-red-900 dark:hover:shadow-red-700 dark:text-red-200',
        warning: 'bg-yellow-100 hover:bg-yellow-300 text-yellow-900 border border-yellow-400 hover:shadow-yellow-300 hover:border-yellow-500 hover:shadow-lg hover:border-yellow-400/50 hover:text-white dark:bg-yellow-700 dark:hover:bg-yellow-600 dark:shadow-yellow-900 dark:hover:shadow-yellow-700 dark:text-yellow-200',
        success: 'bg-green-100 hover:bg-green-300 text-green-900 border border-green-400 hover:shadow-green-300 hover:border-green-500 hover:shadow-lg hover:border-green-400/50 hover:text-white dark:bg-green-700 dark:hover:bg-green-600 dark:shadow-green-900 dark:hover:shadow-green-700 dark:text-green-200',
        info: 'bg-blue-100 hover:bg-blue-300 text-blue-900 border border-blue-400 hover:shadow-blue-300 hover:border-blue-500 hover:shadow-lg hover:border-blue-400/50 hover:text-white dark:bg-blue-700 dark:hover:bg-blue-600 dark:shadow-blue-900 dark:hover:shadow-blue-700 dark:text-blue-200',
        light: 'bg-gray-100 hover:bg-gray-300 text-gray-900 border border-gray-400 hover:shadow-gray-300 hover:border-gray-500 hover:shadow-lg hover:border-gray-400/50 hover:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:shadow-gray-900 dark:hover:shadow-gray-700 dark:text-gray-200',
        dark: 'bg-gray-300 hover:bg-gray-600 text-gray-900 border border-gray-400 hover:shadow-gray-300 hover:border-gray-500 hover:shadow-lg hover:border-gray-400/50 hover:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:shadow-gray-900 dark:hover:shadow-gray-700 dark:text-gray-200',
    }
    const disabledTypes = {
        primary:  'bg-sky-500 text-white cursor-not-allowed opacity-60 dark:bg-sky-700 dark:text-sky-200',
        secondary: 'bg-slate-500 text-white cursor-not-allowed opacity-60 dark:bg-slate-700 dark:text-slate-200',
        danger: 'bg-red-500 text-white cursor-not-allowed opacity-60 dark:bg-red-700 dark:text-red-200',
        warning: 'bg-yellow-500 text-white cursor-not-allowed opacity-60 dark:bg-yellow-700 dark:text-yellow-200',
        success: 'bg-green-500 text-white cursor-not-allowed opacity-60 dark:bg-green-700 dark:text-green-200',
        info: 'bg-blue-500 text-white cursor-not-allowed opacity-60 dark:bg-blue-700 dark:text-blue-200',
        light: 'bg-gray-200 text-gray-600 cursor-not-allowed opacity-60 dark:bg-gray-700 dark:text-gray-200',
        dark: 'bg-gray-800 text-white cursor-not-allowed opacity-60 dark:bg-gray-700 dark:text-gray-200',
    }
    const linkTypes = {
        primary:  'text-sky-600 hover:text-sky-500 text-shadow-sky-300 hover:text-shadow-sky-400  text-shadow-lg dark:text-sky-200 dark:hover:text-sky-300 dark:text-shadow-sky-900 dark:hover:text-shadow-sky-800',
        secondary: 'text-slate-600 hover:text-slate-500 text-shadow-slate-300 hover:text-shadow-slate-400  text-shadow-lg dark:text-slate-200 dark:hover:text-slate-300 dark:text-shadow-slate-900 dark:hover:text-shadow-slate-800',
        danger: 'text-red-600 hover:text-red-500 text-shadow-red-300 hover:text-shadow-red-400  text-shadow-lg dark:text-red-200 dark:hover:text-red-300 dark:text-shadow-red-900 dark:hover:text-shadow-red-800',
        warning: 'text-yellow-600 hover:text-yellow-500 text-shadow-yellow-300 hover:text-shadow-yellow-400  text-shadow-lg dark:text-yellow-200 dark:hover:text-yellow-300 dark:text-shadow-yellow-900 dark:hover:text-shadow-yellow-800',
        success: 'text-green-600 hover:text-green-500 text-shadow-green-300 hover:text-shadow-green-400  text-shadow-lg dark:text-green-200 dark:hover:text-green-300 dark:text-shadow-green-900 dark:hover:text-shadow-green-800',
        info: 'text-blue-600 hover:text-blue-500 text-shadow-blue-300 hover:text-shadow-blue-400  text-shadow-lg dark:text-blue-200 dark:hover:text-blue-300 dark:text-shadow-blue-900 dark:hover:text-shadow-blue-800',
        light: 'text-gray-600 hover:text-gray-500 text-shadow-gray-300 hover:text-shadow-gray-400  text-shadow-lg dark:text-gray-200 dark:hover:text-gray-300 dark:text-shadow-gray-900 dark:hover:text-shadow-gray-800',
        dark: 'text-gray-600 hover:text-gray-500 text-shadow-gray-300 hover:text-shadow-gray-400  text-shadow-lg dark:text-gray-200 dark:hover:text-gray-300 dark:text-shadow-gray-900 dark:hover:text-shadow-gray-800',
    }
    const disabledLinkTypes = {
        primary:  'text-sky-500 cursor-not-allowed opacity-60 dark:text-sky-200',
        secondary: 'text-slate-500 cursor-not-allowed opacity-60 dark:text-slate-200',
        danger: 'text-red-500 cursor-not-allowed opacity-60 dark:text-red-200',
        warning: 'text-yellow-500 cursor-not-allowed opacity-60 dark:text-yellow-200',
        success: 'text-green-500 cursor-not-allowed opacity-60 dark:text-green-200',
        info: 'text-blue-500 cursor-not-allowed opacity-60 dark:text-blue-200',
        light: 'text-gray-600 cursor-not-allowed opacity-60 dark:text-gray-200',
        dark: 'text-gray-600 cursor-not-allowed opacity-60 dark:text-gray-200',
    }
    const gradientTypes = {
        primary:  'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-blue-300 hover:shadow-lg hover:from-cyan-400 hover:to-blue-500 dark:from-cyan-700 dark:to-blue-800 dark:text-cyan-200 dark:hover:shadow-cyan-900 dark:hover:shadow-lg dark:hover:from-cyan-600 dark:hover:to-blue-700',
        secondary: 'bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white hover:shadow-purple-300 hover:shadow-lg hover:from-fuchsia-400 hover:to-purple-500 dark:from-fuchsia-700 dark:to-purple-800 dark:text-fuchsia-200 dark:hover:shadow-fuchsia-900 dark:hover:shadow-lg dark:hover:from-fuchsia-600 dark:hover:to-purple-700',
        danger: 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-pink-300 hover:shadow-lg hover:from-red-400 hover:to-pink-500 dark:from-red-700 dark:to-pink-800 dark:text-red-200 dark:hover:shadow-red-900 dark:hover:shadow-lg dark:hover:from-red-600 dark:hover:to-pink-700',
        warning: 'bg-gradient-to-r from-orange-500 to-yellow-600 text-white hover:shadow-yellow-300 hover:shadow-lg hover:from-orange-400 hover:to-yellow-500 dark:from-orange-700 dark:to-yellow-800 dark:text-orange-200 dark:hover:shadow-orange-900 dark:hover:shadow-lg dark:hover:from-orange-600 dark:hover:to-yellow-700',
        success: 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-teal-300 hover:shadow-lg hover:from-green-400 hover:to-teal-500 dark:from-green-700 dark:to-teal-800 dark:text-green-200 dark:hover:shadow-green-900 dark:hover:shadow-lg dark:hover:from-green-600 dark:hover:to-teal-700',
        info: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-blue-300 hover:shadow-lg hover:from-sky-400 hover:to-blue-500  dark:from-sky-700 dark:to-blue-800 dark:text-sky-200 dark:hover:shadow-sky-900 dark:hover:shadow-lg dark:hover:from-sky-600 dark:hover:to-blue-700',
        light: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:shadow-gray-300 hover:shadow-lg hover:from-gray-400 hover:to-gray-500   dark:from-gray-700 dark:to-gray-800 dark:text-gray-200 dark:hover:shadow-gray-900 dark:hover:shadow-lg dark:hover:from-gray-600 dark:hover:to-gray-700',
        dark: 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-gray-300 hover:shadow-lg hover:from-gray-600 hover:to-gray-700 dark:from-gray-900 dark:to-gray-900 dark:text-gray-200 dark:hover:shadow-gray-900 dark:hover:shadow-lg dark:hover:from-gray-800 dark:hover:to-gray-900',
    }
    const _notOutline = notOutline&& "!border-[transparent] ";
    if(outline){
        _type = outlineTypes[type];
    }else if(gradient){
        _type = gradientTypes[type];
    } else if (link && !disabled){
        _type = linkTypes[type];
    }else if(link && disabled){
        _type = disabledLinkTypes[type];
    } else if (plain){
        _type = plainTypes[type];
    } else if(disabled && !link){
        _type = disabledTypes[type];
    } else{
        _type = types[type];
    }
    return (
        <>
            <button className={`${classList} ${_size[size]} ${_rounded} ${_type} ${_notOutline} `} style={style} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </>
    );
}

Button.propTypes = {


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

    /** Arka planı hiç olmasın */
    link: PropTypes.bool,

    /** Gradient bir tasarım olsun */
    gradient: PropTypes.bool,

    /** Köşe yumuşatma seviyesi */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl','2xl','3xl', 'full']),

    /** Büyüklük */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),

    /** Disabled seçeneği */
    disabled: PropTypes.bool,

    /** Tıklandığında çalışacak method */
    onClick: PropTypes.func,

    /** Butonun inline style'ı */
    style: PropTypes.object,
};

Button.defaultProps = {
    children: 'Button',
    size:"md",
    type:"",
    onClick: (event) => {
        alert('You have clicked me!', event.target);
    },
};
