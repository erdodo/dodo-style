import React from 'react';
import PropTypes from 'prop-types';
import {BsArrowRightShort} from "dodo-icons/react/bs";

export default function CollapseItem({title,content,children,active,activeList,duration,delay,effect,index,downIcon,...props}) {
    const contentRef = React.useRef(null);
    const [style,setStyle] = React.useState({})
    React.useEffect(()=>{
        if(active){
            setStyle(activeStyle)
        }else{
            setStyle(deActiveStyle)
        }
    },[contentRef,active])
    let activeStyle ={
        height:contentRef.current?.scrollHeight+"px",
        opacity:"1",
        position:"relative",
        zIndex:"1",
        transitionDelay:delay+"ms",
        transitionDuration:duration+"ms",
        transitionTimingFunction:effect,
    }
    const deActiveStyle ={
        height:"0",
        opacity:"0",
        zIndex:"-1",
        transitionDelay:delay+"ms",
        transitionDuration:duration+"ms",
        transitionTimingFunction:effect,
    }

    return (
        <>
                    <div {...props} key={"item"+index} className={`border-t dark:border-gray-800 dark:text-white py-2 ${props.className}`}>
                        <div className={"flex justify-between items-center cursor-pointer"} onClick={props.onClick}>
                            <div className={"mr-4 font-bold"}>{title}</div>

                            {downIcon?downIcon:(<BsArrowRightShort className={` ${active?"rotate-90 transition-all":"transition-all"} `}/>)}
                        </div>
                         <div  ref={contentRef} style={style}
                              className={`${active && 'active-collapse-item-content'} collapse-item-content  h-0 opacity-0 transition-all`}>{content}{children}</div>

                    </div>






        </>
    );
}

CollapseItem.propTypes = {
    title:PropTypes.oneOfType([PropTypes.string,PropTypes.node]),
    content:PropTypes.any,
    active:PropTypes.bool,
    duration:PropTypes.number,
    delay:PropTypes.number,
    effect:PropTypes.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),
    onClick:PropTypes.func,
    downIcon:PropTypes.any,

};

CollapseItem.defaultProps = {
    duration:300,
    delay:0,
    effect:"ease-in-out",
};
