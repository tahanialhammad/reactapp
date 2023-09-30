import React, { Component } from "react";
import SocialItem from './SocialItem'
class Social extends Component {
    render() {
        return (
            <div>sociall
                <SocialItem media = "Facebook" img="https://picsum.photos/50" />
                <SocialItem media = "Instagram" img="https://picsum.photos/51" />
                <SocialItem media = "LinedIn" img="https://picsum.photos/52" />
            </div>
        );
    }
}
export default Social;