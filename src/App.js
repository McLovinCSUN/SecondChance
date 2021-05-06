import React from 'react';
import './App.css';
import {BrowserRouter as Switch, Route,  Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Media from './pages/Media';
import Resources from './pages/Resources';
import Stories from './pages/Stories';
import Footer from './components/Footer';


function App() {

  return ( 
        
        <div id="main_panel">
        <NavBar />
        <div className="inner-pannel">
          <Switch>
            <Route exact path="/" component={()=><Home/>}>
              <Redirect to="/home" /> 
            </Route>
            <Route path="/media" exact component={Media} />
            <Route path="/resources" exact component={Resources} />
            <Route path="/stories" exact component={Stories} />
            <Route path="/home" exact component={Home} />
          </Switch>   
      </div>
        <Footer /> 
      </div>
    
  );
}

export default App;
