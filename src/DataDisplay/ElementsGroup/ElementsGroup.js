import React from 'react';
import PropTypes from "prop-types";

export default function ElementsGroup(props) {
    const parentClass= props.vertical?"flex flex-col":"flex flex-row";
    let children = props.children;
    const getParsedChild = (child,index) => {

        let tempProps = {};
        let myClassName = "";

        if(props.vertical){
            myClassName = index === 0?" !rounded-b-none !border-b-[0]":"";
            myClassName = myClassName + (index === children.length-1?" !rounded-t-none ":"");
            myClassName =myClassName + (index !== 0 && index !== children.length-1?" !rounded-none !border-b-[0]":"");
        }else{
            myClassName = index === 0?" !rounded-r-none !border-r-[0]":"";
            myClassName = myClassName + (index === children.length-1?" !rounded-l-none ":"");
            myClassName =myClassName + (index !== 0 && index !== children.length-1?" !rounded-none !border-r-[0]":"");
        }
        console.log(index,child,myClassName)
        tempProps.className = child.props.className + myClassName
        Object.preventExtensions(tempProps);

        return React.cloneElement(child, tempProps);

    }
    return (
        <div className={` ${parentClass} w-fit ${props.className}`}>
            {props.children && children.map((child, index) => {
                       return getParsedChild(child,index);
            })}
        </div>
    );
}

ElementsGroup.propTypes = {
    /** Dikey hizalama */
    vertical: PropTypes.bool,
    /** Özel class */
    className: PropTypes.string,
    /** Alt elemanlar */
    children: PropTypes.node,

};

ElementsGroup.defaultProps = {
    vertical: false,
};
