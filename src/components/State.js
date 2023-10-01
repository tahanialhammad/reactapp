import React, { Component } from "react";

class State extends Component {
    constructor(){
        super()
        this.state = {answer: "yes"}
      }
    
    
    render() {
        return (
            <div>
                <h1>State (instead of props) with constructor in app.js </h1>
                <p>Do you love me ? {this.state.answer}</p>
              
            </div>
        );
    }
}
export default State;