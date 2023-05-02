import React,{useState} from "react";
export default function TextArea({value,onChange,disabled ,classList,placeholder,limit,rows,autoRow}){
    const [_rows,setRows] = useState(rows)
    return(
        <textarea
            className={`min-w-[120px] w-full  focus-visible:outline-0 outline-0 border-none py-2 bg-transparent ${classList}`}
            onChange={(e)=>{onChange(e); if(autoRow){setRows(e.target.value.split("\n").length)}}}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={limit}
            rows={_rows}
        >
            {value}
        </textarea>
    )
}
