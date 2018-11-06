import React, {Component} from 'react'
import './MainNav.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faAngleDown)

class MainNav extends Component {


    render(){
        return(
            <div className="MainNav-main">
                <div className="MainNav-row1">
                    <p><a href="">sign in</a><span>or</span><a href="">create an account</a></p>
                    <p>My Cart</p>
                    <FontAwesomeIcon id="shopping-cart-icon" icon="shopping-cart" color="black"/>
                </div>
                <div className="MainNav-row2">
                    <p>CLONE-EE</p>
                </div>
                <div className="MainNav-row3">
                    <nav>
                        <ul>
                            <li>NEW</li>
                            <li>CLOTHING</li>
                            <li>SHOES + ACCESSORIES</li>
                            <li>OUTFITS</li>
                            <li>MOM</li>
                            <li>KIDS</li>
                            <li>HOUSE + HOME</li>
                            <li>SALE</li>
                            <li>GIFTS</li>
                            <li>FAQS</li>
                            <li>MORE</li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
} export default MainNav