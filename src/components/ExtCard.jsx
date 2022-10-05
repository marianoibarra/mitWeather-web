import React from "react";
import s from './ExtCard.module.css'
import icons from "../img";

export default function ExtCard(props) {
    let d = props.city.dt_txt.split(/[- :]/);
    console.log(d)
    let timezone = props.timezone/3600
    let date = new Date(d[0], d[1], d[2], d[3], timezone +d[4], d[5])
    console.log(date)
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