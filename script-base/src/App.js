import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// Styles
import './App.css';

import { getCovidData, getCountryData } from './actionCreators/actionCreators'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import MyScripts from './MyScripts/MyScripts'
import HealthcareNews from './HealthcareNews/HealthcareNews'
import CovidNews from './CovidNews/CovidNews'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      fetch('http://localhost:3002/global')
          .then(r => r.json())
          .then(data =>
              dispatch(getCovidData(data)))
  }, [])

  useEffect(() => {
      fetch('http://localhost:3002/countries')
        .then(r => r.json())
        .then(data =>
            dispatch(getCountryData(data)))
}, [])

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' render={(routerprops) => <Home {...routerprops}/>}/>
        <Route exact path='/prescriptions' render={(routerprops) => <MyScripts {...routerprops}/>}/>
        <Route exact path='/healthcare-info' render={(routerprops) => <HealthcareNews {...routerprops}/>}/>
        <Route exact path='/covid-info' render={(routerprops) => <CovidNews {...routerprops}/>}/>
      </Switch>
      
    </div>
  );
}

export default App;
