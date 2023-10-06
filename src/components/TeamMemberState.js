import React, { Component } from "react";
class TeamMember extends Component {
  render(){
    return (
      // was {this.props.phone } befor using state and constructor
      <div className={`lg:flex ${this.props.phone ? 'bg-slate-100' : ''} `}>
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-64"
          src={this.props.img}
          alt=""
        />
        <div className="flex flex-col justify-between py-6 lg:mx-6">
          <a
            href="#"
            className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
          >
            TeamMember {this.props.name}
          </a>
  
          <span className="text-sm text-gray-500 dark:text-gray-300">
            Emai: {this.props.email}
          </span>
        </div>
      </div>
    );
  }

}

export default TeamMember;
