import React, {Component} from 'react'
import "./MobileMenu.css"

class MobileMenu extends Component {


    render(){
        return(
            <div className="MobileMenu-main" style={{display: this.props.expanded ? "block" : "none"}}>Menu</div>
        )
    }
}
export default MobileMenu