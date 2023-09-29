import React, { Component } from "react";

class Todos extends Component {
  render() {
    // style in jsx
    const style = {
      color: "pink",
      backgroundColor: "black",
    };
    // if in jsx
    const client = "Programmer";
    const title_desibger = "Desing";
    const title_programmer = "Programming";
    //Or
    const title = {
      desibger: "Desing",
      programmer: "Programming",
    };

    const info ={
      name : "Tahani",
      job : "Programmer"
    }

    return (
      <div>
        <h1
          style={{
            color: "red",
            fontSize: "40px",
            backgroundColor: "black",
          }}
        >
          React Todos with inline style
        </h1>
        <p style={style}> and internal style</p>
        <h2>
          {client === "Programmer" ? title_programmer : title_desibger}  is my life
        </h2>
        <p>Or with object {client === "Programmer" ? title.programmer : title.desibger} is my life </p>
        <h2>Iam {info.name + " my job is " + info.job} </h2>
        <h2>Or Iam {`${info.name}  my job is ${info.job}` } </h2>
      </div>
    );
  }
}

export default Todos;
