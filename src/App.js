import React from 'react';
import Provider from './Provider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Getuser, Form, Header, Footer, Permissions, AddUser } from './components';

function App() {
  return(
    <Provider>
    {/* <Header /> */}
    <Footer />
    <Router>
    <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/read">
            <Getuser /> 
          </Route>
          <Route path="/write">
            <AddUser /> 
          </Route>
          <Route path="/permissions">
            <Permissions /> 
          </Route>
          <Redirect exact to="/" />
        </Switch>
        </Router>
  </Provider>
  );
  }

export default App;
