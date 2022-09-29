import React from "react";
import s from "./Ciudad.module.css"
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import DocumentTitle from "react-document-title";
import ExtCard from "./ExtCard";
import Footer from './Footer'
import Fade from 'react-reveal/Fade';

const icons = {
    "01d": "https://i.imgur.com/ZKBS2fF.png",
    "01n": "https://i.imgur.com/PFo9Tag.png",
    "02d": "https://i.imgur.com/BZ3kgOi.png",
    "02n": "https://i.imgur.com/Q9i90il.png",
    "03d": "https://i.imgur.com/2SVuvX3.png",
    "03n": "https://i.imgur.com/2SVuvX3.png",
    "04d": "https://i.imgur.com/rdrR7lq.png",
    "04n": "https://i.imgur.com/rdrR7lq.png",
    "09d": "https://i.imgur.com/6n0n2wf.png",
    "09n": "https://i.imgur.com/6n0n2wf.png",
    "10d": "https://i.imgur.com/XYPQ1w4.png",
    "10n": "https://i.imgur.com/T9igigj.png",
    "11d": "https://i.imgur.com/llKlagr.png",
    "11n": "https://i.imgur.com/llKlagr.png",
    "13d": "https://i.imgur.com/TobmQTg.png",
    "13n": "https://i.imgur.com/TobmQTg.png",
    "50d": "https://i.imgur.com/QvffgXO.png",
    "50n": "https://i.imgur.com/QvffgXO.png"
}

const styles = {
    "01d": 'linear-gradient(#2165a8, #6896c5)',
    "01n": 'linear-gradient(#070e21, #2e3844)',
    "02d": 'linear-gradient(#187eb2, #65a3c5)',
    "02n": 'linear-gradient(#070e21, #2e3844)',
    "03d": 'linear-gradient(#597388, #80a9be)',
    "03n": 'linear-gradient(#070e21, #2e3844)',
    "04d": 'linear-gradient(#3f5161, #597585)',
    "04n": 'linear-gradient(#070e21, #2e3844)',
    "09d": 'linear-gradient(#3f5161, #597585)',
    "09n": 'linear-gradient(#070e21, #2e3844)',
    "10d": 'linear-gradient(#3f5161, #597585)',
    "10n": 'linear-gradient(#070e21, #2e3844)',
    "11d": 'linear-gradient(#3f5161, #597585)',
    "11n": 'linear-gradient(#070e21, #2e3844)',
    "13d": 'linear-gradient(#3f5161, #597585)',
    "13n": 'linear-gradient(#070e21, #2e3844)',
    "50d": 'linear-gradient(#3f5161, #597585)',
    "50n": 'linear-gradient(#070e21, #2e3844)',
}

export function Ciudad(props) {

    let navigate = useNavigate()
    let { id } = useParams();    
    let city = props.cities.find(city => city.id == id)
    let [test, setTest] = useState(true)


    useEffect(() => {
    if(city == undefined) {
        if(props.cities.length > 0) {
            navigate(`/ciudad/${props.cities[0].id}`)
        } else {
            navigate('/')
        }

    }},[])

    useEffect(() => {
        if(props.cities.find(city => city.id == id)) {
            let city = props.cities.find(city => city.id == id)
            window.document.body.style.background = styles[city.img];
        } 
    })

    useEffect(() => {
        setTest(true);
    },[id])




    if(city != undefined) {
        return (
            <DocumentTitle title={`mitWeather - ${city.name}`}>
                <Fade bottom distance={"10%"} duration={1000} spy={id} cascade appear >
                    <div className={s.body}>
                        <div className={s.weatherCity}>
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
                            <div className={s.extContainer}>
                                <div className={s.extScrolleable}>
                                {
                                    city.ext.map(e => <ExtCard timezone={city.timezone} city={e} />)
                                }
                                </div>
                            </div>
                        </div>
                        <div className={s.footer}>
                            <Footer />
                        </div>
                    </div>
                </Fade>
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