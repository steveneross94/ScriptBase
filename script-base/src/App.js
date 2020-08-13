import React from 'react';
import { Route, Switch } from 'react-router-dom'

// Styles
import './App.css';

// import Auth from "./Auth"
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import MyScripts from './MyScripts/MyScripts'
import HealthcareNews from './HealthcareNews/HealthcareNews'
import CovidNews from './CovidNews/CovidNews'

function App() {
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
