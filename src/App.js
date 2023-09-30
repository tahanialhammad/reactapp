import React, { Component } from "react";
import logo from "./logo.svg"; //later i waint to use my logo
import "./App.css";
import Todos from "./components/Todos"
import Social from './components/Social'
import Team from "./components/Team";
import Header from "./components/Header";

class App extends Component {
  render() {
    return ( 
      <div>
        <Header />
        <Team />
        <Todos />
        <Social />
      </div>
    );
  }
}

export default App;
