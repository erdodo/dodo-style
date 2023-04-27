import React from 'react';
import PropTypes from 'prop-types';



/**
 * Button Componenti
 *
 */
export default function Button({classList, type,onClick,disabled,children,size,outline,plain,rounded,link,gradient }) {

    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    const _size = {
        sm: `py-1 px-2  text-sm `,
        md: `py-2 px-4  text-md`,
        lg: `py-3 px-6  text-lg `,
        xl: `py-4 px-8 text-xl `,
        "2xl": `py-5 px-10 text-2xl `,
    };
    let _type ="";
    const types = {
        primary:  'bg-sky-600 text-white hover:bg-sky-500 shadow-sky-300 shadow-lg  hover:border-sky-500 hover:shadow-sky-400',
        secondary: 'bg-slate-600 text-white hover:bg-slate-500 shadow-slate-300 shadow-lg hover:border-slate-500 hover:shadow-slate-400',
        danger: 'bg-red-600 text-white hover:bg-red-500 shadow-red-300 shadow-lg hover:border-red-500 hover:shadow-red-400',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-400 shadow-yellow-300 shadow-lg hover:border-yellow-400 hover:shadow-yellow-400',
        success: 'bg-green-600 text-white hover:bg-green-500 shadow-green-300 shadow-lg hover:border-green-500 hover:shadow-green-400',
        info: 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-300 shadow-lg hover:border-blue-500 hover:shadow-blue-400',
        light: 'bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-gray-300 shadow-lg hover:border-gray-300 hover:shadow-gray-400',
        dark: 'bg-gray-800 text-white hover:bg-gray-600 shadow-gray-300 shadow-lg hover:border-gray-600 hover:shadow-gray-400',
    }
    const outlineTypes = {
        primary:  'bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white hover:shadow-sky-300 hover:border-sky-600 hover:shadow-lg',
        secondary: 'bg-transparent text-slate-600 border border-slate-600 hover:bg-slate-600 hover:text-white hover:shadow-slate-300 hover:border-slate-600 hover:shadow-lg',
        danger: 'bg-transparent text-red-600 border border-red-600 hover:bg-red-600 hover:text-white hover:shadow-red-300 hover:border-red-600 hover:shadow-lg',
        warning: 'bg-transparent text-yellow-600 border border-yellow-600 hover:bg-yellow-500 hover:text-white hover:shadow-yellow-300 hover:border-yellow-600 hover:shadow-lg',
        success: 'bg-transparent text-green-600 border border-green-600 hover:bg-green-600 hover:text-white hover:shadow-green-300 hover:border-green-600 hover:shadow-lg',
        info: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-blue-300 hover:border-blue-600 hover:shadow-lg',
        light: 'bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-gray-300 hover:border-gray-600 hover:shadow-lg',
        dark: 'bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-gray-300 hover:border-gray-600 hover:shadow-lg',
    }
    const plainTypes = {
        primary:  'bg-sky-100 hover:bg-sky-300 text-sky-900 border border-sky-400 hover:shadow-sky-300 hover:border-sky-500 hover:shadow-lg hover:border-sky-400/50 hover:text-white',
        secondary: 'bg-slate-100 hover:bg-slate-300 text-slate-900 border border-slate-400 hover:shadow-slate-300 hover:border-slate-500 hover:shadow-lg hover:border-slate-400/50 hover:text-white',
        danger: 'bg-red-100 hover:bg-red-300 text-red-900 border border-red-400 hover:shadow-red-300 hover:border-red-500 hover:shadow-lg hover:border-red-400/50 hover:text-white',
        warning: 'bg-yellow-100 hover:bg-yellow-300 text-yellow-900 border border-yellow-400 hover:shadow-yellow-300 hover:border-yellow-500 hover:shadow-lg hover:border-yellow-400/50 hover:text-white',
        success: 'bg-green-100 hover:bg-green-300 text-green-900 border border-green-400 hover:shadow-green-300 hover:border-green-500 hover:shadow-lg hover:border-green-400/50 hover:text-white',
        info: 'bg-blue-100 hover:bg-blue-300 text-blue-900 border border-blue-400 hover:shadow-blue-300 hover:border-blue-500 hover:shadow-lg hover:border-blue-400/50 hover:text-white',
        light: 'bg-gray-100 hover:bg-gray-300 text-gray-900 border border-gray-400 hover:shadow-gray-300 hover:border-gray-500 hover:shadow-lg hover:border-gray-400/50 hover:text-white',
        dark: 'bg-gray-300 hover:bg-gray-600 text-gray-900 border border-gray-400 hover:shadow-gray-300 hover:border-gray-500 hover:shadow-lg hover:border-gray-400/50 hover:text-white',
    }
    const disabledTypes = {
        primary:  'bg-sky-500 text-white cursor-not-allowed opacity-60',
        secondary: 'bg-slate-500 text-white cursor-not-allowed opacity-60',
        danger: 'bg-red-500 text-white cursor-not-allowed opacity-60',
        warning: 'bg-yellow-500 text-white cursor-not-allowed opacity-60',
        success: 'bg-green-500 text-white cursor-not-allowed opacity-60',
        info: 'bg-blue-500 text-white cursor-not-allowed opacity-60',
        light: 'bg-gray-200 text-gray-600 cursor-not-allowed opacity-60',
        dark: 'bg-gray-800 text-white cursor-not-allowed opacity-60',
    }
    const linkTypes = {
        primary:  'text-sky-600 hover:text-sky-500 text-shadow-sky-300 hover:text-shadow-sky-400  text-shadow-lg',
        secondary: 'text-slate-600 hover:text-slate-500',
        danger: 'text-red-600 hover:text-red-500',
        warning: 'text-yellow-600 hover:text-yellow-500',
        success: 'text-green-600 hover:text-green-500',
        info: 'text-blue-600 hover:text-blue-500',
        light: 'text-gray-600 hover:text-gray-500',
        dark: 'text-gray-600 hover:text-gray-500',
    }
    const disabledLinkTypes = {
        primary:  'text-sky-500 cursor-not-allowed opacity-60',
        secondary: 'text-slate-500 cursor-not-allowed opacity-60',
        danger: 'text-red-500 cursor-not-allowed opacity-60',
        warning: 'text-yellow-500 cursor-not-allowed opacity-60',
        success: 'text-green-500 cursor-not-allowed opacity-60',
        info: 'text-blue-500 cursor-not-allowed opacity-60',
        light: 'text-gray-600 cursor-not-allowed opacity-60',
        dark: 'text-gray-600 cursor-not-allowed opacity-60',
    }
    const gradientTypes = {
        primary:  'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-blue-300 hover:shadow-lg hover:from-cyan-400 hover:to-blue-500',
        secondary: 'bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white hover:shadow-purple-300 hover:shadow-lg hover:from-fuchsia-400 hover:to-purple-500',
        danger: 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:shadow-pink-300 hover:shadow-lg hover:from-red-400 hover:to-pink-500',
        warning: 'bg-gradient-to-r from-orange-500 to-yellow-600 text-white hover:shadow-yellow-300 hover:shadow-lg hover:from-orange-400 hover:to-yellow-500',
        success: 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-teal-300 hover:shadow-lg hover:from-green-400 hover:to-teal-500',
        info: 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-blue-300 hover:shadow-lg hover:from-sky-400 hover:to-blue-500',
        light: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:shadow-gray-300 hover:shadow-lg hover:from-gray-400 hover:to-gray-500',
        dark: 'bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:shadow-gray-300 hover:shadow-lg hover:from-gray-600 hover:to-gray-700',
    }
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
            <button className={`${classList} ${_size[size]} ${_rounded} ${_type} `} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </>
    );
}

Button.propTypes = {


    /** Buton içerine yazılacak yazılar */
    children: PropTypes.node.isRequired,

    /** Buton class'ı */
    classList: PropTypes.string,

    /** Buton tipi */
    type: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark']),

    /** Buton sadece borderlardan oluşsun mu */
    outline: PropTypes.bool,

    /** Buton arka planı daha açık olsun mu */
    plain: PropTypes.bool,

    /** Buton link olsun mu */
    link: PropTypes.bool,

    /** Buton gradient olsun mu */
    gradient: PropTypes.bool,

    /** Buton köşe yumuşak olsun mu */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),

    /** Buton büyüklüğü */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),

    /** Buton disable olsun mu */
    disabled: PropTypes.bool,

    /** Gets called when the user clicks on the button */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    children: 'Button',
    size:"md",
    onClick: (event) => {
        // eslint-disable-next-line no-console
        alert('You have clicked me!', event.target);
    },
};
