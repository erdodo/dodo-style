import React from "react";

export default function Docs({name}){
    const Icons = require('dodo-icons/react/'+name+'/index.js')
    const [allIcons,setAllIcons] = React.useState(Icons)
    const [filtedangerIcon,setFilteresIcons] = React.useState(Icons)
    const [selectedIcon,setSelectedIcon] = React.useState(null)
    const [dialog,setDialog] = React.useState(false)
    const [kopyalandi,setKopyalandi] = React.useState(false)
    const filterIcon = (filter) => {
        setAllIcons(Icons)
        let _filtedangerIcon = {}
        Object.keys(Icons).map(key => {
            if(key.toLowerCase().includes(filter.toLowerCase())){
                _filtedangerIcon[key] = Icons[key]
            }
        })
        setFilteresIcons(_filtedangerIcon)
    }
    React.useEffect(() => {
        /*
        * Select dışında bir yere tıklandığında seçeneklerin kapanması için event listener ekleniyor
        * */
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
            <div className={"w-full flex flex-row"}>

                <input type="text" placeholder="İkon ara" onChange={(e)=>{filterIcon(e.target.value)}} className={"mr-3 w-full px-4 py-2 border border-gray-400 dark:bg-gray-800 dark:text-white rounded-lg outline-0 focus-within:outline-0 "}/>
                <button className={"bg-secondary-500 rounded-lg px-3 py-1 ml-3 text-white"} onClick={()=>filterIcon('')}>Tümü</button>
            </div>

            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between", flexWrap:"wrap",width:"100%"}}>

                {filtedangerIcon && Object.keys(filtedangerIcon).map(key => (
                    <div key={key} className={"w-[120px] p-3 !m-3 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg hover:shadow-xl cursor-pointer dialog"}
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
                                        <span className="text-info-400">import </span>
                                        <span className={"dark:text-white"}>&#123;</span>
                                        <span className="hljs-attribute dark:text-white"> {selectedIcon} </span>
                                        <span className={"dark:text-white"}>&#125;</span>
                                        <span className={"text-info-400"}> from </span>
                                        <span className="text-danger-400">
                                            "dodo-icons/react/{name}"
                                        </span>
                                        <span className={"dark:text-white"}>;</span>
                                    </code>
                                </pre>
                                <span className={"dark:text-white"}>Vue:</span>
                                <pre style={{margin:"20px 10px"}} className={"!bg-white dark:!bg-gray-800  !p-4 !rounded-lg !shadow !border"}>
                                    <code className="!px-3" >
                                        <span className="text-info-400">import </span>
                                        <span className={"dark:text-white"}>&#123;</span>
                                        <span className="hljs-attribute dark:text-white"> {selectedIcon} </span>
                                        <span className={"dark:text-white"}>&#125;</span>
                                        <span className={"text-info-400"}> from </span>
                                        <span className="text-danger-400">
                                            "dodo-icons/vue/{name}"
                                        </span>
                                        <span className={"dark:text-white"}>;</span>
                                    </code>
                                </pre>
                                <div className={"!mt-3 flex justify-between w-full flex-row"}>
                                    <button className={` ${kopyalandi?'bg-success-500':'bg-secondary-500 dark:bg-secondary-800'}  rounded-lg px-3 py-1 ml-3 text-white`} onClick={()=>{navigator.clipboard.writeText(selectedIcon);setKopyalandi(true)}}>Kopyala</button>
                                    <button className={"bg-secondary-500 dark:bg-secondary-800 rounded-lg px-3 py-1 ml-3 text-white"} onClick={()=>{setDialog(false)}}>Kapat</button>
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
