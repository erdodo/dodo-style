import React from "react";
import PropTypes from 'prop-types';
import Config from "./config.json";
// @ts-ignore
import Datetime from "./views/DateTime.js";
import moment from "moment";
import "moment/locale/tr";

export default function DateTimeBox({ value,rounded,notOutline,type,size,styleType,classList,disabled,...props}) {
    const datetimeRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const [_value, setValue] = React.useState(value);
    let _rounded = Config.rounded[rounded];
    const _size = Config.sizes;
    const _textSize = Config.textSizes;
    const _notOutline = notOutline&& "!border-[transparent] ";
    const _resize = type=== 'textarea' ? 'resize' : 'resize-none';
    let _type =Config.styleTypes[styleType];
    const _disabled = disabled ? 'opacity-50 cursor-not-allowed !bg-gray-100' : '';

    const onChange = (date) => {
        console.log("date",moment(date).toDate())
        setValue(date);
    }

    document.addEventListener("click", (e) => {

        if (!e.target.closest(".rdt") ) {
            setVisible(false);
        }
    })

    const [timeFormat, setTimeFormat] = React.useState(type !== 'date');
    const [dateFormat, setDateFormat] = React.useState(type !== 'time');
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
      if(type === 'date'){
          setTimeFormat(false)
      }
      if(type === 'time'){
          setDateFormat(false)
      }
      if (type ==='month'){
            setDateFormat('MM/YYYY')
          setTimeFormat(false)
      }
    if (type ==='year'){
        setDateFormat('YYYY')
        setTimeFormat(false)
    }


        setLoading(true)
    })
    return (
        <div className={"flex flex-col date-input"} >

            {loading && <Datetime
                {...props}
                open={visible}
                timeFormat={timeFormat}
                dateFormat={dateFormat}
                ref={datetimeRef}
                className={"dodo-datetimebox"}
                inputProps={{
                    className:`px-3 ${classList} ${_resize} ${_type} ${_size[size]} ${_rounded} ${_textSize[size]} ${_disabled}`,
                    placeholder:props.placeholder,
                }}
                value={_value}
                onChange={onChange}
                onOpen={()=>setVisible(true)}
                onClose={()=>setVisible(false)}
                closeOnClickOutside
                locale={"tr"}
                styleType={_type}
            />}
        </div>
    );
}
DateTimeBox.propTypes = {


    /** Child elemanı */
    value: PropTypes.string,

    /** Uygulanmak istenen class listesi */
    classList: PropTypes.string,

    /** Tip */
    type: PropTypes.oneOf(["text","password","email","number","date","time","datetime","month","week","file","checkbox","switch","radio","range","tel","url","color","textarea"]),

    /** Hiçbir border olmasın */
    notOutline: PropTypes.bool,

    /** Stil tipi */
    styleType: PropTypes.oneOf(['default']),

    /** Köşe yumuşatma seviyesi */
    rounded: PropTypes.oneOf(['sm', 'md', 'lg', 'xl','2xl','3xl', 'full']),

    /** Büyüklük */
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),

    /** Disabled seçeneği */
    disabled: PropTypes.bool,

    /** Tıklandığında çalışacak method */
    onClick: PropTypes.func,

    /** Değiştiğinde çalışacak method */
    onChange: PropTypes.func,

    /** Butonun inline style'ı */
    style: PropTypes.object,

    /** Görüntüleme formatı (date) */
    displayFormat: PropTypes.string,

    /** Değer formatı (date) */
    valueFormat: PropTypes.string,

    /** Hover */
    hover: PropTypes.bool,

    /** Alabileceği en az değer */
    min: PropTypes.number,

    /** Alabileceği en fazla değer */
    max: PropTypes.number,

    /** Temizleme butonu */
    clear: PropTypes.bool,

    /** Şifre gösterme butonu */
    showPassword: PropTypes.bool,

    /** Satır sayısı (textarea) */
    rows: PropTypes.number,

    /** otomatik satır sayısı (textarea) */
    autoRow: PropTypes.bool,

    /** Karakter limiti */
    limit: PropTypes.number,

    /** placeholder */
    placeholder: PropTypes.string,

    /** Checkbox label */
    label: PropTypes.string,

};

DateTimeBox.defaultProps = {
    size:"md",
    type:"text",
    styleType: 'default',
    rounded: 'md',
    displayFormat: "DD.MM.YYYY HH:mm:ss",
    valueFormat: 'YYYY-MM-DD HH:mm:ss',

    onClick: (event) => {
        console.log('You have clicked me!', event.target);
    },
    onChange: (event) => {

        //console.log('You have changed me!', event);
    }
};




