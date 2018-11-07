import React, {Component} from 'react'
import './UpArrowButton.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp} from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp)

class UpArrowButton extends Component {
    constructor(){
        super()
        this.state = {
            chatOpen: false
        }
    }

    openChat(){
        this.setState({
            chatOpen: !this.state.chatOpen
        })
    }

    render(){
        return(
            <div className="UpArrowButton-main" onClick={()=>this.openChat()}>
                <FontAwesomeIcon icon="angle-up" color="#d79c5c" size="3x"/>
            </div>
        )
    }
} export default UpArrowButton