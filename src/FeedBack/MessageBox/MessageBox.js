import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Form/Button/Button';
import {BsXLg } from "dodo-icons/react/bs"
export default function MessageBox({location,children,header,footer,open,onClose,title,message,cancelButtonText,confirmButtonText,onConfirm,onCancel,...props}) {
    const [isOpen, setIsOpen] = React.useState(open);
    const locationList={
        "top-full":"justify-center w-screen items-start top-0 left-0 h-screen",
        "top-center":"justify-center w-screen items-start top-0 left-0 h-screen",
        "top-right":"justify-end w-screen items-start top-0 left-0 h-screen",
        "top-left":"justify-start w-screen items-start top-0 left-0 h-screen",
        "bottom-full":"justify-center w-screen items-end top-0 left-0 h-screen",
        "bottom-center":"justify-center w-screen items-end top-0 left-0 h-screen",
        "bottom-right":"justify-end w-screen items-end top-0 left-0 h-screen",
        "bottom-left":"justify-start w-screen items-end top-0 left-0 h-screen",
        "right-full":"justify-end w-screen items-center top-0 left-0 h-screen",
        "right-center":"justify-end w-screen items-center top-0 left-0 h-screen",
        "left-full":"justify-start w-screen items-center top-0 left-0 h-screen",
        "left-center":"justify-start w-screen items-center top-0 left-0 h-screen",
        "center-full":"justify-center w-screen items-center top-0 left-0 h-screen",
        "center":"justify-center w-screen items-center top-0 left-0 h-screen",
        "full":"justify-start w-screen items-start top-0 left-0 h-screen",
    }
    const paperList={
        "top-full":"rounded-b-lg w-full",
        "top-center":"rounded-b-lg w-auto",
        "top-right":"rounded-bl-lg w-auto",
        "top-left":"rounded-br-lg w-auto",
        "bottom-full":"rounded-t-lg w-full",
        "bottom-center":"rounded-t-lg w-auto",
        "bottom-right":"rounded-tl-lg w-auto",
        "bottom-left":"rounded-tr-lg w-auto",
        "right-full":"rounded-l-lg w-auto h-screen",
        "right-center":"rounded-l-lg w-auto",
        "left-full":"rounded-r-lg w-auto h-screen",
        "left-center":"rounded-r-lg w-auto ",
        "center-full":"rounded-lg w-full",
        "center":"rounded-lg w-auto",
        "full":" w-screen h-screen",
    }
    React.useEffect(() => {
        document.addEventListener("click", (e) => {
            if (e.target.classList.contains("dialog-body")) {
                closeButtonClick();
            }
        })
    })
    const closeButtonClick=()=>{
        if(isOpen){
            setIsOpen(false);
            try {
                onClose();
            }catch (e) {
                console.log(e)
            }
            try {
                onCancel();
            }catch (e) {
                console.log(e)
            }
        }

    }
    const confirmButtonClick=()=>{
        if(isOpen){
            setIsOpen(false);
            try {
                onClose();
            }catch (e) {
                console.log(e)
            }
            try {
                onConfirm();
            }catch (e) {
                console.log(e)
            }
        }
    }
    return (
        <>
            <div className={"relative"}>

                {isOpen &&
                    <div className={`fixed dialog-body flex flex-row  bg-black/50 z-20 transition duration-150 ease-out hover:ease-in ${locationList[location]} ` }>
                        <div className={`bg-white dark:bg-gray-800 shadow-lg dark:text-white shadow-gray-400 border dark:shadow-gray-800 dark:border-gray-700 px-4 py-2 w-[90vw] sm:w-[80vw] md:w-[400px] lg:w-[450px] xl:w-[500px]  ${paperList[location]}`}>
                            {header ? header :
                                <div className={"py-2  flex flex-row justify-between"}>
                                    <span className={"text-lg font-bold"}>{title}</span>
                                    <BsXLg  onClick={closeButtonClick} className={"cursor-pointer text-danger-500 hover:bg-danger-500/10 rounded-full p-[1px]"} size={19}/>
                                </div>
                            }
                            <div className={"py-3"}>
                                {message}
                            </div>
                            {footer ? footer :
                                <div className={"py-2  flex flex-row justify-end"}>
                                    {cancelButtonText&&<Button onClick={closeButtonClick} type={"danger"} classList={"!py-1 !px-2 mr-2"} outline size={"md"}>{cancelButtonText}</Button>}
                                    {confirmButtonText&&<Button onClick={confirmButtonClick} type={"primary"} classList={"!py-1 !px-2"}  size={"md"}>{confirmButtonText}</Button>}
                                </div>
                            }
                        </div>
                    </div>}
                <div onClick={()=>setIsOpen(!isOpen)}>
                    {children}
                </div>
            </div>
        </>
    );
}

MessageBox.propTypes = {
    location:PropTypes.oneOf(["top-full","top-center","top-right","top-left","bottom-full","bottom-center","bottom-right","bottom-left","right-full","right-center","left-full","left-center","center-full","center","full"]),
    children:PropTypes.node,
    header:PropTypes.node,
    footer:PropTypes.node,
    open:PropTypes.bool,
    onClose:PropTypes.func,
    style:PropTypes.object,
    className:PropTypes.string,
    title:PropTypes.string,
    message:PropTypes.string,
    cancelButtonText:PropTypes.string,
    confirmButtonText:PropTypes.string,
    onConfirm:PropTypes.func,
    onCancel:PropTypes.func,
};

MessageBox.defaultProps = {
    title:"Message Box",
    location:"center",
    cancelButtonText:"Vazgeç",
    confirmButtonText:"Tamam",
};
