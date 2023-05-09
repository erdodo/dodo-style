import React,{useState} from "react";
import {Button,SelectBox} from "dodo-style"
import Dialog from "../Dialog";
export default function Example1(){
    const [visible,setVisible] = useState(false)
    const [location,setLocation] = useState("center")
    const locationList = ["top-full","top-center","top-right","top-left","bottom-full","bottom-center","bottom-right","bottom-left","right-full","right-center","left-full","left-center","center-full","center","full"]

    return (
        <div>
            <div className={"flex flex-row items-end"}>
                <div className={"flex flex-col"}>

                    <SelectBox options={locationList} onSelect={e => setLocation(e)} />
                </div>
                   <div className={""}></div>
                <div className={"!mx-5"}>
                    <Button type={"primary"} onClick={()=>{ setVisible(true) }}>Dialog aç</Button>
                </div>
            </div>
            <Dialog open={visible} location={location} onClose={()=>{ setVisible(false) }} title={"Özel konumlandırma"} >
                <div>
                    Merhaba
                </div>
            </Dialog>
        </div>
    )
}
