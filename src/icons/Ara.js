import React from "react";
//import * as Icons from './all.js'
const Icons = {};


export default function Docs(){
    const [filteredIcon,setFilteresIcons] = React.useState(null)
    const filterIcon = (filter) => {

        console.log(filter,filteredIcon)
        if(filter.length>3){

             let _filteredIcon = {}
                Object.keys(Icons).map(key => {
                    if(key.toLowerCase().includes(filter.toLowerCase())){
                        _filteredIcon[key] = Icons[key]
                    }
                })
                setFilteresIcons(_filteredIcon)


        }else{
            setFilteresIcons(null)
        }
    }
    return (
        <>




            <input type="text" placeholder="Search Icon" onChange={(e)=>{filterIcon(e.target.value)}} style={{width:"100%",padding:"10px",border:"1px solid #ddd",borderRadius:"5px",marginBottom:"10px"}}/>

            <div style={{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",width:"100%"}}>

                    {filteredIcon && Object.keys(filteredIcon).map(key => (
                        <div style={{backgroundColor:"white",boxShadow:"0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06)","width":"11%",margin:"0.7515%",padding:"10px 0",textAlign:"center"}}
                             onClick={()=>{navigator.clipboard.writeText(key);alert("Kopyalandı");}}>
                            <div className={"w-full flex flex-row items-center justify-center "}>
                                {createElement(key)}
                            </div>
                            <span style={{fontSize:"11px",fontWeight:"200"}}>
                                {key}

                            </span>

                        </div>

                    ))}


            </div>
        </>
    )
}

export const createElement = (name) =>{
    if(name === "default") return null
    const Icon = Icons[name]
    return React.createElement(Icon,{style:{fontSize:"50px",color:"#597aac"}})
}
