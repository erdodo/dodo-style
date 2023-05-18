import React from 'react';
import PropTypes from 'prop-types';
import Config from "./config.json"
//todo: özel class list ve style örnekleri
/**
 * Button Componenti
 *
 */
export default function Button({ type,onClick,disabled,children,size,outline,notOutline,plain,rounded,link,gradient,style,...props}) {

    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    if(rounded==='2xl') _rounded = 'rounded-[1rem]';
    if(rounded==='3xl') _rounded = 'rounded-[1.2rem]';
    const _size = Config.size;
    let _type ="";
    const types = Config.types;
    const outlineTypes = Config.outlineTypes;
    const plainTypes = Config.plainTypes;
    const disabledTypes = Config.disabledTypes;
    const linkTypes = Config.linkTypes;
    const disabledLinkTypes = Config.disabledLinkTypes;
    const gradientTypes = Config.gradientTypes;
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
            <button {...props} className={`dodo-button ${props.className} ${_size[size]} ${_rounded} ${_type} ${_notOutline} `} style={style} onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </>
    );
}


Button.propTypes = {


    /** Child elemanı */
    children: PropTypes.node.isRequired,


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
    size: PropTypes.oneOf(["xs",'sm', 'md', 'lg', 'xl', '2xl']),

    /** Disabled seçeneği */
    disabled: PropTypes.bool,

    /** Tıklandığında çalışacak method */
    onClick: PropTypes.func,

    /** Butonun inline style'ı */
    style: PropTypes.object,
};

Button.defaultProps = {
    size:"md",
};
