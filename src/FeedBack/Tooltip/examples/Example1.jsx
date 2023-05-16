import React,{useState} from "react";
import {Button,SelectBox} from "dodo-style"
import Tooltip from "../index";
export default function Example1(){
    const [position,setPosition] = useState("top-center")
    const locationList = ["top-center", "top-left", "top-right", "bottom-center", "bottom-left", "bottom-right", "left-center", "left-top", "left-bottom", "right-center", "right-top", "right-bottom"]

    return (
        <div>
            <div className={"flex flex-row items-end"}>
                <div className={"flex flex-col"}>

                    <SelectBox  options={locationList} onSelect={e => setPosition(e)} />
                </div>
                <div className={""}></div>
                <div className={"!mx-5"}>
                    <Tooltip  position={position} message={"Özel konumlandırma "+position}  >
                        <Button type={"primary"}>Hover</Button>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}
