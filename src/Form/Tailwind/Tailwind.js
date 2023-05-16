import React from "react";
/*
*Tailwind hatalarını düzeltmek için oluşturulmuştur
 */
export default function Tailwind() {
    return (
        <div className={`
        rounded-full rounded-xl rounded-lg rounded-sm bg-secondary-500 bg-primary-500 !px-0 !px-1 !py-1 !px-2 !py-2
        text-warning-200 px-6 px-5 !p-4 !px-6 !py-6 shadow-info-600 flex-col fixed !my-6 !text-success-500 gap-2 mt-3
        bg-gradient-to-r from-success-400 to-info-500 hover:from-pink-500 hover:to-warning-500 dark:text-gray-300 dark:bg-gray-600 dark:border-gray-700
        transition ease-in-out delay-150 duration-300 transform hover:-transecondary-y-1 hover:scale-110 !mx-5 dark:bg-gray-800/50
        `}></div>
    );
}
