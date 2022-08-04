import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage.jsx'
import Home from '../src/components/Home/Home.jsx'
import Details from '../src/components/Details/Details.jsx'
import Create from '../src/components/Create/Create.jsx'
import Loading from './components/Loading/Loading.jsx';
import Contact from './components/Contact/Contact.jsx'

function App() {
  return (    
      <Router>        
        <Route exact path='/' component={LandingPage}/>
        <Route path='/home' component={Home}/>
        <Route path='/dogs/:id' component={Details}/>
        <Route path='/create' component={Create}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/loading' component={Loading}/>
      </Router>    
  );
}

export default App;
