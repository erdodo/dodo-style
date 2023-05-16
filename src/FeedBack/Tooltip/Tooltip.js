import React from 'react';
import PropTypes from 'prop-types';

export default function Tooltip({children,position,wait,message,theme = "normal",parentClassList,messageClassList,...props}) {
    const [open,setOpen]=React.useState(false)
    document.addEventListener("click",function (e){
        if(e.target.closest(".tooltip")===null){
            setOpen(false)
        }
    })
    const locationList={
        "top-center":" top-[-10px] left-1/2 transform -translate-x-1/2 translate-y-[-100%] z-[1]",
        "top-left":" top-[-10px] left-0 transform translate-y-[-100%] z-[1]",
        "top-right":" top-[-10px] right-0 transform translate-y-[-100%] z-[1]",
        "bottom-center":" bottom-[-10px] left-1/2 transform -translate-x-1/2 translate-y-[100%] z-[1]",
        "bottom-left":" bottom-[-10px] left-0 transform translate-y-[100%] z-[1]",
        "bottom-right":" bottom-[-10px] right-0 transform translate-y-[100%] z-[1]",
        "left-center":" left-[-10px] top-1/2 transform -translate-y-1/2 translate-x-[-100%] z-[1]",
        "left-top":" left-[-10px] top-0 transform translate-x-[-100%] z-[1]",
        "left-bottom":" left-[-10px] bottom-0 transform translate-x-[-100%] z-[1]",
        "right-center":" right-[-10px] top-1/2 transform -translate-y-1/2 translate-x-[100%] z-[1]",
        "right-top":" right-[-10px] top-0 transform translate-x-[100%] z-[1]",
        "right-bottom":" right-[-10px] bottom-0 transform translate-x-[100%] z-[1]",


    }
    const triangleList={
        "top-center":"w-0 h-0 border-t-[10px] border-l-[10px] border-r-[10px] border-b-0 border-transparent border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800 top-[-12px] z-[3] left-[calc(50%-10px)] " + (theme ==="normal"?"":theme==="dark"?"!border-t-gray-800":"!border-t-white"),
        "top-left":"w-0 h-0 border-t-[10px] border-l-[10px] border-r-[10px] border-b-0 border-transparent border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800 top-[-12px] z-[3] left-[10px] " + (theme ==="normal"?"":theme==="dark"?"!border-t-gray-800":"!border-t-white") ,
        "top-right":"w-0 h-0 border-t-[10px] border-l-[10px] border-r-[10px] border-b-0 border-transparent border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800 top-[-12px] z-[3] right-[10px] " + (theme ==="normal"?"":theme==="dark"?"!border-t-gray-800":"!border-t-white"),
        "bottom-center":"w-0 h-0 border-t-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 bottom-[-12px] z-[3] left-[calc(50%-10px)] " + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white") ,
        "bottom-left":"w-0 h-0 border-t-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 bottom-[-12px] z-[3] left-[10px] "  + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),
        "bottom-right":"w-0 h-0 border-t-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 bottom-[-12px] z-[3] right-[10px] "  + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),
        "left-center":"w-0 h-0 border-t-[10px] border-l-0 border-r-[10px] border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 left-[-12px] z-[3] top-[calc(50%-10px)] " + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),
        "left-top":"w-0 h-0 border-t-[10px] border-l-0 border-r-[10px] border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 left-[-12px] z-[3] top-[10px] "  + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),
        "left-bottom":"w-0 h-0 border-t-[10px] border-l-0 border-r-[10px] border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 left-[-12px] z-[3] bottom-[10px] " + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),
        "right-center":"w-0 h-0 border-t-[10px] border-l-[10px] border-r-0 border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 right-[-12px] z-[3] top-[calc(50%-10px)] " + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),
        "right-top":"w-0 h-0 border-t-[10px] border-l-[10px] border-r-0 border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 right-[-12px] z-[3] top-[10px] "  + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),
        "right-bottom":"w-0 h-0 border-t-[10px] border-l-[10px] border-r-0 border-b-[10px] border-transparent border-l-transparent border-r-transparent border-b-white dark:border-b-gray-800 right-[-12px] z-[3] bottom-[10px] " + (theme ==="normal"?"":theme==="dark"?"!border-b-gray-800":"!border-b-white"),

    }
    const themeList={
        "normal":"bg-white dark:bg-gray-800 shadow-lg dark:text-white shadow-gray-400 border dark:shadow-gray-800 dark:border-gray-700  ",
        "light":"bg-white text-black shadow-lg border shadow-gray-400 ",
        "dark":"bg-gray-800 text-white shadow-lg border shadow-gray-800 border-gray-900  ",
    }


    const mouseEnter=(e)=>{
        console.log("mouse enter")
        if(!open){
            setTimeout(() => {
                setOpen(true)
            }, wait);
        }
    }
    const mouseLeave=(e)=>{
        console.log("mouse leave")
        if (open) {
            setOpen(false)
        }
    }

    return (
        <>
            <div className={`tooltip ${parentClassList} relative w-min`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} {...props}>
                {children}
                {open && message &&
                <>
                    <div className={`absolute ${triangleList[position]} `}></div>
                    <div className={` absolute ${locationList[position]} ${themeList[theme]} ${messageClassList} px-4 py-2 rounded-lg md:max-w[100vw] max-w-[400px] w-max  break-all`}>
                        {message}
                    </div>
                </>
                }
            </div>
        </>
    );
}

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    position: PropTypes.oneOf(["top-center", "top-left", "top-right", "bottom-center", "bottom-left", "bottom-right", "left-center", "left-top", "left-bottom", "right-center", "right-top", "right-bottom"]),
    wait:PropTypes.number,
    message:PropTypes.string,
    theme:PropTypes.oneOf(["normal","light","dark"]),
    parentClassList:PropTypes.string,
    messageClassList:PropTypes.string,
};

Tooltip.defaultProps = {
    position: "right-top",
    wait: 100,
};
