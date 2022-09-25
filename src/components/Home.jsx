import React from "react";
import s from './Home.module.css'
import SearchBar from "./SearchBar";
import Spinner from "react-bootstrap/Spinner"

export default function Home() {
    var home = 
        <>
            <Spinner animation="border" role="status" />
            <div className={s.homeBody}>
                <div className={s.searchCont}><SearchBar/></div>
            </div>
        </>;
        return home
    }
