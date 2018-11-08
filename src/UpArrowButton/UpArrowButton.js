import React, {Component} from 'react'
import './UpArrowButton.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp} from '@fortawesome/free-solid-svg-icons'
import smoothScroll from 'smoothscroll'


library.add(faAngleUp)

class UpArrowButton extends Component {
    constructor(){
        super()
        this.state = {
            chatOpen: false,
            screenPosition: 0
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", e => {
             this.setState({
                 screenPosition: e.path[1].pageYOffset
             })
        });
      }

    openChat(){
        this.setState({
            chatOpen: !this.state.chatOpen
        })
    }

    render(){
        return(
            <div className={this.state.screenPosition > 300 ?"UpArrowButton-main" : "UpArrowButton-main hidden" } onClick={()=>smoothScroll(0)}>
                <FontAwesomeIcon icon="angle-up" color="#d79c5c" size="3x"/>
            </div>
        )
    }
} export default UpArrowButton