import React, { Component } from "react";

function SocialItem(props) {
        return (
            <div>
                <h5>SocialItem {props.media}</h5>
                <img src={props.img} alt={`icon of ${props.media}`}/>
            </div>
        );
}
export default SocialItem;