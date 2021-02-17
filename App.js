import React, { Component } from 'react';
import './App.css';
import Counter from './components/Counter'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import FunctionClick from './components/FunctionClick'
import CLassClick from './components/ClassClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting1'
import NameList from './components/NameList'
import Props from './components/Props'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'



class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Stylesheet primary={true}/> */}
        <Inline/>
        {/* <Props name="Ayush Singh"><p>This is paragraph.</p></Props> */}
        {/* <NameList/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <Counter /> */}
        {/* <Greet name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Dr. Banner" heroName="The Hulk"/> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <ClassClick/> */}
      </div>
    )
  }
}

export default App;
