import React from 'react';
import PropTypes from 'prop-types';
import {BsArrowDownShort,BsArrowUpShort,BsX } from 'react-icons/bs';
import {BiLeftArrow,BiRightArrow} from 'react-icons/bi';
import Tag from "../Tag";

//Tüm elemanlara özel css ve class isimleri tanımla


/**
 * Select componenti, options prop'u ile gelen verileri selectbox içerisinde gösterir.
 *
 */
export default function SelectBox({classList,size,rounded,disabled,options,onSelect,value,multiple,tag,search,max,maxShow,placeholder,style,clearable,hover }) {
    const _id = new Date().getTime() //Focus ayarları yapabilmek için selecte özel oluşturulan id
    const [_maxShow, setMaxShow] = React.useState(maxShow);// Gösterilecek maksimum tag sayısı içeride aç kapa yapabilmek için yapılan tanımlama
    const inputRef = React.useRef(null);// Input elementine erişmek için oluşturulan ref (arama inputu)
    const [visible, setVisible] = React.useState(false);// Seçeneklerin açık olup olmadığını tutan state
    const [filteredOptions, setFilteredOptions] = React.useState([]);// Arama inputuna göre filtrelenmiş seçeneklerin tutulduğu state
    const [_value, setValue] = React.useState(multiple?[]:"");// Seçilen değerlerin tutulduğu state
    const [filteredTags, setFilteredTags] = React.useState([]);// Gösterilecek maksimum tag sayısı içeride aç kapa yapabilmek için yapılan tanımlama
    const [inputWidth, setInputWidth] = React.useState(150);// Arama inputunun genişliğini tutan state / içine yazılan değere göre genişliği değişir
    const [error, setError] = React.useState("");// Hata mesajı tutan state (max değer seçildi gibi)

    /*
    * Props olarak gelen rounded değerlerine göre class isimleri oluşturuluyor
    * */
    let _rounded = rounded ? `rounded-${rounded}` : 'rounded-md';
    if(rounded==='2xl') _rounded = 'rounded-[1rem]';
    if(rounded==='3xl') _rounded = 'rounded-[1.2rem]';

    /*
    * Props olarak gelen boyut değerine göre yazı ve yükseklik class isimleri oluşturuluyor
    * */
    const _size = {
        sm: `text-sm`,
        md: `text-md`,
        lg: `text-lg `,
        xl: ` text-xl `,
        "2xl": ` text-2xl `,
    };
    const _height = {
        sm: `min-h-[32px]`,
        md: `min-h-[36px]`,
        lg: `min-h-[46px] `,
        xl: `min-h-[44px] `,
        "2xl": `min-h-[58px] `,
        "3xl": `min-h-[66px] `,
    }

    /*
    * Props olarak gelen disabled değerine göre class isimleri oluşturuluyor
    * */
    const _disabled = disabled && "opacity-50 cursor-not-allowed";

    React.useEffect(() => {
        /*
        * Select dışında bir yere tıklandığında seçeneklerin kapanması için event listener ekleniyor
        * */
        if(visible){
            document.addEventListener("click", (e)=>{
                if(e.target.closest(".autocomplete-input")){
                    return;
                }
                setVisible(false);
            });
        }
    }, [visible]);
    React.useEffect(() => {
        /*
        * Props olarak gelen optionlar daha sonra içinde filter işlemi yapabilmek için state'e aktarılıyor
        * */
        if(options){
            setFilteredOptions(options);
        }
    }, [options]);
    React.useEffect(() => {
        /*
        * Props olarak gelen value değeri daha sonra değiştirebilmek için state'e aktarılıyor
         */
        setError("");
        if(multiple){
            if(value){
                setValue(value.map((item)=>options.find((option)=>option.value===item)));
            }
        }else{
            if(value){
                setValue(options.find((option)=>option.value===value));
            }
        }
    }, [value]);
    React.useEffect(() => {
        /*
        * Multiple değeri developlent ortamında değiştiği için her değişimde value state'i sıfırlanıyor
         */
        setValue(multiple?[]:"");
    },[multiple]);
    React.useEffect(() => {
        /*
        * Props olarak gelen maxShow değerine göre gösterilecek tagler state'e aktarılıyor
         */
        _value && _value.length>0 && setFilteredTags(_value.slice(0,maxShow));
        _value.length<=0 && setFilteredTags([]);
    },[_value]);
    React.useEffect(() => {
        setMaxShow(maxShow);
    },[maxShow]);
    const inputChange = (e) => {
        /*
        * Arama inputuna yazıldığında çalışan fonksiyon
        * İnputun genişliğini ayarlamak için inputun genişliği state'e aktarılıyor
        * Arama inputuna yazılan değere göre filtreleme yapılıyor
        * Seçenekler görünür hale getiriliyor
         */
        setInputWidth(inputRef.current?.scrollWidth)
        setValue("");
        let value = e.target.value;
        let filtered = options.filter((item) => {
            return item.label.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredOptions(filtered);
        setVisible(true)

    }

    //Seçeneklerden birine tıklandığında çalışan fonksiyon
    const selectClick = (value) => {
        setError("")
        if(value){
            //Seçeneklerden birine tıklandığında inputun içi boşaltılıyor
            if(search) document.getElementById(_id+'_searchInput').value = "";

            // max değer seçildiğinde hata mesajı gösteriliyor
            if(multiple && _value.length>=max && !_value.find((item)=>item.value===value.value)){
                setError("Maksimum "+max+" adet seçim yapabilirsiniz.");
                return;
            }

            // multiple değeri true ise seçilen değerler state'e aktarılıyor eğer varsa seçim iptal ediliyor
            if(multiple){
                let _values = [..._value];
                if(_value.find((item)=>item.value===value.value)){
                    _values = _values.filter((item)=>item.value!==value.value);
                }else{
                    _values.push(value);
                }
                setValue(_values);
                onSelect(_values.map((item)=>item.value));
                return;
            }else{
                setValue(value);
                onSelect(value.value);
                return;
            }

        }

    }
    const autoCompleteInputClick = () => {
        if(!disabled) setVisible(!visible);
        setTimeout(()=>{
            inputRef.current && inputRef.current.focus();
        },100)
    }
    const clearValue = () => {
        setValue(multiple?[]:"");
        onSelect(multiple?[]:"");
    }
    const parentKeyDown = (e) => {
        if(!visible) setVisible(true)
        let rules = [
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_searchInput",
                nextEl: _id+"_option_0",
                action: (el,nextEl) =>nextFocus(el,nextEl)
            },
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_option_"+e.target.tabIndex,
                nextEl: _id+"_option_"+(e.target.tabIndex+1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_option_"+e.target.tabIndex,
                nextEl: _id+"_option_"+(e.target.tabIndex-1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_option_0",
                nextEl: _id+"_searchInput",
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_searchInput",
                nextEl: _id+"_tag_"+(_value.length-1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_tag_"+(_value.length-1),
                nextEl: _id+"_searchInput",
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowUp","ArrowLeft","Shift_Tab"],
                id: "_tag_"+e.target.tabIndex,
                nextEl: _id+"_tag_"+(e.target.tabIndex-1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ["ArrowDown","ArrowRight","Tab"],
                id: "_tag_"+e.target.tabIndex,
                nextEl: _id+"_tag_"+(e.target.tabIndex+1),
                action: (el,nextEl) => nextFocus(el,nextEl)
            },
            {
                key: ['Enter',' '],
                id: "_option_"+e.target.tabIndex,
                nextEl:'',
                action: () => selectItem(e.target.tabIndex)
            },
            {
                key: ['Enter',' '],
                id: "_searchInput",
                nextEl:'',
                action: () => selectItem(0)
            },
            {
                key: ['Escape'],
                id: "_searchInput",
                nextEl:'',
                action: () => setVisible(false)
            },
            {
                key: ['Escape'],
                id: "_option_"+e.target.tabIndex,
                nextEl:'',
                action: () => setVisible(false)
            },
            {
                key: ['Escape',"Backspace"],
                id: "_tag_"+e.target.tabIndex,
                nextEl:'',
                action: () => {
                    setVisible(false)
                    selectItem(e.target.tabIndex)
                    nextFocus(e.target,document.getElementById(_id+'_searchInput'))
                }
            },
            {
                key: ['Backspace'],
                id: "_searchInput",
                nextEl:'',
                action: () => {
                    if(_value.length>0 && document.getElementById(_id+'_searchInput').value===''){
                     nextFocus(document.getElementById(_id+'_searchInput'),document.getElementById(_id+'_tag_'+(_value.length-1)))
                    }
                }
            }

        ]
        let isDefault = false;
        rules.forEach((rule)=>{
            if(rule.key.includes(e.shiftKey ? 'Shift_' + e.key:e.key) && _id+rule.id===e.target.id){
                isDefault = true;
            }
        })
        if(e.key === "Backspace" && document.getElementById(_id+'_searchInput').value!=='') isDefault = false;
        isDefault && e.preventDefault()
        let nextFocus = (el,nextEl) => {
            el && el.blur();
            nextEl && nextEl.focus();
        }
        const selectItem = (index) => {
            let option = filteredOptions[index];
            selectClick(option);
        }

        rules.forEach((rule)=>{
            if(rule.key.includes(e.shiftKey ? 'Shift_' + e.key:e.key) && _id+rule.id===e.target.id){
                let nextEl = document.getElementById(rule.nextEl);
                rule.action(e.target,nextEl);
            }
        })

    }
    const parentMouseEnter = () => {
        hover && setVisible(true)
    }
    const parentMouseLeave = () => {
        hover && setVisible(false)
    }


    return (
        <>

            <div className={`${classList} ${_size[size]} ${_height[size]} ${_disabled} ${_rounded} relative border`} onKeyDown={parentKeyDown} style={style} onMouseEnter={parentMouseEnter} onMouseLeave={parentMouseLeave}>
                <input type={"hidden"} value={JSON.stringify(_value)}/>
                <div className={`${disabled?'cursor-not-allowed':'cursor-pointer'} flex flex-row items-center  ${_height[size]} w-full autocomplete-input` } tabIndex={0}  onClick={autoCompleteInputClick} >
                    {
                        ((!_value || _value.length <= 0) && !search) &&
                        <span className={"px-3 opacity-50"}>{placeholder}</span>
                    }
                    {/* Normal modda arama inputu */
                        !multiple && search &&
                        <input type="text" id={_id+'_searchInput'} placeholder={placeholder} disabled={disabled}
                               className={`px-3 focus-visible:outline-none w-full ${_disabled}`}  onChange={inputChange} value={_value.label} />
                    }
                    {multiple &&
                         <div className={`flex flex-row  items-center w-full  flex-wrap` }>
                            {/*Max show kısıtlaması yokken tagler*/
                                !_maxShow && _value && _value.map((item,index)=>(
                                <div tabIndex={index} id={_id+'_tag_'+index} className={"!m-[2px]"}>
                                    <Tag {...tag?.props} size={size} id={_id+'_tag_'+index} type={tag?.props?.type?tag?.props?.type:"primary"} classList={"autocomplete-input"}  close onClose={()=>selectClick(item)}>{item.label}</Tag>
                                </div>
                            ))}
                            {/*Max show kısıtlaması olan taglar*/
                                _maxShow && _value && filteredTags.map((item,index)=>(
                                 <div tabIndex={index} id={_id+'_tag_'+index} className={"!m-[2px]"}>
                                     <Tag {...tag?.props} size={size} id={_id+'_tag_'+index} type={tag?.props?.type?tag?.props?.type:"primary"} classList={"autocomplete-input"} close onClose={()=>selectClick(item)}>{item.label}</Tag>
                                 </div>
                             ))}
                             {/*Max show kısıtlaması iptal butonu*/
                                 maxShow && _maxShow && _value && _value.length> _maxShow &&
                                 <span className={"px-3 w-fit h-full"} onClick={()=>setMaxShow(false)} tabIndex={_value.length-1} id={_id+"_tag_"+(_value.length-1)}><BiRightArrow/></span>
                             }
                             {/*Max show kısıtlaması yap butonu*/
                                 maxShow && !_maxShow && _value && _value.length> _maxShow &&
                                 <span className={"px-3 w-fit"} onClick={()=>setMaxShow(true)}><BiLeftArrow/></span>
                             }
                            {/*Multiple modda arama inputu*/
                                search &&
                                <input ref={inputRef} type="text" id={_id+'_searchInput'} disabled={disabled} style={{width:inputWidth+'px'}} onChange={inputChange} placeholder={placeholder}
                                       className={`${_disabled} px-3 bg-transparent focus-visible:outline-none min-w-60px max-w-[160px] `}   />
                            }


                        </div>
                    }
                    {/*Arama ve multiple kapalıyken seçilen verinin gösterildiği yazı*/
                        !search && !multiple &&
                        <span className={`px-3 min-w-[100px] w-full ${_disabled}`}>{_value.label}</span>
                    }
                    {/*Arama kapalıyken bilerek bırakılan boşluk */
                        !search && multiple && _value.length<1 &&
                        <span className={"min-w-[100px] w-full"}></span>
                    }
                    {
                        (clearable && (multiple? _value.length>0:_value)) &&
                        <span className={"px-1 w-[30px]  "} onClick={clearValue}>
                            <BsX className={`${_size[size]} autocomplete-input`} />
                        </span>
                    }
                    <div className={"px-1 w-[30px]  "} >
                        {/*Select menüsü kapalıyken gösterilen ikon*/
                            !visible && <BsArrowDownShort className={`${_size[size]} autocomplete-input`} />
                        }
                        {/*Select menüsü açıkken gösterilen ikon*/
                            visible && <BsArrowUpShort className={`${_size[size]} autocomplete-input`} />
                        }
                    </div>
                </div>
                {
                    visible &&
                    <div className={" absolute left-0 w-full z-10"}>
                        <div className={` bg-white p-2 !mt-1  border  w-full rounded-md `}>
                            {filteredOptions.length>0?
                                Object.values(filteredOptions).map((item,index) => (
                                    <div key={item.value} id={_id+'_option_'+index} tabIndex={index} onClick={()=>selectClick(item)}
                                         className={`py-1 px-3 hover:bg-gray-100 cursor-pointer mb-1 ${_rounded} ${_value.value === item.value ?'bg-gray-200 border':''} ${multiple && _value.includes(item)?'bg-gray-200 border':''}`} >
                                        {item.label}
                                        <input type={"hidden"} value={item} id={_id+'_option_input_'+index}/>
                                    </div>
                                ))
                                :
                                <div className={`py-1 px-3 ${_rounded}`}>
                                    Veri Bulunamadı
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
            {error && <span className={"text-red-500 text-xs"}>{error}</span>}
        </>
    );
}


SelectBox.propTypes = {
    /** Uygulanmak istenen class listesi */
    classList: PropTypes.string,

    /** Köşe yumuşatma seviyesi */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'full']),

    /** Büyüklük */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),

    /** Disabled seçeneği */
    disabled: PropTypes.bool,

    /** Listelenecek veriler */
    options: PropTypes.array,

    /** Seçilen veri */
    onSelect: PropTypes.func,

    /** Varsayılan veri */
    value: PropTypes.any,

    /** Birden fazla seçilebilsin mi */
    multiple: PropTypes.bool,

    /** Hangi tag elemanı kullanılsın */
    tag: PropTypes.node,

    /** Arama Seçeneği olsun mu */
    search: PropTypes.bool,

    /** Inline style'ı */
    style: PropTypes.object,

    /** en fazla kaç veri seçilebilsin */
    max: PropTypes.number,

    /** en fazla kaç veri gösterilsin */
    maxShow: PropTypes.number,

    /** placeholder */
    placeholder: PropTypes.string,

    /** Temizleme butonu */
    clearable: PropTypes.bool,

    /** Hover durumunda menü açılsın mı */
    hover: PropTypes.bool,

};

SelectBox.defaultProps = {
    options:[{value:"key1",label:"value 1"},{value:"key2",label:"value 2"},{value:"key3",label:"value 3"}],
    size:"md",
    onSelect: (value) => {
        // eslint-disable-next-line no-console
        console.log('You have clicked me!', value);
    },


};
