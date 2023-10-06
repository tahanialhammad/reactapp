import React from "react";

function SocialItem(props) {
        return (
            <div>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <img src={props.img} width={'25px'} alt={`icon of ${props.media}`}/>
                </a>
            </div>
        );
}
export default SocialItem;