import React from "react";
import './Switch.css'
import config from "../../config.json";
import PropTypes from "prop-types";
export default function CheckBox(props){
    console.log(props)
    const [checked, setChecked] = React.useState(false);
        React.useEffect(() => {
            let _val = false
            if(props.value === "true" || props.value === true || props.value === 1 || props.value === "1" || props.value==="on"){
                _val = true
            }
            setChecked(_val);
            console.log(_val, props.value,checked)
        }, [props.value]);
    const change = (e) => {
        props.onChange(e);
        setChecked(e.target.checked);
    }

    return(
        <>
            {props.type === "checkbox" &&
                <label className={"flex flex-row items-center"}>
                    <span className={`!mr-2 ${config.textSizes[props.size]}`}>{props.beforeLabel} </span>
                        <input
                            {...props}
                            checked={checked}
                            onChange={change}
                            className={` ${config.checkboxSizes[props.size]} ${config.checkboxStyleTypes[props.styleType]} ${props.className}   `}
                        />

                    <span className={`!ml-2 ${config.textSizes[props.size]}`}>{props.afterLabel} </span>

                </label>
            }
            {props.type === "switch" &&
                <label className={"dodo-switch flex flex-row items-center"}>
                    <span className={`!mr-2 ${config.textSizes[props.size]}`}>{props.beforeLabel} </span>
                    <input
                        {...props}
                        type="checkbox"
                        className={`  ${config.switchSizeList[props.size]} ${config.switchTypeList[props.disabled?"disabled": props.styleType]} ${props.className} `}
                        checked={checked}
                        onChange={change}
                    />
                    <span className={`!ml-2 ${config.textSizes[props.size]}`}>{props.afterLabel} </span>
                </label>
            }

        </>
    )
}

CheckBox.propTypes = {


    /** Child elemanı */
    value: PropTypes.any,

    /** Uygulanmak istenen class listesi */
    className: PropTypes.string,

    /** Tip */
    type: PropTypes.oneOf(["checkbox","switch"]),

    /** Stil tipi */
    styleType: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),

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

    /** "Checkbox" label */
    beforeLabel: PropTypes.any,

    /** "Checkbox" label */
    afterLabel: PropTypes.any,

};

CheckBox.defaultProps = {
    size:"md",
    type:"checkbox",
    styleType: 'primary'
};

