
import Button from "./Form/Button/Button";
import Tag from "./DataDisplay/Tag";
import AutoComplete from "./Form/SelectBox";
import Input from "./Form/Input";
import DateTimeBox from "./Form/DateTimeBox/";
import SelectBox from "./Form/SelectBox";
import {ToastContainer, toast} from './FeedBack/Toast';
import Dialog from "./FeedBack/Dialog/Dialog";
import Badge from "./DataDisplay/Badge/Badge";
import Tooltip from "./FeedBack/Tooltip/Tooltip";

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('app'));
const onclick = () => {
    toast.success("Tema Değiştirildi")
    document.getElementsByTagName("html")[0].classList.toggle('dark');
}


root.render(

    <div className={"flex flex-row  justify-center pt-32 dark:bg-gray-900 w-screen h-screen"}>
        <Badge text={"deneme"} color={"danger"} className={"m-2"}>
            <Button type={"primary"} classList={"m-2 primary"}>Button</Button>
        </Badge>

        <button onClick={onclick}>Tema</button>
<ToastContainer/>
    </div>
);*/


export { Button, Tag, AutoComplete, Input, DateTimeBox,SelectBox,ToastContainer, toast,Dialog,Tooltip };
