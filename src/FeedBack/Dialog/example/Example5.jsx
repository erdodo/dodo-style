import React,{useState} from "react";
import {Button,SelectBox} from "dodo-style"
import Dialog from "../Dialog";
export default function Example5(){
    const [visible,setVisible] = useState(false)

    return (
        <div>

            <Button type={"primary"} onClick={()=>{ setVisible(true) }}>Özel Footer</Button>

            <Dialog open={visible}  onClose={()=>{ setVisible(false) }}
                footer={
                    <div>
                        <Button type={"primary"} onClick={()=>{ setVisible(false) }}>Özel Kapat Butonu</Button>
                    </div>
                }
            >
                <div>
                    Merhaba
                </div>
            </Dialog>
        </div>
    )
}
