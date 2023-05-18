import Config from "../config.json";

export default function Email(props){
    let classList=`
        min-w-[120px] w-full px-3 
        ${Config.styleTypes[props.styleType]}
        ${Config.rounded[props.rounded]} ${props.resize}
        ${props.className} ${Config.sizes[props.size]}
        ${Config.textSizes[props.size]} 
        ${props.disabled? Config.styleTypes.disabled:""}${props.notOutline? Config.styleTypes.noOutline:""}
  `;
    const validateEmail =(mail)=>
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            props.setError("")
        }
        else{
            props.setError("Geçerli bir email adresi giriniz")
        }
    }
    return(

        <input
            {...props}
            type={"email"}
            className={classList}
            value={props.value}
            onChange={(e)=>{props.onChange(e);validateEmail(e.target.value)}}
            maxLength={props.limit}
        />


    )
}
