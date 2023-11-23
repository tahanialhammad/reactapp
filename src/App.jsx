import React, { Component } from "react"; //use class component instead of function
import logo from "./logo.svg"; //later i waint to use my logo
import "./App.css";
import Test from "./components/Test";
import Social from "./components/Social";
import Team from "./components/Team";
import Header from "./components/Header";
import State from "./components/State";
import TeamState from "./components/TeamState";
import Footer from "./components/Footer";
import Event from "./components/Event";
import Products from "./components/Products";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

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
        <Header logo="React AppS" />

        <div class="container mx-auto">
          <Products />
          <State />
          <Team />
          <Test />
          {reactMethod}
          {siteInfo}
          <TeamState />
          <p>simple event listener</p>
          <Counter />
          <Event />
          {/* https://laracasts.com/series/beginning-react/episodes/3 */}
          <Todo />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
