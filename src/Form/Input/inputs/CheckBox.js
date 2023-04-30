import React from "react";
export default function CheckBox({value,onChange,disabled ,classList,label,type}){
    const [checked,setChecked] = React.useState(false);
    return(
        <>
            {type === "checkbox" &&
                <label className={"flex flex-row items-baseline"}>
                    <div>
                        <input
                            type="checkbox"
                            className={`w-full focus-visible:outline-0 outline-0 border-none ${classList} `}
                            value={value}
                            onChange={onChange}
                            disabled={disabled}
                        />
                    </div>
                    <span className={"!ml-2"}>{label} </span>

                </label>
            }
            {type === "switch" &&
                <label htmlFor="">Yakında</label>
            }
        </>
    )
}
