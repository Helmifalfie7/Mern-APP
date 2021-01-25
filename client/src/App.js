import React from 'react';
import './App.css';
import {BrowserRouter,Link, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import { Button } from 'reactstrap';
import  ContactList  from './components/ContactList';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Link to="/list"> 
      <Button color= "info"> Contact List </Button> 
      </Link>
      <Link to="/form"> 
      <Button color= "info"> ADD Contact </Button> 
      </Link>
    </div>
    <Route exact path="/" render ={()=> <h1>See your contact Data Here! </h1>} />
    <Route  path="/list" render ={()=> <ContactList/> }/>
    </BrowserRouter>
  );
}

export default App;
