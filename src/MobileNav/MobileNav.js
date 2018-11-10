import React, {Component} from 'react'
import './MobileNav.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faSearch, faBars)

class MobileNav extends Component {


    render(){
        return(
            <div className="MobileNav-main">
                <div className="MobileNav-item">
                    <div><p>Menu</p></div>
                    <div style={{marginRight: "10px"}}><FontAwesomeIcon icon="bars" color="black"/></div>
                </div>
                <div className="MobileNav-item">
                    <div><p>Search</p></div>
                    <div style={{marginRight: "8px"}}><FontAwesomeIcon icon="search" color="black"/></div>
                </div>
                <div>sign in</div>
                <div className="MobileNav-item">
                    <div>My Cart</div>
                    <div><FontAwesomeIcon icon="shopping-cart" color="black"/></div>
                </div>
            </div>
        )
    }
} export default MobileNav