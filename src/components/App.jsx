import React, { Component } from "react"; //use class component instead of function
import logo from "../logo.svg"; //later i waint to use my logo
import "../App.css";
import Test from "./Test";
import Social from "./Social";
import Team from "./Team";

import State from "./State";
import TeamState from "./TeamState";
import Footer from "./Footer";
import Event from "./Event";
import Products from "./Products";
import Counter from "./Counter";
import Todo from "./Todo";
import TodoRef from "./TodoRef";

// was class App extends React.Component {...}
class App extends Component {
  // constructor(){
  //   super()
  // }

  method(pram) {
    return <h3>react method with: {pram}</h3>;
  }

  render() {
    const siteInfo = "Copy right for React App"; //for varblie
    const reactMethod = this.method("pramters");

    // render is a method
    return (
      <div>
        {/* props in class component */}
 

        <div className='container mx-auto px-4'>
           <State />
          <hr />
          <Products />
          <hr />
          <Team />
          <hr />
          <Test />
          <hr />
          {reactMethod}
          <hr />
          {siteInfo}
          <hr />
          <TeamState />
          <hr />
          <p>simple event listener</p>
          <Counter />
          <hr />
          <Event />
          <hr />
          {/* https://laracasts.com/series/beginning-react/episodes/3 */}
          {/* <Todo /> */}
          <TodoRef />
          <hr />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
