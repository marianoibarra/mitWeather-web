import React from 'react';
import s from "./Card.module.css"
import { NavLink } from 'react-router-dom';
import { removeCity } from '../actions';
import { connect } from 'react-redux';
import {} from '@fortawesome/fontawesome-svg-core'
import {faXmark, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Card(props) {
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

  var card = 
    <div className={s.contenedor} style={styles[props.img]}>
      <NavLink className={({ isActive }) =>
        isActive ? s.link : undefined
        } id={s.card} to={`/ciudad/${props.id}`} >
        <div className={s.city}>{props.name}</div>
      </NavLink>
      <div className={s.tempOrButton}>
        <div className={s.temp}>{props.curr + "°"}</div>
        <button onClick={() => props.removeCity(props.id)} className={s.boton}><FontAwesomeIcon icon={faXmark}/></button>
      </div>
    </div>;
    return card
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCity: (id) => dispatch(removeCity(id))
  }
}

export default connect(null, mapDispatchToProps)(Card)