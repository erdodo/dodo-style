import React from 'react';
import {AiFillCaretLeft, AiFillCaretRight} from "dodo-icons/react/ai";

export default function ViewNavigation( { onClickPrev, onClickSwitch, onClickNext, switchContent, switchColSpan, switchProps } ) {
	return (
		<div className={"h-[40px] flex flex-row items-center text-center justify-between"}>
			<div className="rdtPrev w-[40px]" onClick={ onClickPrev }>
				<AiFillCaretLeft className={"p-1 rounded-full cursor-pointer dark:text-white text-2xl hover:bg-gray-100 dark:hover:bg-gray-600"} />
			</div>
			<div className="rdtSwitch w-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg" colSpan={ switchColSpan } onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</div>
			<div className="rdtNext w-[40px]" onClick={ onClickNext }>
				<AiFillCaretRight className={"p-1 rounded-full cursor-pointer dark:text-white text-2xl hover:bg-gray-100 dark:hover:bg-gray-600"} />
			</div>
		</div>
	);
}
