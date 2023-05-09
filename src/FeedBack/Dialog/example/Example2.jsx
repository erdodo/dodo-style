import React,{useState} from "react";
import {Button,SelectBox} from "dodo-style"
import Dialog from "../Dialog";
export default function Example2(){
    const [visible,setVisible] = useState(false)

    return (
        <div>

            <Button type={"primary"} onClick={()=>{ setVisible(true) }}>Özel Header</Button>

            <Dialog open={visible}  onClose={()=>{ setVisible(false) }} title={"Dialog Başlığı"}

                    header={
                        <div className={"flex flex-row justify-between items-center"}>
                            <div className={"text-lg font-bold"}>Özel Header</div>
                            <div className={"flex flex-row"}>
                                <Button type={"danger"} gradient onClick={()=>{ setVisible(false) }}>Kapat</Button>
                            </div>
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
