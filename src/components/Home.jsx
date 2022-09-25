import React from "react";
import s from './Home.module.css'
import SearchBar from "./SearchBar";
import Spinner from "react-bootstrap/Spinner"
import DocumentTitle from "react-document-title";

export default function Home() {
    var home = 
            <DocumentTitle title="mitWeather">
                <div className={s.homeBody}>
                    <div className={s.searchCont}><SearchBar/></div>
                </div>
            </DocumentTitle>;
        return home
    }
