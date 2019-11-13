import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

function App() {

  return (
    <div>
      <Switch>
        <Route exact path= '/' component = {HomePage} />
        <Route exact path= '/topics' component = {TopicsList} />
        <Route path='/topics/:topicId' component ={TopicDetail} />
      </Switch>
    </div>
  );
}
const TopicDetail = () =>{
  return(
    <div>Topic detail</div>
  )
}
const TopicsList = () =>{
  return(
    <div>Topic</div>
  )
}

export default App;
