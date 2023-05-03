import React from "react";
import {AiOutlineSearch} from "dodo-icons/react/ai";
export default function Docs({name}){

    const [allIcons,setAllIcons] = React.useState({})
    const [filteredIcon,setFilteresIcons] = React.useState({})
    const [selectedIcon,setSelectedIcon] = React.useState(null)
    const [dialog,setDialog] = React.useState(false)
    const [kopyalandi,setKopyalandi] = React.useState(false)
    const filterIcon = (filter) => {

        if(filter.length>=3){
            let _filteredIcon = {}
            Object.keys(allIcons).map(key => {
                if(key.toLowerCase().includes(filter.toLowerCase())){
                    _filteredIcon[key] = allIcons[key]
                }
            })
            setFilteresIcons(_filteredIcon)
        }else{
            setFilteresIcons({})
        }
    }
    React.useEffect(() => {
        import("dodo-icons/react/all.js").then((res) => {
            setAllIcons(res)
        })
    })
    React.useEffect(() => {
        if(dialog){
            document.addEventListener("click", (e)=>{
                if(e.target.closest(".dialog")){
                    return;
                }
                setDialog(false);
            });
        }
    }, [dialog]);
    return (
        <>

            <div className={"border rounded-lg p-2 flex flex-row"}>
                <AiOutlineSearch size={24} color="red" />
                <input type="text" className={"focus-within:outline-0 ml-2 w-full bg-transparent dark:text-white"} onChange={(e)=>{filterIcon(e.target.value)}} placeholder={"En az 3 karakter girmelisiniz"}/>
            </div>


            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between", flexWrap:"wrap",width:"100%"}}>

                {filteredIcon && Object.keys(filteredIcon).map(key => (
                    <div className={"w-[120px] p-3 !m-3 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl cursor-pointer dialog"}
                         onClick={()=>{setDialog(true); setSelectedIcon(key);setKopyalandi(false)}}>
                        <div className={"w-full flex flex-row items-center justify-center !text-5xl"}>
                            {createElement(key,allIcons)}
                        </div>
                        <span style={{fontSize:"11px",fontWeight:"200"}} className={"dark:text-white !mt-2"}>
                            {key}
                        </span>

                    </div>

                ))}

            </div>
            <div className={"relative"}>
                {
                    dialog && (
                        <div className={" w-screen h-screen top-0 left-0 bg-gray-50/60 dark:bg-gray-900/60 flex flex-row items-center justify-center !z-10"} style={{position:"fixed"}} >
                            <div className={"bg-white dark:bg-gray-900 shadow-lg border rounded-lg shadow-gray-400 dark:shadow-gray-800 dark:border-gray-800 p-4 dialog"}>
                                <h1>{selectedIcon }</h1>
                                <div className={"w-full flex flex-row items-center justify-center !text-9xl p-4"}>
                                    {createElement(selectedIcon,allIcons)}
                                </div>
                                <span className={"dark:text-white"}>React:</span>
                                <pre style={{margin:"20px 10px"}} className={"!bg-white dark:!bg-gray-800  !p-4 !rounded-lg !shadow !border"}>
                                    <code className="!px-3">
                                        <span className="text-blue-400">import </span>
                                        <span className={"dark:text-white"}>&#123;</span>
                                        <span className="hljs-attribute dark:text-white"> {selectedIcon} </span>
                                        <span className={"dark:text-white"}>&#125;</span>
                                        <span className={"text-blue-400"}> from </span>
                                        <span className="text-red-400">
                                            "dodo-icons/react/{name ?? selectedIcon[0].toLowerCase()+selectedIcon[1].toLowerCase()}"
                                        </span>
                                        <span className={"dark:text-white"}>;</span>
                                    </code>
                                </pre>
                                <span className={"dark:text-white"}>Vue:</span>
                                <pre style={{margin:"20px 10px"}} className={"!bg-white dark:!bg-gray-800  !p-4 !rounded-lg !shadow !border"}>
                                    <code className="!px-3" >
                                        <span className="text-blue-400">import </span>
                                        <span className={"dark:text-white"}>&#123;</span>
                                        <span className="hljs-attribute dark:text-white"> {selectedIcon} </span>
                                        <span className={"dark:text-white"}>&#125;</span>
                                        <span className={"text-blue-400"}> from </span>
                                        <span className="text-red-400">
                                            "dodo-icons/vue/{name ?? selectedIcon[0].toLowerCase()+selectedIcon[1].toLowerCase()}"
                                        </span>
                                        <span className={"dark:text-white"}>;</span>
                                    </code>
                                </pre>
                                <div className={"!mt-3 flex justify-between w-full flex-row"}>
                                    <button className={` ${kopyalandi?'bg-green-500':'bg-slate-500 dark:bg-slate-800'}  rounded-lg px-3 py-1 ml-3 text-white`} onClick={()=>{navigator.clipboard.writeText(selectedIcon);setKopyalandi(true)}}>Kopyala</button>
                                    <button className={"bg-slate-500 dark:bg-slate-800 rounded-lg px-3 py-1 ml-3 text-white"} onClick={()=>{setDialog(false)}}>Kapat</button>
                                </div>

                            </div>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export const createElement = (name,allIcons) =>{
    if(name === "default") return null

        const Icon = allIcons[name]
        return React.createElement(Icon,{style:{color:"#597aac"}})


}
