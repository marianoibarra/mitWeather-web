import React from "react";
import s from './Home.module.css'
import SearchBar from "./SearchBar";
import DocumentTitle from "react-document-title";
import Fade from "react-reveal/Fade"

export default function Home() {
    var home = 
            <DocumentTitle title="mitWeather">
                <Fade distance={"20%"} duration={1500} bottom cascade>
                <div className={s.homeBody}>
                
                    <div className={s.logo}>
                        <div className={s.logoimg}>
                            <img src="https://i.imgur.com/0CiolPe.png"/>
                        </div>
                        <div className={s.logotext}>
                            mitWeather
                        </div>
                    </div>
                    <div className={s.searchCont}><SearchBar/></div>
                
                </div>
                </Fade>
            </DocumentTitle>;
        return home
    }
