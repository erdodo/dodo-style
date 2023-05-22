import React from 'react';
import PropTypes from 'prop-types';
import './lib/styles.css';
import { Slide,Fade,Zoom  } from './lib';
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
export default function Carousel({children,effect, ...props}) {
    const CarouselRef = React.useRef();
    const properties = {
        prevArrow: <button><BsArrowLeftShort className={"text-white text-3xl"} /></button>,
        nextArrow: <button><BsArrowRightShort className={"text-white text-3xl"}/></button>
    }

    document.addEventListener("click",e=>{
        if(!CarouselRef.current) return;
        props.onClickItem && props.onClickItem(CarouselRef.current)
    })
    return (
        <>
            {effect === 'fade' &&
                <Fade {...props} ref={CarouselRef}
                      prevArrow={props.prevArrow?props.prevArrow: properties.prevArrow} nextArrow={props.nextArrow?props.nextArrow: properties.nextArrow}>
                    {children}
                </Fade>
            }
            {
                effect === 'zoom-in' &&
                <Zoom  {...props} scale={1.4} ref={CarouselRef}
                       prevArrow={props.prevArrow?props.prevArrow: properties.prevArrow} nextArrow={props.nextArrow?props.nextArrow: properties.nextArrow}>
                    {children}
                </Zoom >
            }
            {
                effect === 'zoom-out' &&
                <Zoom  {...props} scale={0.6} ref={CarouselRef}
                       prevArrow={props.prevArrow?props.prevArrow: properties.prevArrow} nextArrow={props.nextArrow?props.nextArrow: properties.nextArrow}>
                    {children}
                </Zoom >
            }
            {!['fade','zoom-in',"zoom-out"].includes(effect)  &&
                <Slide {...props} ref={CarouselRef}
                       prevArrow={props.prevArrow?props.prevArrow: properties.prevArrow} nextArrow={props.nextArrow?props.nextArrow: properties.nextArrow}>
                    {children}
                </Slide>
            }

        </>
    );
}

Carousel.propTypes = {
    /** Slayt gösterisinin içeriği */
    children: PropTypes.node.isRequired,

    /** Bir sonraki geçiş başlamadan önce geçen süre (milisaniye)*/
    duration: PropTypes.number,
    /** Geçişin ne kadar süreceğini belirler*/
    transitionDuration: PropTypes.number,

    /** Görüntülenecek ilk slaydı belirtir*/
    defaultIndex: PropTypes.number,

    /** Slayt gösterisinin altında nokta olup olmayacağını belirlemek için. fonksiyon ise; döndürülen öğeyi oluşturacak*/
    indicators: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.instanceOf("((index?: number) => ReactNode)")
    ]),

    /** Önceki ok işlevi görecek özel bir öğe */
    prevArrow: PropTypes.node,

    /** Sonraki ok işlevi görecek özel bir öğe */
    nextArrow: PropTypes.node,

    /** Sonraki veya önceki slayda gitmek için bir gezinme okunun olması gerekip gerekmediğini belirler.*/
    arrows: PropTypes.bool,

    /** Slayt gösterisinin otomatik olarak dönüp dönmediğini belirler*/
    autoplay: PropTypes.bool,

    /** Geçişin sonsuz döngüde olup olmayacağını belirtir*/
    infinite: PropTypes.bool,

    /** Fare kaydırıcının üzerine geldiğinde geçiş efektinin uygulanıp uygulanmayacağını belirler*/
    pauseOnHover: PropTypes.bool,

    /** Kullanılacak zamanlama geçiş işlevi.*/
    easing: PropTypes.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear","cubic","cubic-in","cubic-out"]),

    /** Geçiş efektini belirler*/
    effect: PropTypes.oneOf(["fade", "zoom-in", "zoom-out", "slide"]),

    /** Kaydırıcıları içeren sarmalayıcıya özel css'nizi eklemek için bu pervaneyi kullanın. css className'inizi cssClass pervanesi için değer olarak iletin*/
    cssClass: PropTypes.string,

    /** Her geçişin başında tetiklenen geri arama. oldIndex ve newIndex bağımsız değişken olarak iletilir*/
    onStartChange: PropTypes.func,

    /** Her geçişin sonunda tetiklenen geri arama. oldIndex ve newIndex bağımsız değişken olarak iletilir*/
    onChange: PropTypes.func,

    /** Tıklandığında tetiklenen geri arama. index bağımsız değişken olarak iletilir*/
    onClickItem: PropTypes.func,

    /** SlidesToShow ve slidesToScroll'u ekran boyutuna göre ayarlayın. */
    responsive: PropTypes.string,

    /** Her sayfada gösterilecek slayt sayısı*/
    slidesToShow: PropTypes.number,

    /** Bir kaydırma işlemiyle kaç slaytın kaydırılacağını belirler*/
    slidesToScroll: PropTypes.number,

};

Carousel.defaultProps = {

};
