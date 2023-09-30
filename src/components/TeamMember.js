import React, { Component } from "react";
function TeamMember(props) {
  return (
    // was {props.teamInfo.email} befor beter way with {temaMembers}
    <div className={`lg:flex ${props.phone ? 'bg-slate-100' : ''} `}>
      <img
        className="object-cover w-full h-56 rounded-lg lg:w-64"
        src={props.img}
        alt=""
      />
      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <a
          href="#"
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
          TeamMember {props.name}
        </a>

        <span className="text-sm text-gray-500 dark:text-gray-300">
          Emai: {props.email}
        </span>
      </div>
    </div>
  );
}

export default TeamMember;
