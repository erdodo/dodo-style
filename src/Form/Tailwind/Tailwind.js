import React from "react";
/*
*Tailwind hatalarını düzeltmek için oluşturulmuştur
 */
export default function Tailwind() {
    return (
        <div className={`
        rounded-full rounded-xl rounded-lg rounded-sm bg-slate-500 bg-sky-500 !px-0 !px-1 !py-1 !px-2 !py-2
        text-yellow-200 px-6 px-5 !p-4 !px-6 !py-6 shadow-blue-600 flex-col fixed !my-6 !text-green-500 gap-2 mt-3
        bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 dark:text-gray-300 dark:bg-gray-600 dark:border-gray-700
        transition ease-in-out delay-150 duration-300 transform hover:-translate-y-1 hover:scale-110 !mx-5 dark:bg-gray-800/50
        `}></div>
    );
}
