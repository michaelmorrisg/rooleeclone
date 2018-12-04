import React, {Component} from 'react'
import "./MobileMenu.css"

class MobileMenu extends Component {


    render(){

        return(
            <div className="MobileMenu-main" style={{display: this.props.expanded ? "block" : "none"}}>
                <p><a href="">NEW</a></p>
                <p><a href="">CLOTHING</a></p>
                <p><a href="">SHOES + ACCESSORIES</a></p>
                <p><a href="">OUTFITS</a></p>
                <p><a href="">MOM</a></p>
                <p><a href="">KIDS</a></p>
                <p><a href="">HOUSE + HOME</a></p>
                <p><a href="">GIFTS</a></p>
                <p><a href="">FAQS</a></p>
            </div>
        )
    }
}
export default MobileMenu