import React from "react";
import s from "./Nav-FirstBlock.module.css"
import SearchBar from './SearchBar'

export default function NavFirstBlock(props) {
    var navfirst = 
        <>
            <div className={s.logoCont}>
            <div className={s.logoimg}>
              <img src="https://i.imgur.com/0CiolPe.png"/>
            </div>
            <div className={s.logotext}>
              mitWeather
            </div>
          </div>
          <SearchBar />
        </>;
    return navfirst
}