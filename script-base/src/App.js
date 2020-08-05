import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import NavBar from './NavBar/NavBar'
import MyScripts from './MyScripts/MyScripts'
import HealthcareNews from './HealthcareNews/HealthcareNews'
import CovidNews from './CovidNews/CovidNews'
import BrandName from './BrandName/BrandName'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' render={(routerprops) => <Home {...routerprops}/>}/>
        <Route exact path='/prescriptions' render={(routerprops) => <MyScripts {...routerprops}/>}/>
        <Route exact path='/healthcare-info' render={(routerprops) => <HealthcareNews {...routerprops}/>}/>
        <Route exact path='/covid-info' render={(routerprops) => <CovidNews {...routerprops}/>}/>
        <Route exact path='/brand-name' render={(routerprops) => <BrandName {...routerprops}/>}/>
      </Switch>
      
    </div>
  );
}

export default App;
