import React from "react";
import s from "./Ciudad.module.css"
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import DocumentTitle from "react-document-title";
import ExtCard from "./ExtCard";

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

const styles = {
    "01d": {},
    "01n": {
        background: 'linear-gradient(#424240,#1c1e21)'
    },
    "02d": {},
    "02n": {},
    "03d": {},
    "03n": {},
    "04d": {
        background: 'linear-gradient(#597585,#475d6f)'
    },
    "04n": {},
    "09d": {},
    "09n": {},
    "10d": {},
    "10n": {},
    "11d": {},
    "11n": {},
    "13d": {},
    "13n": {},
    "50d": {},
    "50n": {}
}

export function Ciudad(props) {

    let navigate = useNavigate()
    let { id } = useParams();    
    let city = props.cities.find(city => city.id == id)
    console.log(props.cities);

    useEffect(() => {
    if(city == undefined) {
        if(props.cities.length > 0) {
            navigate(`/ciudad/${props.cities[0].id}`)
        } else {
            navigate('/')
        }
    }},[])


    if(city != undefined) {
        return (
            <DocumentTitle title={`mitWeather - ${city.name}`}>
            <div style={styles[city.img]} className={s.body}>
                <div className={s.tempAndIcon}>
                    <div className={s.tempCont}>
                        <div className={s.city}>{city.name}</div>
                        <div className={s.temp}>{city.temp}º</div>
                        <div className={s.weather}>{city.weather}</div>
                    </div>
                    <div className={s.imgCont}>
                        <img className={s.img} src={icons[city.img]} />
                    </div>
                </div>
                <div>
                    {/* <h4>Extended - 3 hours steps</h4> */}
                    <div className={s.extContainer}>
                        <div className={s.extScrolleable}>
                        {
                            city.ext.map(e => <ExtCard timezone={city.timezone} city={e} />)
                        }
                        </div>
                    </div>
                </div>
            </div>
            </DocumentTitle>
        )
    } else {
        return (
            //rediccionar a home u otra city
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    cities: state.data,
    isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, null)(Ciudad);