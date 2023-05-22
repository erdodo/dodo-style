import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import Carousel from "../Carousel/Carousel";
import Button from "../../Form/Button/Button";
import {BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill,BsX} from "dodo-icons/react/bs";
export default function Gallery(props) {
    const [showPreview, setShowPreview] = React.useState(false)
    const [currentImage, setCurrentImage] = React.useState(0)
    const ImagesRef = React.useRef();
    const onChangeCarousel = (index) => {
        setCurrentImage(index)
    }
    document.addEventListener("click",e=>{
        if(e.target.className.baseVal !== undefined) return
        if(e.target.className.includes("gallery-images")){
            setShowPreview(true)
        }
        if(showPreview && (!e.target.className.includes("gallery-preview") || e.target.className.includes("gallery-preview-button") )){
            setShowPreview(false)
        }
    })
    document.addEventListener("keypress",e=>{
        console.log(e)
        if(e.key === "Escape"){
            setShowPreview(false)
        }
        if(e.key === "ArrowRight"){
            changeCurrentImage(true)
        }
        if(e.key === "ArrowLeft"){
            changeCurrentImage(false)
        }
    })
    const changeCurrentImage = (isNext) => {
        if(isNext){
            if(currentImage+1>props.children.length-1){
                setCurrentImage(0)
            }else{
                setCurrentImage(currentImage+1)
            }
        }else{
            if(currentImage-1<0){
                setCurrentImage(props.children.length-1)
            }else{
                setCurrentImage(currentImage-1)
            }
        }
    }
    return (
        <>
            {
               props.children &&
                <div>
                        <Carousel cssClass={"max-h-full cursor-pointer"} duration={100} transitionDuration={100} autoplay={false} onChange={onChangeCarousel}>
                            {
                                props.children.map((image, index) => (
                                    <Image key={index} className={` gallery-images ${image.props.className} `} ref={ImagesRef} src={image.props.src} {...image.props} />
                                ))
                            }

                        </Carousel>

                </div>
            }
            {
                showPreview === true &&
                <div className={"relative"}>
                        <div className={"fixed w-screen px-10 h-screen bg-gray-900/30 flex flex-col z-10 top-0 left-0"}>
                            <div className={"flex justify-end"}>
                                <Button onClick={() => setShowPreview(false)} type={"danger"} link className={"text-white text-3xl"}><BsX/></Button>
                            </div>
                            <div className={"flex justify-between items-center h-full"}>
                                <Button type={"primary"} plain rounded={"full"} className={"!px-2 gallery-preview-button"} notOutline onClick={()=>changeCurrentImage(false)}><BsFillArrowLeftCircleFill/></Button>
                                <Image src={props.children[currentImage].props.src} {...props.children[currentImage].props} fit={"contain"} width={"auto"} height={"auto"} className={`gallery-preview !max-w-[85vw] !max-h-[85vh] w-full h-full`} />
                                <Button type={"primary"} plain rounded={"full"} className={"!px-2 gallery-preview-button"} notOutline  onClick={()=>changeCurrentImage(true)}><BsFillArrowRightCircleFill/></Button>

                            </div>
                        </div>
                </div>
            }
        </>
    )

}
