import React, { Component } from "react"; //use class component instead of function 
import logo from "./logo.svg"; //later i waint to use my logo
import "./App.css";
import Todos from "./components/Todos"
import Social from './components/Social'
import Team from "./components/Team";
import Header from "./components/Header";

// was class App extends React.Component {...}
class App extends Component {
  method(pram){
    return <h3>react method with: {pram}</h3>
  }

  render() {
    const siteInfo = 'Copy right for React App'; //for varblie
    const reactMethod = this.method('pramters')

    // render is a method
    return ( 
      <div>
        {/* props in class component */}
        <Header logo="React AppS" />
        <Team />
        <Todos />
        <Social />
        {reactMethod}
        {siteInfo}
      </div>
    );
  }
}

export default App;
