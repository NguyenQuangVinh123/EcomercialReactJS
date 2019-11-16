import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SigInAndSignUpPage from './pages/sing-in-and-sign-up/sing-in-and-sign-up.component'
import {auth,createUserProfileDocument} from './firebase/firebase.utils'
import  {setCurrentUser} from './redux/user/user.action'
// import { firestore } from 'firebase';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
class App extends React.Component {
  unsubcribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser : user});
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
            });
          });
      }

      setCurrentUser (userAuth)
      
      // console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path= '/' component = {HomePage} />
          <Route  path= '/shop' component = {ShopPage} />
          <Route exact path= '/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SigInAndSignUpPage />) } />
  
        </Switch>
      </div>
    );
  }
 
}

const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
