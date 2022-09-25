import React from "react";
import s from "./Cards.module.css";
import Card from "./Card.jsx";
import SearchBar from "./SearchBar";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

export function Cards(props) {
  if (props.cities) {
    return (
      <>
      <div className={s.cards}>
        <div className={s.logo}>
          <div className={s.logoimg}>
            <img src="https://i.imgur.com/0CiolPe.png"/>
          </div>
          <div className={s.logotext}>
            mitWeather
          </div>
        </div>
        <SearchBar />
        {props.cities.map((c) => (
            <Card
              key={c.id}
              max={c.max}
              min={c.min}
              curr={c.temp}
              name={c.name}
              img={c.img}
              id={c.id}
            />
        ))}
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