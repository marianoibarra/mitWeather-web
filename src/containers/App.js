import React from 'react';
import './App.css';
import Cards from "../components/Cards"
import {Routes, Route} from 'react-router-dom'
import Ciudad from '../components/Ciudad';
import Home from '../components/Home';

export default function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' index element={<Home />}/>
          <Route path='/ciudad' element={<Cards />}>
            <Route path=':id' element={<Ciudad />}/>
          </Route>
        </Routes>      
    </div>
  );
}