import React, { Component } from "react";

class Event extends Component{
    constructor(){
        super();
        this.state = {
            number : 0,
        }
        this.eventHandler = this.eventHandler.bind(this);
    }

    //event handler
    eventHandler(){
        // this.setState(function(prevState){
        //     return {
        //         number : prevState.number + 1
        //     }
        // })

        this.setState(prevState => {
            return {
                number : prevState.number + 1
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Evvents</h1>
                <h1>{this.state.number}</h1>
                <button onClick={this.eventHandler}>Click me</button>
            </div>
        )
    }
}

export default Event;