import React, { useState, useEffect, useRef} from "react";
import s from './SearchBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass, faCircleExclamation} from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux";
import { fetchCity } from "../actions";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import HeadShake from 'react-reveal/HeadShake'

export function SearchBar(props) {
  let [city, setCity] = useState("");
  let [id, setId] = useState(0);
  let [lastLength, setLastLength] = useState(0);
  let [focus, setFocus] = useState(false); 
  let [placeholder, setPlaceholder] = useState('Enter location')
  let [disabled, setDisabled] = useState(false)
  let [spyErr, setSpyErr] = useState(false);
  const searchCont = useRef();
  const errIcon = useRef();
  const spinner = useRef();
  const navigate = useNavigate();
  const goToCity = (id) => navigate(`/ciudad/${id}`)

  useEffect(() => {
    if(focus) {
      searchCont.current.className = `${s.focus}`
    } else {
      searchCont.current.className = `${s.unfocus}`
    }
  })

  useEffect(() => {
    if(props.error) {
      setPlaceholder(props.errMsg)
      errIcon.current.className = `${s.errIcon}`
      setSpyErr(spyErr + 1)
    } else {
      setPlaceholder('Enter location')
      errIcon.current.className = `${s.hidden}`
    }
  }, [props.error, props.errMsg])

  useEffect(() => {
    if(focus) {
      searchCont.current.className = `${s.focus}`
    } else {
      searchCont.current.className = `${s.unfocus}`
    }
  })

  useEffect(() => {
    if(props.isFetching) {
      spinner.current.className = `${s.spinner}`
      setPlaceholder('Searching..')
      setDisabled(true)
    } else {
      spinner.current.className = `${s.hidden}`
      if(!props.error) setPlaceholder('Enter location')
      setDisabled(false)
      if(props.setSearch && !props.error) props.setSearch(false)

    }
  }, [props.isFetching])

  useEffect(() =>
    { 
      if(props.cities.length > lastLength){
        goToCity(id);
        setId(id + 1);
      }
      setLastLength(props.cities.length)
    }, [props.cities.length])

  useEffect(() =>
    { 
      if(typeof props.indexRep == 'number') goToCity(props.cities[props.indexRep].id)
    }, [props.indexRep])
  
  return (
    <HeadShake spy={spyErr} when={props.error}>
      <form 
      autofill="nope"
      autoComplete="nope"
      className={s.form} onSubmit={(e) => {
      e.preventDefault();
      props.searchCity(city, id, props.cities)
      let i = document.getElementById('inputCity');
      i.value = '';
      setCity('')    
    }
    }>
      <div id={s.searchCont} className={s.unfocus} ref={searchCont}>
        <button className={s.searchButton} type="submit">
          <FontAwesomeIcon className={s.searchIcon} icon={faMagnifyingGlass} />
        </button>
        <input type="text" style={{display: 'none'}} />
        <input
          autofill="nope"
          autoComplete="nope"
          id="inputCity"
          className={s.searchInput}
          type="text"
          placeholder={placeholder}
          value={city}
          disabled={disabled}
          onChange={e => {setCity(e.target.value); errIcon.current.className = `${s.hidden}`}}
          onFocus={e => setFocus(true)}
          onBlur={e => setFocus(false)}
        />
        <div className={s.iconBox}>
          <div ref={spinner} className={s.spinner}>
            <Spinner size="sm" animation="border" variant="light"/>
          </div>
          <div ref={errIcon} className={s.errIcon}>
            <FontAwesomeIcon icon={faCircleExclamation}/>
          </div>
        </div>
      </div>
    </form>
    </HeadShake>
  );
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    errMsg: state.errMsg,
    cities: state.data,
    indexRep: state.indexRep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchCity: (city, id, currentState) => dispatch(fetchCity(city, id, currentState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)