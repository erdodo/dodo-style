import {
    BsFileEarmarkMusic, BsFileEarmarkPdf, BsFileEasel,
    BsFilePlay,
    BsFiletypeDoc,
    BsFiletypeDocx,
    BsFiletypeXls,
    BsFiletypeXlsx,
    BsFileZip,
    BsXCircleFill
} from "react-icons/bs";
import React from "react";
import {buttonOnClick,formatBytes} from "../methods";
import Button from "../../Button/Button";

export default function ButtonFile ({button={props:{}},fileList,removeFile}){
    const [fileSize,setFileSize] = React.useState(0);
    React.useEffect(()=>{

        let _fileSize = 0;
        Object.values(fileList).map((file)=>{
            if(file === "FileList") return;
            console.log(parseFloat(file.size))
            _fileSize += parseFloat(file.size);
        })
        console.log(_fileSize)
        setFileSize(_fileSize);
    },[fileList])
    return(
        <>
            <Button type={button.props.type ?? 'primary'} {...button.props} onClick={buttonOnClick}>{button.props.children ?? "Yükle"} {fileSize>0 && '('+formatBytes(fileSize)+')'}</Button>
            <ul className={"max-h-[300px] overflow-auto !pl-0 my-5"}>
                {Object.values(fileList).map((file,index) => {
                    return (
                        <li key={index} className={"flex items-center !mt-2 border-b dark:border-gray-700 !pb-2"}>
                            <span className={"mr-1 rounded-lg cursor-pointer text-red-500 hover:bg-gray-200 dark:hover:bg-gray-700 p-2"} onClick={()=>removeFile(index)}><BsXCircleFill/> </span>


                            {file.type === 'image/png' && <img src={URL.createObjectURL(file)} alt={file.name} className={"w-[40px] h-[40px]"} />}
                            {file.type === 'image/jpeg' && <img src={URL.createObjectURL(file)} alt={file.name} className={"w-[40px] h-[40px]"} />}
                            {file.type === 'image/jpg' && <img src={URL.createObjectURL(file)} alt={file.name} className={"w-[40px] h-[40px]"} />}
                            {file.type === 'image/gif' && <img src={URL.createObjectURL(file)} alt={file.name} className={"w-[40px] h-[40px]"} />}
                            {file.type === 'video/mp4' && <BsFilePlay className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && <BsFiletypeXls className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/vnd.ms-excel' && <BsFiletypeXlsx className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && <BsFiletypeDoc className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/msword' && <BsFiletypeDocx className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/zip' && <BsFileZip className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/x-zip-compressed' && <BsFileZip className={"w-[37px] h-[37px]"} />}
                            {file.type === 'audio/mpeg' && <BsFileEarmarkMusic className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/pdf' && <BsFileEarmarkPdf className={"w-[37px] h-[37px]"} />}
                            {file.type === 'application/vnd.oasis.opendocument.presentation' && <BsFileEasel className={"w-[37px] h-[37px]"} />}



                            <span className={"ml-2"}>{file.name} - ({formatBytes(file.size)})</span>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
