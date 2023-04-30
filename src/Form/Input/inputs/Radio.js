export default function Radio({value,onChange,disabled ,classList,placeholder,limit}){
    return(
        <input
            type="radio"
            className={`min-w-[120px] w-full focus-visible:outline-0 outline-0 border-none ${classList}`}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={limit}
        />
    )
}

