import React from "react";

export default function Docs({name}){
    const [allIcons,setAllIcons] = React.useState({})
    const [filteredIcon,setFilteresIcons] = React.useState({})
    const [selectedIcon,setSelectedIcon] = React.useState(null)
    const [dialog,setDialog] = React.useState(false)
    const [kopyalandi,setKopyalandi] = React.useState(false)
    const filterIcon = (filter) => {
        import(`./${name}/index.js`).then((Icons) => {
            setAllIcons(Icons)
            let _filteredIcon = {}
            Object.keys(Icons).map(key => {
                if(key.toLowerCase().includes(filter.toLowerCase())){
                    _filteredIcon[key] = Icons[key]
                }
            })
            setFilteresIcons(_filteredIcon)
        })

    }
    return (
        <>
            <div className={"w-full flex flex-row"}>
                <input type="text" placeholder="Search Icon" onChange={(e)=>{filterIcon(e.target.value)}} style={{width:"100%",padding:"10px",border:"1px solid #ddd",borderRadius:"5px",marginRight:"10px"}}/>
                <button className={"bg-slate-500 rounded-lg px-3 py-1 ml-3 text-white"} onClick={()=>filterIcon('')}>Tümü</button>
            </div>

            <div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",width:"100%"}}>

                {filteredIcon && Object.keys(filteredIcon).map(key => (
                    <div style={{backgroundColor:"white",boxShadow:"0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)","width":"11%",margin:"0.7515%",padding:"10px 0",textAlign:"center"}}
                         onClick={()=>{setDialog(true); setSelectedIcon(key);setKopyalandi(false)}}>
                        <div className={"w-full flex flex-row items-center justify-center !text-5xl"}>
                            {createElement(key,allIcons)}
                        </div>
                        <span style={{fontSize:"11px",fontWeight:"200"}}>
                    {key}
                </span>

                    </div>

                ))}

            </div>
            <div className={"relative"}>
                {
                    dialog && (
                        <div className={" w-screen h-screen top-0 left-0 bg-gray-50/60 flex flex-row items-center justify-center"} style={{position:"fixed"}}>
                            <div className={"bg-white shadow-lg border rounded-lg shadow-gray-400 p-4"}>
                                <h1>{selectedIcon }</h1>
                                <div className={"w-full flex flex-row items-center justify-center !text-9xl p-4"}>
                                    {createElement(selectedIcon,allIcons)}
                                </div>
                                <pre style={{margin:"20px 10px"}} className={"!bg-white !p-2 !shadow !border"}>
                                    <code className="lang-js">
                                        <span className="text-blue-400">import </span>
                                        <span>&#123;</span>
                                        <span className="hljs-attribute">{selectedIcon}</span>
                                        <span>&#125;</span>
                                        <span className={"text-blue-400"}> from </span>
                                        <span className="text-red-400">
                                            "@erdodocomp/dodo-style/dist/icons/{name}"
                                        </span>;
                                    </code>
                                </pre>
                                <div className={"!mt-3 flex justify-between w-full flex-row"}>
                                    <button className={` ${kopyalandi?'bg-green-500':'bg-slate-500'}  rounded-lg px-3 py-1 ml-3 text-white`} onClick={()=>{navigator.clipboard.writeText(selectedIcon);setKopyalandi(true)}}>Kopyala</button>
                                    <button className={"bg-slate-500 rounded-lg px-3 py-1 ml-3 text-white"} onClick={()=>{setDialog(false)}}>Kapat</button>
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
