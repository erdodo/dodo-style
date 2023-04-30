export default function Email({value,onChange,disabled ,classList,placeholder,setError}){

    const validateEmail =(mail)=>
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            setError("")
        }
        else{
            setError("Geçerli bir email adresi giriniz")
        }
    }
    return(

        <input
            type={"email"}
            className={`min-w-[120px] w-full focus-visible:outline-0 ${classList}`}
            value={value}
            onChange={(e)=>{onChange(e);validateEmail(e.target.value)}}
            disabled={disabled}
            placeholder={placeholder}
        />


    )
}
