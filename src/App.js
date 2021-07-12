import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Portfolio from './Pages/Portfolio';
import NavBar from './Component/NavBar';

const App = () => {
  return (
    <div className = "App">
    <div className = "sidebar">
     <NavBar/>

    </div>

    <div className = 'nav-btn'>
      <div className = "line-1"></div>
      <div className = "line-2"></div>
      <div className = "line-3"></div>
    </div>
      <div className = "main-content">
          <div className = "inner-content">
            <Switch>
              <Route exact path = "/" component = {HomePage}/>
              <Route exact path = "/about" component = {AboutPage}/>
              <Route exact path = "/blog" component = {Blog}/>
              <Route exact path = "/contact" component = {Contact}/>
              <Route exact path = "/portfolio" component = {Portfolio}/>
            </Switch>
          </div>
      </div>
    </div>


  )
    
}

export default App
