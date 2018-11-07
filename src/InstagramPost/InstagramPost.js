import React, {Component} from 'react'
import './InstagramPost.css'

class InstagramPost extends Component{

    render(){
        return (
            <div className="InstagramPost-main" style={{backgroundImage: `url(${this.props.image})`}}>
                {/* <img src={this.props.image} /> */}
            </div>
        )
    }
} export default InstagramPost