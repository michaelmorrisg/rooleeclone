import React, {Component} from 'react'
import './InstagramPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

class InstagramPost extends Component{
    constructor(){
        super()
        this.state = {
            hover: false
        }
    }

    instaFilter(){
        this.setState({
            hover: true
        })
    }
    instaLeave(){
        this.setState({
            hover: false
        })
    }

    render(){
        return (
            <div onMouseEnter={()=>this.instaFilter()} onMouseLeave={()=>this.instaLeave()} className="InstagramPost-main" style={{backgroundImage: `url(${this.props.image})`}}>
                <div  className={this.state.hover ? "Instagram-hoverfilter" : "hidden"}>
                    <FontAwesomeIcon icon={faInstagram} color="white" size="2x"/>
                </div>
            </div>
        )
    }
} export default InstagramPost