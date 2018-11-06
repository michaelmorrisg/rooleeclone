import React, {Component} from 'react'
import './ChatBubble.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faComment, faTimes)

class ChatBubble extends Component {
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
            <div className="ChatBubble-main" onClick={()=>this.openChat()}>
                {this.state.chatOpen ? <FontAwesomeIcon icon="times" color="white" size="2x"/> : <FontAwesomeIcon icon="comment" color="white" size="2x"/>}
            </div>
        )
    }
} export default ChatBubble