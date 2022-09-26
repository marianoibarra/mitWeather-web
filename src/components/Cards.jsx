import React, {useState, useEffect, useRef} from "react";
import s from "./Cards.module.css";
import NavCard from "./NavCard.jsx";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass, faArrowLeft} from "@fortawesome/free-solid-svg-icons"

export function Cards(props) {

  const [search, setSearch] = useState(false);
  const [icon, setIcon] = useState(faMagnifyingGlass)
  const logo = useRef()
  const searchBar = useRef()

  useEffect(() => {
    if(search) {
      searchBar.current.className = s.visible
      logo.current.className = s.hidden
      setIcon(faArrowLeft)

    } else {
      logo.current.className = s.logoCont
      searchBar.current.className = s.searchContNav
      setIcon(faMagnifyingGlass)
    }
  },[search])

  if (props.cities) {
    return (
      <>
      <div className={s.nav}>
        <div className={s.navFirstBlock}>
          <div ref={logo} className={s.logoCont}>
            <div className={s.logoimg}>
              <img src="https://i.imgur.com/0CiolPe.png"/>
            </div>
            <div className={s.logotext}>
              mitWeather
            </div>
          </div>
          <div  className={s.searchButtonCont}>
            <button onClick={() => setSearch(!search)}>
              <FontAwesomeIcon font icon={icon} />
            </button>
         </div>
          <div ref={searchBar} className={s.searchContNav}>
              <SearchBar />
          </div>
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