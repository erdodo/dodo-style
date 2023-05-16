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
        primary:  'bg-primary-500 text-white hover:bg-primary-600 shadow-primary-400 shadow-md  hover:border-primary-700 hover:shadow-primary-400 dark:bg-primary-700  dark:hover:bg-primary-700 dark:shadow-primary-900 dark:hover:shadow-primary-700 dark:hover:border-primary-500',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-secondary-400 shadow-md  hover:border-secondary-700 hover:shadow-secondary-400 dark:bg-secondary-700  dark:hover:bg-secondary-700 dark:shadow-secondary-900 dark:hover:shadow-secondary-700 dark:hover:border-secondary-500',
        danger: 'bg-danger-500 text-white hover:bg-danger-600 shadow-danger-400 shadow-md  hover:border-danger-700 hover:shadow-danger-400 dark:bg-danger-700  dark:hover:bg-danger-700 dark:shadow-danger-900 dark:hover:shadow-danger-700 dark:hover:border-danger-500',
        warning: 'bg-warning-500 text-white hover:bg-warning-600 shadow-warning-400 shadow-md  hover:border-warning-700 hover:shadow-warning-400 dark:bg-warning-700  dark:hover:bg-warning-700 dark:shadow-warning-900 dark:hover:shadow-warning-700 dark:hover:border-warning-500',
        info: 'bg-info-500 text-white hover:bg-info-600 shadow-info-400 shadow-md  hover:border-info-700 hover:shadow-info-400 dark:bg-info-700  dark:hover:bg-info-700 dark:shadow-info-900 dark:hover:shadow-info-700 dark:hover:border-info-500',
        success: 'bg-success-500 text-white hover:bg-success-600 shadow-success-400 shadow-md  hover:border-success-700 hover:shadow-success-400 dark:bg-success-700  dark:hover:bg-success-700 dark:shadow-success-900 dark:hover:shadow-success-700 dark:hover:border-success-500',
        light: 'bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-gray-300 shadow-lg hover:border-gray-300 hover:shadow-gray-400 dark:bg-gray-800  dark:hover:bg-gray-700 dark:shadow-gray-900 dark:hover:shadow-gray-700 dark:text-gray-200',
        dark: 'bg-gray-800 text-white hover:bg-gray-600 shadow-gray-300 shadow-lg hover:border-gray-600 hover:shadow-gray-400 dark:bg-gray-900  dark:hover:bg-gray-700 dark:shadow-gray-900 dark:hover:shadow-gray-700',
    }
    const outlineTypes = {
        primary:  'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-600 hover:text-white hover:shadow-primary-300 hover:border-primary-600 hover:shadow-lg dark:text-primary-700 dark:border-primary-700 dark:hover:bg-primary-600 dark:hover:text-white dark:hover:shadow-primary-800 dark:hover:border-primary-600 dark:hover:shadow-lg',
        secondary: 'bg-transparent text-secondary-600 border border-secondary-600 hover:bg-secondary-600 hover:text-white hover:shadow-secondary-300 hover:border-secondary-600 hover:shadow-lg dark:text-secondary-700 dark:border-secondary-700 dark:hover:bg-secondary-600 dark:hover:text-white dark:hover:shadow-secondary-800 dark:hover:border-secondary-600 dark:hover:shadow-lg',
        danger: 'bg-transparent text-danger-600 border border-danger-600 hover:bg-danger-600 hover:text-white hover:shadow-danger-300 hover:border-danger-600 hover:shadow-lg dark:text-danger-700 dark:border-danger-700 dark:hover:bg-danger-600 dark:hover:text-white dark:hover:shadow-danger-800 dark:hover:border-danger-600 dark:hover:shadow-lg',
        warning: 'bg-transparent text-warning-600 border border-warning-600 hover:bg-warning-500 hover:text-white hover:shadow-warning-300 hover:border-warning-600 hover:shadow-lg dark:text-warning-700 dark:border-warning-700 dark:hover:bg-warning-600 dark:hover:text-white dark:hover:shadow-warning-800 dark:hover:border-warning-600 dark:hover:shadow-lg',
        success: 'bg-transparent text-success-600 border border-success-600 hover:bg-success-600 hover:text-white hover:shadow-success-300 hover:border-success-600 hover:shadow-lg dark:text-success-700 dark:border-success-700 dark:hover:bg-success-600 dark:hover:text-white dark:hover:shadow-success-800 dark:hover:border-success-600 dark:hover:shadow-lg',
        info: 'bg-transparent text-info-600 border border-info-600 hover:bg-info-600 hover:text-white hover:shadow-info-300 hover:border-info-600 hover:shadow-lg dark:text-info-700 dark:border-info-700 dark:hover:bg-info-600 dark:hover:text-white dark:hover:shadow-info-800 dark:hover:border-info-600 dark:hover:shadow-lg',
        light: 'bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-gray-300 hover:border-gray-600 hover:shadow-lg dark:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:hover:shadow-gray-800 dark:hover:border-gray-600 dark:hover:shadow-lg',
        dark: 'bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-gray-300 hover:border-gray-600 hover:shadow-lg dark:text-gray-700 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:text-white dark:hover:shadow-gray-800 dark:hover:border-gray-600 dark:hover:shadow-lg',
    }
    const plainTypes = {
        primary:  'bg-primary-100 hover:bg-primary-300 text-primary-900 border border-primary-400 hover:shadow-primary-300 hover:border-primary-500 hover:shadow-lg hover:border-primary-400/50 hover:text-white dark:bg-primary-700 dark:hover:bg-primary-600 dark:shadow-primary-900 dark:hover:shadow-primary-700 dark:text-primary-200',
        secondary: 'bg-secondary-100 hover:bg-secondary-300 text-secondary-900 border border-secondary-400 hover:shadow-secondary-300 hover:border-secondary-500 hover:shadow-lg hover:border-secondary-400/50 hover:text-white dark:bg-secondary-700 dark:hover:bg-secondary-600 dark:shadow-secondary-900 dark:hover:shadow-secondary-700 dark:text-secondary-200',
        danger: 'bg-danger-100 hover:bg-danger-300 text-danger-900 border border-danger-400 hover:shadow-danger-300 hover:border-danger-500 hover:shadow-lg hover:border-danger-400/50 hover:text-white dark:bg-danger-700 dark:hover:bg-danger-600 dark:shadow-danger-900 dark:hover:shadow-danger-700 dark:text-danger-200',
        warning: 'bg-warning-100 hover:bg-warning-300 text-warning-900 border border-warning-400 hover:shadow-warning-300 hover:border-warning-500 hover:shadow-lg hover:border-warning-400/50 hover:text-white dark:bg-warning-700 dark:hover:bg-warning-600 dark:shadow-warning-900 dark:hover:shadow-warning-700 dark:text-warning-200',
        success: 'bg-success-100 hover:bg-success-300 text-success-900 border border-success-400 hover:shadow-success-300 hover:border-success-500 hover:shadow-lg hover:border-success-400/50 hover:text-white dark:bg-success-700 dark:hover:bg-success-600 dark:shadow-success-900 dark:hover:shadow-success-700 dark:text-success-200',
        info: 'bg-info-100 hover:bg-info-300 text-info-900 border border-info-400 hover:shadow-info-300 hover:border-info-500 hover:shadow-lg hover:border-info-400/50 hover:text-white dark:bg-info-700 dark:hover:bg-info-600 dark:shadow-info-900 dark:hover:shadow-info-700 dark:text-info-200',
        light: 'bg-gray-100 hover:bg-gray-300 text-gray-900 border border-gray-400 hover:shadow-gray-300 hover:border-gray-500 hover:shadow-lg hover:border-gray-400/50 hover:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:shadow-gray-900 dark:hover:shadow-gray-700 dark:text-gray-200',
        dark: 'bg-gray-300 hover:bg-gray-600 text-gray-900 border border-gray-400 hover:shadow-gray-300 hover:border-gray-500 hover:shadow-lg hover:border-gray-400/50 hover:text-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:shadow-gray-900 dark:hover:shadow-gray-700 dark:text-gray-200',
    }
    const disabledTypes = {
        primary:  'bg-primary-500 text-white cursor-not-allowed opacity-60 dark:bg-primary-700 dark:text-primary-200',
        secondary: 'bg-secondary-500 text-white cursor-not-allowed opacity-60 dark:bg-secondary-700 dark:text-secondary-200',
        danger: 'bg-danger-500 text-white cursor-not-allowed opacity-60 dark:bg-danger-700 dark:text-danger-200',
        warning: 'bg-warning-500 text-white cursor-not-allowed opacity-60 dark:bg-warning-700 dark:text-warning-200',
        success: 'bg-success-500 text-white cursor-not-allowed opacity-60 dark:bg-success-700 dark:text-success-200',
        info: 'bg-info-500 text-white cursor-not-allowed opacity-60 dark:bg-info-700 dark:text-info-200',
        light: 'bg-gray-200 text-gray-600 cursor-not-allowed opacity-60 dark:bg-gray-700 dark:text-gray-200',
        dark: 'bg-gray-800 text-white cursor-not-allowed opacity-60 dark:bg-gray-700 dark:text-gray-200',
    }
    const linkTypes = {
        primary:  'text-primary-600 hover:text-primary-500 text-shadow-primary-300 hover:text-shadow-primary-400  text-shadow-lg dark:text-primary-200 dark:hover:text-primary-300 dark:text-shadow-primary-900 dark:hover:text-shadow-primary-800',
        secondary: 'text-secondary-600 hover:text-secondary-500 text-shadow-secondary-300 hover:text-shadow-secondary-400  text-shadow-lg dark:text-secondary-200 dark:hover:text-secondary-300 dark:text-shadow-secondary-900 dark:hover:text-shadow-secondary-800',
        danger: 'text-danger-600 hover:text-danger-500 text-shadow-danger-300 hover:text-shadow-danger-400  text-shadow-lg dark:text-danger-200 dark:hover:text-danger-300 dark:text-shadow-danger-900 dark:hover:text-shadow-danger-800',
        warning: 'text-warning-600 hover:text-warning-500 text-shadow-warning-300 hover:text-shadow-warning-400  text-shadow-lg dark:text-warning-200 dark:hover:text-warning-300 dark:text-shadow-warning-900 dark:hover:text-shadow-warning-800',
        success: 'text-success-600 hover:text-success-500 text-shadow-success-300 hover:text-shadow-success-400  text-shadow-lg dark:text-success-200 dark:hover:text-success-300 dark:text-shadow-success-900 dark:hover:text-shadow-success-800',
        info: 'text-info-600 hover:text-info-500 text-shadow-info-300 hover:text-shadow-info-400  text-shadow-lg dark:text-info-200 dark:hover:text-info-300 dark:text-shadow-info-900 dark:hover:text-shadow-info-800',
        light: 'text-gray-600 hover:text-gray-500 text-shadow-gray-300 hover:text-shadow-gray-400  text-shadow-lg dark:text-gray-200 dark:hover:text-gray-300 dark:text-shadow-gray-900 dark:hover:text-shadow-gray-800',
        dark: 'text-gray-600 hover:text-gray-500 text-shadow-gray-300 hover:text-shadow-gray-400  text-shadow-lg dark:text-gray-200 dark:hover:text-gray-300 dark:text-shadow-gray-900 dark:hover:text-shadow-gray-800',
    }
    const disabledLinkTypes = {
        primary:  'text-primary-500 cursor-not-allowed opacity-60 dark:text-primary-200',
        secondary: 'text-secondary-500 cursor-not-allowed opacity-60 dark:text-secondary-200',
        danger: 'text-danger-500 cursor-not-allowed opacity-60 dark:text-danger-200',
        warning: 'text-warning-500 cursor-not-allowed opacity-60 dark:text-warning-200',
        success: 'text-success-500 cursor-not-allowed opacity-60 dark:text-success-200',
        info: 'text-info-500 cursor-not-allowed opacity-60 dark:text-info-200',
        light: 'text-gray-600 cursor-not-allowed opacity-60 dark:text-gray-200',
        dark: 'text-gray-600 cursor-not-allowed opacity-60 dark:text-gray-200',
    }
    const gradientTypes = {
        primary:  'bg-gradient-to-r from-cyan-500 to-info-600 text-white hover:shadow-info-300 hover:shadow-lg hover:from-cyan-400 hover:to-info-500 dark:from-cyan-700 dark:to-info-800 dark:text-cyan-200 dark:hover:shadow-cyan-900 dark:hover:shadow-lg dark:hover:from-cyan-600 dark:hover:to-info-700',
        secondary: 'bg-gradient-to-r from-fuchsia-500 to-purple-700 text-white hover:shadow-purple-300 hover:shadow-lg hover:from-fuchsia-400 hover:to-purple-500 dark:from-fuchsia-700 dark:to-purple-800 dark:text-fuchsia-200 dark:hover:shadow-fuchsia-900 dark:hover:shadow-lg dark:hover:from-fuchsia-600 dark:hover:to-purple-700',
        danger: 'bg-gradient-to-r from-danger-500 to-pink-600 text-white hover:shadow-pink-300 hover:shadow-lg hover:from-danger-400 hover:to-pink-500 dark:from-danger-700 dark:to-pink-800 dark:text-danger-200 dark:hover:shadow-danger-900 dark:hover:shadow-lg dark:hover:from-danger-600 dark:hover:to-pink-700',
        warning: 'bg-gradient-to-r from-orange-500 to-warning-600 text-white hover:shadow-warning-300 hover:shadow-lg hover:from-orange-400 hover:to-warning-500 dark:from-orange-700 dark:to-warning-800 dark:text-orange-200 dark:hover:shadow-orange-900 dark:hover:shadow-lg dark:hover:from-orange-600 dark:hover:to-warning-700',
        success: 'bg-gradient-to-r from-success-500 to-teal-600 text-white hover:shadow-teal-300 hover:shadow-lg hover:from-success-400 hover:to-teal-500 dark:from-success-700 dark:to-teal-800 dark:text-success-200 dark:hover:shadow-success-900 dark:hover:shadow-lg dark:hover:from-success-600 dark:hover:to-teal-700',
        info: 'bg-gradient-to-r from-primary-500 to-info-600 text-white hover:shadow-info-300 hover:shadow-lg hover:from-primary-400 hover:to-info-500  dark:from-primary-700 dark:to-info-800 dark:text-primary-200 dark:hover:shadow-primary-900 dark:hover:shadow-lg dark:hover:from-primary-600 dark:hover:to-info-700',
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
    size:"md",
    onClick: (event) => {
        alert('You have clicked me!', event.target);
    },
};
