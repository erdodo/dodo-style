export default function Url({value,onChange,disabled ,classList,placeholder,limit}){
    return(
        <input
            type="url"
            className={`min-w-[120px] w-full focus-visible:outline-0 outline-0 border-none bg-transparent ${classList}`}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={limit}
        />
    )
}
