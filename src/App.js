import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  
} from "react-router-dom";
 
import Home from './Screen/Home/Home';
import Header from './components/Header/Header';
import About from './Screen/About/About';


function App() {

    
  return (
    <div>
    
    <Router> 
      <Header />
      <div > 
      
 
       <Switch>
          <Route exact path="/">
            <Home  />
          </Route>
          
          <Route path="/About">
           <About />
          </Route>
        </Switch>
      </div>
    </Router>



  
    </div>  
    ); 
}

export default App;
