import React from "react";
import s from "./Cards.module.css";
import NavCard from "./NavCard.jsx";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import NavFirstBlock from "./Nav-FirstBlock";
import SearchBar from "./SearchBar";

export function Cards(props) {
  if (props.cities) {
    return (
      <>
      <div className={s.nav}>
        <div className={s.navFirstBlock}>
          <div className={s.logoCont}>
            <div className={s.logoimg}>
              <img src="https://i.imgur.com/0CiolPe.png"/>
            </div>
            <div className={s.logotext}>
              mitWeather
            </div>
          </div>
          <SearchBar />
        </div>
        <div className={s.navSecondBlock}>
          {props.cities.map((c) => (
              <div className={s.card}>
              <NavCard
                key={c.id}
                max={c.max}
                min={c.min}
                curr={c.temp}
                name={c.name}
                img={c.img}
                id={c.id}
              />
              </div>
          ))}
        </div>
      </div>
      <Outlet />
      </>
    );
  } else {
    return <div>Sin ciudades</div>;
  }
}

const mapStateToProps = (state) => {
  return {
  cities: state.data
  }
}

export default connect(mapStateToProps, null)(Cards)