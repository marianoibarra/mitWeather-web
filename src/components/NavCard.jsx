import React from 'react';
import s from "./NavCard.module.css"
import { NavLink } from 'react-router-dom';
import { removeCity } from '../actions';
import { connect } from 'react-redux';
import {} from '@fortawesome/fontawesome-svg-core'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useNavigate} from 'react-router-dom';


export function NavCard(props) {
  const styles = {
    "01d": {
        background: 'linear-gradient(to top, rgb(33, 101, 168), rgb(83 123 165))'
    },
    "01n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "02d": {
        background: 'linear-gradient(to top, #187eb2, #65a3c5)'
    },
    "02n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "03d": {
        background: 'linear-gradient(to top, #597388, #80a9be)'
    },
    "03n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "04d": {
        background: 'linear-gradient(to top, #3f5161, #597585)'
    },
    "04n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "09d": {
        background: 'linear-gradient(to top, #3f5161, #597585)'
    },
    "09n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "10d": {
        background: 'linear-gradient(to top, #3f5161, #597585)'
    },
    "10n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "11d": {
        background: 'linear-gradient(to top, #3f5161, #597585)'
    },
    "11n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "13d": {
        background: 'linear-gradient(to top, #3f5161, #597585)'
    },
    "13n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    },
    "50d": {
        background: 'linear-gradient(to top, #3f5161, #597585)'
    },
    "50n": {
        background: 'linear-gradient(to top, #070e21, #2e3844)'
    }
}

  const navigate = useNavigate();
  const goHome = () => navigate('/')
  const goToCity = (id) => navigate(`/ciudad/${id}`)
  const { id } = useParams();

  const redirect = () => {
    let r, index;
    if(props.cities.length <= 1) goHome();
    else if(props.id == id) {
      index = props.cities.findIndex(city => city.id == id)
      if(index < props.cities.length-1) r = props.cities[index+1].id;
      else r = props.cities[props.cities.length-1].id;
      goToCity(r)
      // r = props.cities.findIndex(city => city.id == id) - 1
      // r = r < 0 ? props.cities[0].id : r;
      // goToCity(r)
    }
  }

  var card = 
    <div className={s.contenedor} style={styles[props.img]}>
      <NavLink className={({ isActive }) =>
        isActive ? s.link : undefined
        } id={s.card} to={`/ciudad/${props.id}`} >
        <p className={s.city}>{props.name}</p>
      </NavLink>
      <div className={s.tempOrButton}>
        <div className={s.temp}>{props.curr + "°"}</div>
        <button className={s.closeBtn} onClick={() => {redirect(); props.removeCity(props.id)}}><FontAwesomeIcon icon={faXmark}/></button>
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