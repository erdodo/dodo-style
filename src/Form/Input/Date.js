import React from "react";
import moment, {months} from "moment";
import 'moment/locale/tr';
import {BiFirstPage, BiLastPage,BiChevronLeft,BiChevronRight} from "../../icons/bi";
import {BsCalendar3} from "../../icons/bs";

//TODO: şu tarihten öncesi sonrası gözükmesin,

export default function DateComp({className,value,onChange,showType,displayFormat="DD.MM.YYYY",valueFormat="YYYY-MM-DD",hover,min,max}) {
    const _min = min?new Date(moment(min,valueFormat)):null;
    const _max = max?new Date(moment(max,valueFormat)):null;
    const [dateNow, setDateNow] = React.useState(new Date());
    const [inputValue, setInputValue] = React.useState("");
    const [weekList, setWeekList] = React.useState(["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"]);
    const [monthList, setMonthList] = React.useState(["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık",]);
    let ilkUcYil = ""+dateNow.getFullYear().toString().substring(0,3);
    const [yearList, setYearList] = React.useState([ilkUcYil+"0",ilkUcYil+"1",ilkUcYil+"2",ilkUcYil+"3",ilkUcYil+"4",ilkUcYil+"5",ilkUcYil+"6",ilkUcYil+"7",ilkUcYil+"8",ilkUcYil+"9"]);
    const [_showType, setShowType] = React.useState(showType?showType:"day");
    const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
        moment.locale('tr');
    }, []);
    React.useEffect(() => {
        value && isValidDate(moment(value,valueFormat).format("MM/DD/YYYY")) && setDateNow(new Date(moment(value,valueFormat)));
        value && isValidDate(moment(value,valueFormat).format("MM/DD/YYYY")) && setInputValue(moment(value,valueFormat).format(displayFormat));
    }, [value]);
    React.useEffect(() => {
        if(visible){
            document.addEventListener("click", (e)=>{
                if(e.target.closest(".date-input")){
                    return;
                }
                setVisible(false);
            });
        }
    }, [visible]);
    React.useEffect(() => {
        onChange(moment(dateNow).format(valueFormat))
    }, [dateNow]);

    const isExtraDays = (week, date) => {
        if (week === 0 && date > 10) {
            return true;
        } else if (week === 5 && date < 10) {
            return true;
        } else if (week === 4 && date < 10) {
            return true;
        } else {
            return false;
        }
    };

    const setDate = (day,month,year) => {
        isValidDate(moment([year,month,day]).format("MM/DD/YYYY"))&& setDateNow(moment([year,month,day]).toDate())
        !isValidDate(moment([year,month,day]).format("MM/DD/YYYY"))&& setDateNow(moment([year,month,1]).toDate())

    }

    const getDate = (month) => {
        var calendar = [];

        const startDate = moment([dateNow.getFullYear(), month])
            .clone()
            .startOf("month")
            .startOf("week");

        const endDate = moment([dateNow.getFullYear(), month]).clone().endOf("month");

        const day = startDate.clone().subtract(1, "day");

        // looping a month by a week
        while (day.isBefore(endDate, "day")) {
            calendar.push(
                Array(7)
                    .fill(0)
                    .map(() => day.add(1, "day").clone().format("DD"))
            );
        }

        if (calendar.length > 0) {
            return calendar.map((week, index) => (
                <tr className={"!border-none"}>
                    {week.map((day) => (
                        <td className="!px-2 !py-1 text-center !w-[20px] !h-[20px] !border-none !cursor-pointer hover:bg-gray-200 hover:rounded-sm"
                            onClick={()=>{

                                minMaxDisabled(month,day) && setDate(day,isExtraDays(index, day) && day>15?month-1:isExtraDays(index, day) && day<15?month+1:month,dateNow.getFullYear())
                                minMaxDisabled(month,day) && setInputValue(moment([dateNow.getFullYear(),isExtraDays(index, day) && day>15?month-1:isExtraDays(index, day) && day<15?month+1:month,day]).format(displayFormat))
                            }}>
                          <span className={`!text-sm font-thin `}>
                            {/*Diğer aylardan taşan günler*/
                                isExtraDays(index, day) ? (
                                <span className="!text-sm text-gray-300 ">{day}</span>
                            ) :
                              <>
                                    {/*Seçili Tarih*/
                                        (dateNow.getDate() === parseInt(day) && dateNow.getMonth() === month ) ? (
                                        <span className="!text-sm text-blue-500">{day}</span>
                                        ):

                                        <>
                                            {/*Min max'a takılan tarihler*/
                                                minMaxDisabled(month,day)?
                                                    <span className="!text-sm text-red-100">{day}</span>
                                                    :
                                                    <span className="!text-sm text-black">{day}</span>
                                            }
                                        </>
                                    }

                              </>

                            }

                          </span>
                        </td>
                    ))}
                </tr>
            ));
        }
    };
    const inputChange = (e) => {
        setInputValue(e.target.value)
        const inputDate = moment(e.target.value,displayFormat).format("MM/DD/YYYY")
        const jsDate = new Date(moment(e.target.value,displayFormat).format(valueFormat))
        if(isValidDate(inputDate)){
            console.log(jsDate,jsDate.getDate(),jsDate.getMonth(),jsDate.getFullYear())
            setDate(jsDate.getDate(),jsDate.getMonth(),jsDate.getFullYear())
        }
        //isValidDate(inputDate) && setDateNow(jsDate.getDate(),jsDate.getMonth(),jsDate.getFullYear())

    }

    const isValidDate=(dateString)=>
    {
        // First check for the pattern
        if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
            return false;

        // Parse the date parts to integers
        var parts = dateString.split("/");
        var day = parseInt(parts[1], 10);
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if(year < 1000 || year > 3000 || month === 0 || month > 12)
            return false;

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
            monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    };

    const setNewYearList = (type) => {
        if(type === 'before'){
            setYearList(yearList.map((item)=>item-10))
        }else{
            setYearList(yearList.map((item)=>item+10))
        }
    }
    const minMaxDisabled = (month,day) => {
        return (moment([dateNow.getFullYear(),month,day]).isBefore(moment([_min.getFullYear(),_min.getMonth(),_min.getDate()])) || moment([dateNow.getFullYear(),month,day]).isAfter(moment([_max.getFullYear(),_max.getMonth(),_max.getDate()])))
    }
    return (
        <>
        <div className={"relative date-input"} onClick={()=>setVisible(true)} onMouseEnter={()=>hover && setVisible(true)} onMouseLeave={()=>hover && setVisible(false)}>
            <div className={"relative"}>
                <BsCalendar3 className={"absolute text-gray-400 !text-lg !ml-2 h-full"}/>
                <input type="text" className={`${className} pl-10`} value={inputValue} onChange={inputChange}/>
            </div>
            {visible && (

            <div className={"w-[290px] pt-1 absolute z-10 "}>

                    <div className={"border bg-white mt-1 p-2 shadow-lg shadow-gray-300 w-full rounded-md"}>

                        {_showType === 'day' &&(
                            <>
                                <div className={"flex flex-row justify-between w-full items-center"}>
                                    <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>{
                                        setDate(dateNow.getDate(),0,dateNow.getFullYear())}
                                    }>
                                        <BiFirstPage />
                                    </button>
                                    <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setDate(dateNow.getDate(),dateNow.getMonth()-1,dateNow.getFullYear())}>
                                        <BiChevronLeft/>
                                    </button>
                                    <div className={"flex flex-row"}>
                                        <button  className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setShowType("month")}>{moment(dateNow).format(" MMMM")}</button>

                                        <button  className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setShowType("year")}>{moment(dateNow).format(" YYYY")}</button>
                                    </div>
                                    <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setDate(dateNow.getDate(),dateNow.getMonth()+1,dateNow.getFullYear())}>
                                        <BiChevronRight/>
                                    </button>
                                    <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setDate(dateNow.getDate(),11,dateNow.getFullYear())}>
                                        <BiLastPage />
                                    </button>
                                </div>
                                <table className={"!mb-2"}>
                                    <thead>
                                    <tr className={"!w-[20px] !border-none bg-gray-50"}>
                                        {
                                            weekList.map((item, index) => {
                                                return (
                                                    <th key={index} className={"text-center !text-sm !font-thin !px-2 !py-1 !border-none "}>{item}</th>
                                                )
                                            })
                                        }
                                    </tr>
                                    </thead>
                                    { getDate(dateNow.getMonth())}

                                </table>
                            </>
                        )}
                        {
                            _showType === 'month' &&(
                                <>
                                    <div className={"flex flex-row justify-between w-full items-center"}>
                                        <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setDate(dateNow.getDate(),dateNow.getMonth(),dateNow.getFullYear()-1)}>
                                            <BiChevronLeft/>
                                        </button>
                                        <div className={"flex flex-row"}>
                                            <button  className={"hover:bg-gray-100 p-2 rounded-full"} >{moment(dateNow).format(" MMMM")}</button>

                                            <button  className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setShowType("year")}>{moment(dateNow).format(" YYYY")}</button>
                                        </div>
                                        <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setDate(dateNow.getDate(),dateNow.getMonth(),dateNow.getFullYear()+1)}>
                                            <BiChevronRight/>
                                        </button>
                                    </div>
                                    <div className={"grid grid-cols-4"}>
                                        { monthList.map((item, index) => {
                                            return (
                                                <button key={index} className={ `${index ===dateNow.getMonth()?'bg-slate-300':''} col-span-1 mb-3 hover:bg-gray-100 p-1 rounded-md`}
                                                        onClick={()=>{
                                                            setDate(dateNow.getDate(),index,dateNow.getFullYear());setShowType("day")
                                                            isValidDate(moment([dateNow.getFullYear(),index,dateNow.getDate()]).format("MM/DD/YYYY"))?
                                                                setInputValue(moment([dateNow.getFullYear(),index,dateNow.getDate()]).format(displayFormat)):
                                                                setInputValue(moment([dateNow.getFullYear(),index,1]).format(displayFormat))
                                                        }}>{item}</button>
                                            )
                                        })}
                                    </div>
                                </>
                            )
                        }
                        {
                            _showType === 'year' &&(
                                <>
                                <div className={"flex flex-row justify-between w-full items-center"}>
                                    <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setNewYearList('before')}>
                                        <BiChevronLeft/>
                                    </button>
                                    <div className={"flex flex-row"}>
                                        <button  className={"hover:bg-gray-100 p-2 rounded-full"}  onClick={()=>setShowType("month")}>{moment(dateNow).format(" MMMM")}</button>

                                        <button  className={"hover:bg-gray-100 p-2 rounded-full"}>{moment(dateNow).format(" YYYY")}</button>
                                    </div>
                                    <button className={"hover:bg-gray-100 p-2 rounded-full"} onClick={()=>setNewYearList('after')}>
                                        <BiChevronRight/>
                                    </button>
                                </div>
                                <div className={"grid grid-cols-4"}>
                                    { yearList.map((item, index) => {
                                        return (
                                            <button key={index} className={ `${item ===dateNow.getFullYear()?'bg-slate-300':''} col-span-1 mb-3 hover:bg-gray-100 p-1 rounded-md`}
                                                    onClick={()=>{
                                                        setDate(dateNow.getDate(),dateNow.getMonth(),item);setShowType("day")
                                                        isValidDate(moment([item,dateNow.getMonth(),dateNow.getDate()]).format("MM/DD/YYYY"))?
                                                            setInputValue(moment([item,dateNow.getMonth(),dateNow.getDate()]).format(displayFormat)):
                                                            setInputValue(moment([item,dateNow.getMonth(),1]).format(displayFormat))
                                                    }
                                                    }>{item}</button>
                                        )
                                    })}
                                </div>
                                </>
                            )
                        }
                    </div>

            </div>
                )}
        </div>
</>
    );
}

