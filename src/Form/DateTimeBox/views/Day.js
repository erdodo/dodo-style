import {BiChevronLeft, BiChevronRight, BiFirstPage, BiLastPage} from "dodo-icons/react/bi";
import moment, {months} from "moment/moment";
import React from "react";

export default function Day({dateNow=new Date(),weekList,setDate,setShowType}){
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
            return calendar;
        }
    };
    return(
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
            <table className={"!mb-2 mx-auto"}>
                <thead>
                <tr className={"!w-[20px] !border-none bg-gray-50 dark:bg-gray-800"}>
                    {
                        weekList.map((item, index) => {
                            return (
                                <th key={index} className={"text-center !text-sm !font-thin !px-2 !py-1 !border-none "}>{item}</th>
                            )
                        })
                    }
                </tr>
                </thead>
                <tbody>
                { getDate(dateNow.getMonth()).map((week, index) => (
                    <tr className={"!border-none bg-slate-50 dark:!bg-slate-900"}>
                        {week.map((day) => (
                            <td className="!px-2 !py-1 text-center !w-[20px] !h-[20px] !border-none !cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 hover:rounded-sm"
                                onClick={()=>{

                                    setDate(day,isExtraDays(index, day) && day>15?month-1:isExtraDays(index, day) && day<15?month+1:month,dateNow.getFullYear())
                                    setInputValue(moment([dateNow.getFullYear(),isExtraDays(index, day) && day>15?month-1:isExtraDays(index, day) && day<15?month+1:month,day]).format(displayFormat))
                                }}>
                          <span className={`!text-sm font-thin `}>
                            {/*Diğer aylardan taşan günler*/
                                isExtraDays(index, day) ? (
                                        <span className="!text-sm text-gray-300 dark:text-gray-600 ">{day}</span>
                                    ) :
                                    <>
                                        {/*Seçili Tarih*/
                                            (dateNow.getDate() === parseInt(day) && dateNow.getMonth() === month ) ? (
                                                    <span className="!text-sm text-blue-500 dark:text-blue-400">{day}</span>
                                                ):

                                                <>
                                                    {/*Min max'a takılan tarihler*/
                                                        minMaxDisabled(month,day)?
                                                            <span className="!text-sm text-red-100 dark:text-red-700">{day}</span>
                                                            :
                                                            <span className="!text-sm text-black dark:text-white">{day}</span>
                                                    }
                                                </>
                                        }

                                    </>

                            }

                          </span>
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>

            </table>
        </>
    )
}
