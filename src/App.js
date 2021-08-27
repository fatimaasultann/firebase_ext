import './App.css';
import SignIn from './components/signin';
import React from 'react';
import {Route, HashRouter, Switch} from 'react-router-dom'
import Dashboard from './components/dashboard';
import SignUp from './components/signup';

function App() {
  return (<>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </HashRouter>
    </>

  );
}

export default App;
