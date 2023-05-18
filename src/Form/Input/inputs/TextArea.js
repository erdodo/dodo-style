import React,{useState} from "react";
import Config from '../config.json'
export default function TextArea(props){
    const [_rows,setRows] = useState(props.rows)

        let classList=`
        min-w-[120px] w-full px-3 py-1
        ${Config.styleTypes[props.styleType]}
        ${Config.rounded[props.rounded]} ${props.resize}
        ${props.className} ${Config.sizes[props.size]}
        ${Config.textSizes[props.size]} 
        ${props.disabled? Config.styleTypes.disabled:""}
    `;
        if(props.notOutline) classList+= "!border-[transparent] !shadow-none";
        return(
            <>
                <textarea
                    {...props}
                    className={classList}
                    onChange={(e)=>{props.onChange(e); if(props.autoRow){setRows(e.target.value.split("\n").length)}}}
                    maxLength={props.limit}
                    rows={_rows}
                >{props.value}</textarea>
            </>
        )


}
