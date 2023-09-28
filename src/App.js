import React, { Component } from "react";
import logo from "./logo.svg"; //later i waint to use my logo
import "./App.css";
import Todos from "./components/Todos"

class App extends Component {
  render() {
    return ( 
        <Todos />
    );
  }
}

export default App;
