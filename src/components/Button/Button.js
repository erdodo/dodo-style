import React from 'react';
import PropTypes from 'prop-types';



/**
 * Button Componenti
 *
 */
export default function Button({classList, type,onClick,disabled,children,size,outline,plain,rounded,link }) {

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
        primary:  'bg-sky-700 text-white hover:bg-sky-600',
        secondary: 'bg-slate-700 text-white hover:bg-slate-600',
        danger: 'bg-red-700 text-white hover:bg-red-600',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-400',
        success: 'bg-green-700 text-white hover:bg-green-600',
        info: 'bg-blue-700 text-white hover:bg-blue-600',
        light: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
        dark: 'bg-gray-800 text-white hover:bg-gray-700',
    }
    const outlineTypes = {
        primary:  'bg-transparent text-sky-700 border border-sky-700 hover:bg-sky-700 hover:text-white',
        secondary: 'bg-transparent text-slate-700 border border-slate-700 hover:bg-slate-700 hover:text-white',
        danger: 'bg-transparent text-red-700 border border-red-700 hover:bg-red-700 hover:text-white',
        warning: 'bg-transparent text-yellow-700 border border-yellow-700 hover:bg-yellow-500 hover:text-white',
        success: 'bg-transparent text-green-700 border border-green-700 hover:bg-green-700 hover:text-white',
        info: 'bg-transparent text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white',
        light: 'bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white',
        dark: 'bg-transparent text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white',
    }
    const plainTypes = {
        primary:  'bg-sky-100 hover:bg-sky-200 text-sky-900 border border-sky-500',
        secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-500',
        danger: 'bg-red-100 hover:bg-red-200 text-red-900 border border-red-500',
        warning: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-900 border border-yellow-500',
        success: 'bg-green-100 hover:bg-green-200 text-green-900 border border-green-500',
        info: 'bg-blue-100 hover:bg-blue-200 text-blue-900 border border-blue-500',
        light: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-500',
        dark: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-500',
    }
    const disabledTypes = {
        primary:  'bg-sky-600 text-white cursor-not-allowed opacity-60',
        secondary: 'bg-slate-600 text-white cursor-not-allowed opacity-60',
        danger: 'bg-red-600 text-white cursor-not-allowed opacity-60',
        warning: 'bg-yellow-500 text-white cursor-not-allowed opacity-60',
        success: 'bg-green-600 text-white cursor-not-allowed opacity-60',
        info: 'bg-blue-600 text-white cursor-not-allowed opacity-60',
        light: 'bg-gray-200 text-gray-700 cursor-not-allowed opacity-60',
        dark: 'bg-gray-800 text-white cursor-not-allowed opacity-60',
    }
    const linkTypes = {
        primary:  'text-sky-700 hover:text-sky-600',
        secondary: 'text-slate-700 hover:text-slate-600',
        danger: 'text-red-700 hover:text-red-600',
        warning: 'text-yellow-700 hover:text-yellow-500',
        success: 'text-green-700 hover:text-green-600',
        info: 'text-blue-700 hover:text-blue-600',
        light: 'text-gray-700 hover:text-gray-600',
        dark: 'text-gray-700 hover:text-gray-600',
    }
    const disabledLinkTypes = {
        primary:  'text-sky-600 cursor-not-allowed opacity-60',
        secondary: 'text-slate-600 cursor-not-allowed opacity-60',
        danger: 'text-red-600 cursor-not-allowed opacity-60',
        warning: 'text-yellow-500 cursor-not-allowed opacity-60',
        success: 'text-green-600 cursor-not-allowed opacity-60',
        info: 'text-blue-600 cursor-not-allowed opacity-60',
        light: 'text-gray-700 cursor-not-allowed opacity-60',
        dark: 'text-gray-700 cursor-not-allowed opacity-60',
    }
    if(outline){
        _type = outlineTypes[type];
    }else if (link && !disabled){
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
        console.log('You have clicked me!', event.target);
    },
};
