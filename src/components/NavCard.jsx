import React from 'react';
import s from "./NavCard.module.css"
import { NavLink } from 'react-router-dom';
import { removeCity } from '../actions';
import { connect } from 'react-redux';
import {} from '@fortawesome/fontawesome-svg-core'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useNavigate} from 'react-router-dom';


export function NavCard(props) {
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

  const navigate = useNavigate();
  const goHome = () => navigate('/')
  const goToCity = (id) => navigate(`/ciudad/${id}`)
  const { id } = useParams();

  const redirect = () => {
    if(props.cities.length <= 1) goHome();
    else if(props.id == id) {
      let r = props.cities.findIndex(city => city.id == id) - 1
      r = r < 0 ? 0 : r;
      goToCity(r)
    }
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
        <button onClick={() => {redirect(); props.removeCity(props.id)}} className={s.boton}><FontAwesomeIcon icon={faXmark}/></button>
      </div>
    </div>;
    return card
};

const mapStateToProps = (state) => {
  return {
    cities: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeCity: (id) => dispatch(removeCity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavCard)