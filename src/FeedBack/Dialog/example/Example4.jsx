import React,{useState} from "react";
import {Button,SelectBox} from "dodo-style"
import Dialog from "../Dialog";
export default function Example2(){
    const [visible,setVisible] = useState(false)

    return (
        <div>

            <Button type={"primary"} onClick={()=>{ setVisible(true) }}>Özel Title</Button>

            <Dialog open={visible}  onClose={()=>{ setVisible(false) }} title={"Özel Title "} >
                <div>
                    Merhaba
                </div>
            </Dialog>
        </div>
    )
}
