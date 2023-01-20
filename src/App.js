import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './containers/pages/Dashboard/Dashboard';
import AddUser from './containers/pages/AddUser/AddUser'
import AddUserDetail from './containers/pages/AddUserDetail/AddUserDetail';
import NavigationBar from './components/atoms/NavigationBar/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import Login from './containers/pages/Login/Login';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavigationBar />
        <TransitionGroup>
          <CSSTransition
            onEnter={true}
            classNames="fade"
            timeout={1000}>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/user/add" component={AddUser} />
              <Route path="/user/add-detail/:username?" component={AddUserDetail} />
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </BrowserRouter>
    </div>
  )
}

export default App;
