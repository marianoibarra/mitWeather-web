import React from "react";
import s from './ExtCard.module.css'

const icons = {
    "01d": "https://i.imgur.com/Cedswx5.png",
    "01n": "https://i.imgur.com/xdwdEgZ.png",
    "02d": "https://i.imgur.com/0CiolPe.png",
    "02n": "https://i.imgur.com/07ff4E7.png",
    "03d": "https://i.imgur.com/I4Zn1K0.png",
    "03n": "https://i.imgur.com/I4Zn1K0.png",
    "04d": "https://i.imgur.com/JtQJNDU.png",
    "04n": "https://i.imgur.com/JtQJNDU.png",
    "09d": "https://i.imgur.com/O98OqlS.png",
    "09n": "https://i.imgur.com/O98OqlS.png",
    "10d": "https://i.imgur.com/0CiolPe.png",
    "10n": "https://i.imgur.com/07ff4E7.png",
    "11d": "https://i.imgur.com/8ZzDA5T.png",
    "11n": "https://i.imgur.com/8ZzDA5T.png",
    "13d": "https://i.imgur.com/eowdYfb.png",
    "13n": "https://i.imgur.com/eowdYfb.png",
    "50d": "https://i.imgur.com/Put4Ig3.png",
    "50n": "https://i.imgur.com/Put4Ig3.png"
}



export default function ExtCard(props) {
    const date = new Date(props.city.dt_txt)
    const timezone = props.timezone/3600
    date.setHours(date.getHours() + timezone)
    const style = date.getHours() >= 21 ? s.last : undefined;
    var micro = 
        <div id={s.container} className={style}>
            <div className={s.hour}>
                {`${date.getHours()}:${'00'}`}
            </div>
            <div className={s.imgCont}>
                <img className={s.img} src={icons[props.city.weather[0].icon]} />
            </div>
            <div className={s.temp}>
                {`${Math.round(props.city.main.temp) - 273}°`}
            </div>
            <div className={s.weather}>
                {props.city.weather[0].description}
            </div>
        </div>;
        return micro
}