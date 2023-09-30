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

    const infoObj ={
      name : "Tahani",
      job : "Programmer"
    }

    return (
      <div>
        <h3
          style={{
            color: "red",
            fontSize: "40px",
            backgroundColor: "black",
          }}
        >
          React Todos with inline style
        </h3>
        <p style={style}> and internal style</p>
        <h2>
          {client === "Programmer" ? title_programmer : title_desibger}  is my life
        </h2>
        <p>Or with object {client === "Programmer" ? title.programmer : title.desibger} is my life </p>
        <h3>Iam {infoObj.name + " my job is " + infoObj.job} </h3>
        <h3>Or Iam {`${infoObj.name}  my job is ${infoObj.job}` } </h3>
      </div>
    );
  }
}

export default Todos;
