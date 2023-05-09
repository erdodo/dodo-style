import React,{useState} from "react";
import {Button,SelectBox} from "dodo-style"
import Dialog from "../Dialog";
export default function Example6(){
    const [visible,setVisible] = useState(false)

    return (
        <div>

            <Button type={"primary"} onClick={()=>{ setVisible(true) }}>Footer Yok </Button>

            <Dialog open={visible}  onClose={()=>{ setVisible(false) }}
                footer={" "}
            >
                <div>
                    Merhaba
                </div>
            </Dialog>
        </div>
    )
}
