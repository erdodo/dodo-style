import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Form/Button/Button';
export default function Badge({children,text,styleType,location,outline,notOutline,size}) {
    const locationList={
        "top-left":"top-[-15px] left-[-15px]",
        "top-right":"top-[-15px] right-[-15px]",
        "bottom-left":"bottom-[-15px] left-[-15px]",
        "bottom-right":"bottom-[-15px] right-[-15px]"
    }
    let _type=""
    const typeList={
        "primary":"bg-primary-600 dark:bg-primary-500 text-white",
        "secondary":"bg-gray-600 dark:bg-gray-500 text-white",
        "success":"bg-success-600 dark:bg-success-500 text-white",
        "danger":"bg-danger-500 dark:bg-danger-500 text-white",
        "warning":"bg-warning-500 dark:bg-warning-500 text-white",
        "info":"bg-info-500 dark:bg-info-500 text-white",
        "light":"bg-gray-300 dark:bg-gray-300 text-gray-800",
        "dark":"bg-gray-800 dark:bg-gray-800 text-white",
    }
    const outlineList={
        "primary":"bg-white dark:bg-primary-900 bg-opacity-70 border border-primary-600  dark:border-primary-500 text-primary-600 dark:text-primary-500",
        "secondary":"bg-white dark:bg-gray-900 bg-opacity-70 border border-gray-600  dark:border-gray-500 text-gray-600 dark:text-gray-500",
        "success":"bg-white dark:bg-success-900 bg-opacity-70 border border-success-600  dark:border-success-500 text-success-600 dark:text-success-500",
        "danger":"bg-white dark:bg-danger-900 bg-opacity-70 border border-danger-600  dark:border-danger-500 text-danger-600 dark:text-danger-500",
        "warning":"bg-white dark:bg-warning-900 bg-opacity-70 border border-warning-600  dark:border-warning-500 text-warning-600 dark:text-warning-500",
        "info":"bg-white dark:bg-info-900 bg-opacity-70 border border-info-600  dark:border-info-500 text-info-600 dark:text-info-500",
        "light":"bg-white dark:bg-gray-900 bg-opacity-70 border border-gray-600  dark:border-gray-500 text-gray-600 dark:text-gray-500",
        "dark":"bg-white dark:bg-gray-900 bg-opacity-70 border border-gray-600  dark:border-gray-500 text-gray-600 dark:text-gray-500",
    }
    const sizeList={
        "xs":"!text-xs !font-[300]  px-1.5 py-0.5 rounded-full",
        "sm":"!text-sm !font-[300]  px-1.5 py-0.5 rounded-full",
        "md":"!text-base !font-[300]  px-2 py-1 rounded-full",
        "lg":"!text-lg !font-[300]  px-2.5 py-1.5 rounded-full",
        "xl":"!text-xl !font-[300]  px-3 py-2 rounded-full",
    }

    if (outline){
        _type=outlineList[styleType]
    }else{
        _type=typeList[styleType]
    }


    return (
        <>
           <div className={"relative w-fit"}>
               {text &&<div className={` absolute ${sizeList[size]} ${locationList[location]} ${_type} ${notOutline ? "!border-none":"border"}`}>
                   {text}
               </div>}
                {children ?children: <Button type={"primary"} outline>Badge</Button>}
           </div>
        </>
    );
}

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    text: PropTypes.string,
    styleType: PropTypes.oneOf(["primary","secondary","success","danger","warning","info","light","dark"]),
    location: PropTypes.oneOf(["top-left","top-right","bottom-left","bottom-right"]),
    outline: PropTypes.bool,
    notOutline: PropTypes.bool,
    size: PropTypes.oneOf(["xs","sm","md","lg","xl"]),
};

Badge.defaultProps = {
    location:"top-right",
    styleType:"danger",
    size:"sm"
};
