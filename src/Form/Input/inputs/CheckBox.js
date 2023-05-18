import React from "react";
import '../assets/Switch.css'
import config from "../config.json";
export default function CheckBox(props){


    return(
        <>
            {props.type === "checkbox" &&
                <label className={"flex flex-row items-baseline"}>
                    <div>
                        <input
                            {...props}
                            value={props.value}
                            onChange={props.onChange}
                        />
                    </div>
                    <span className={"!ml-2"}>{props.label} </span>

                </label>
            }
            {props.type === "switch" &&
                <div className={"dodo-switch"}>
                    <input
                        type="checkbox"
                        className={`  ${config.switchSizeList[props.size]} ${config.switchTypeList[props.styleType]} ${props.className} `}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            }
        </>
    )
}
