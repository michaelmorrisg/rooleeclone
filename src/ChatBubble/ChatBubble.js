import React, {Component} from 'react'
import './ChatBubble.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment} from '@fortawesome/free-solid-svg-icons'

library.add(faComment)

class ChatBubble extends Component {

    render(){
        return(
            <div className="ChatBubble-main">
                <FontAwesomeIcon icon="comment" color="white" size="2x"/>
            </div>
        )
    }
} export default ChatBubble