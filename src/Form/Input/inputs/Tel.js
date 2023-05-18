import Config from '../config.json'
export default function Tel(props){
    let classList=`
        min-w-[120px] w-full px-3 
        ${Config.styleTypes[props.styleType]}
        ${Config.rounded[props.rounded]} ${props.resize}
        ${props.className} ${Config.sizes[props.size]}
        ${Config.textSizes[props.size]} 
        ${props.disabled? Config.styleTypes.disabled:""}${props.notOutline? Config.styleTypes.noOutline:""}
  `;
    return(
        <>
            <input
                {...props}
                type={props.type}
                className={classList}
                value={props.value}
                onChange={props.onChange}
                maxLength={props.limit}
            />
        </>
    )
}
