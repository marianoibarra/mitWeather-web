import React, { useState, useEffect, useRef} from "react";
import s from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux";
import { addCity } from "../actions";
import { useNavigate } from "react-router-dom";

export function SearchBar(props) {
  var [city, setCity] = useState("");
  var [id, setId] = useState(0);
  let [focus, setFocus] = useState(false); 
  const searchCont = useRef();
  const navigate = useNavigate();
  const goToCity = (id) => navigate(`/ciudad/${id}`)

  useEffect(() => {
    if(focus) {
      searchCont.current.className = `${s.focus}`
    } else {
      searchCont.current.className = `${s.unfocus}`
    }
  })
  
  return (
    <form className={s.form} onSubmit={(e) => {
      e.preventDefault();
      props.searchCity(city, id)
      let i = document.getElementById('inputCity');
      i.value = '';
      setCity('')
      goToCity(id);
      setId(id + 1);      
    }}>

      <div id={s.searchCont} className={s.unfocus} ref={searchCont}>
        <button className={s.searchButton} type="submit">
          <FontAwesomeIcon className={s.searchIcon} icon={faMagnifyingGlass} />
        </button>
        <input
          autocomplete="off"
          id="inputCity"
          className={s.searchInput}
          type="text"
          placeholder="Enter location"
          value={city}
          onChange={e => setCity(e.target.value)}
          onFocus={e => setFocus(true)}
          onBlur={e => setFocus(false)}
        />
      </div>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: (city, id) => dispatch(addCity(city, id))
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)