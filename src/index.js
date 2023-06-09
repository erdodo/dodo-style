
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
import MessageBox  from "./FeedBack/MessageBox";
import Carousel from "./DataDisplay/Carousel";
import Image from "./DataDisplay/Image";
import Collapse from "./DataDisplay/Collapse/Collapse";
import CollapseItem from "./DataDisplay/Collapse/CollapseItem";
import Gallery from "./DataDisplay/Image/Gallery";
import {Tabs,TabList,Tab,TabPanel} from "./DataDisplay/Tabs";
import ElementsGroup from "./DataDisplay/ElementsGroup";

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




        <button onClick={onclick}>Tema</button>
        <MessageBox message={"Bu message box mesajıdır"} title={"Bu da başlığı"}>
            <div><Button type={"primary"} classList={"m-2 primary"}>Button</Button></div>
        </MessageBox>
    </div>
);*/


export { Button, Tag, AutoComplete, Input,
    DateTimeBox,SelectBox,ToastContainer, toast,
    Dialog,Tooltip,MessageBox,Badge,Carousel,
    Collapse,CollapseItem,Image,Gallery,
    Tabs,TabList,Tab,TabPanel,ElementsGroup};
