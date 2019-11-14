import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigInAndSignUpPage from './pages/sing-in-and-sign-up/sing-in-and-sign-up.component'
function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path= '/' component = {HomePage} />
        <Route  path= '/shop' component = {ShopPage} />
        <Route  path= '/signin' component = {SigInAndSignUpPage} />

      </Switch>
    </div>
  );
}


export default App;
