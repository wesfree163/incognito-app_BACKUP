import Amplify from 'aws-amplify';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

import './App.css';
import ilogo from './img/ilogo.png';
import Home from './components/Home';
import awsconfig from './aws-exports';
import Views from './components/Views';
import userI from './img/userIcon.png';
import Button from 'react-bootstrap/Button';
import AddRemove from './components/AddRemove';
import Navigation from './components/Navigation';

Amplify.configure(awsconfig);

function App() {
  return (
  <div className="App">
  <header className="App-header" style={{
    backgroundColor: '#d8d8d8c4'
  }}>
    
    {/* <h2>Incognito App</h2> */}

    <div className="bar" style={{
      width: '64%'
    }}> 
      <img src={ilogo} className="logo" alt="inc-logo"/>
      <a href="/Home" className="navigation">Home</a>
      <a href="/AddRemove" className="navigation">Create Hierarchy</a>
      <a href="/Views" className="navigation">Page 3</a>
      {/* <Button className="navButton">Hierarchy</Button>   */}

      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
            <Switch>
              <Route path="/AddRemove" component={AddRemove} exact/>
              <Route path="/Views" component={Views} exact/>
              <Route path="/Home" component={Home} exact/>
            </Switch>
        </div> 
      </BrowserRouter>


      {/* <div className="navButton search">
        <SearchField className style={{}}/>
      </div> */}

      <div className="select">
        ---
        <button className="sort">▼</button>
      </div>

      {/* <img src={userI} className="user" alt="user-logo"/>  */}
    </div>

    {/* <div className="ContainerA"> */}
      {/* <Button className=""></Button>  */}
      {/* <h4>Region</h4> */}
    {/* </div> */}

    {/* <div className="ContainerB"> */}
      {/* <Button className=""></Button>  */}
      {/* <button className="Add">Add Field</button> */}
    {/* </div> */}

    {/* <div className="navButton search">
      <SearchField className style={{}}/>
    </div> */}
    
    {/* <Button className="submit">Submit</Button>  */}
    <AmplifySignOut className="AmplifySignOut"/> 
  </header>
</div>

    
  );
}

export default withAuthenticator(App);
