export default function Number({value,onChange,min,max}){
    return(
        <input
            type="number"
            className={`min-w-[150px] w-full focus-visible:outline-0`}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
        />
    )
}
