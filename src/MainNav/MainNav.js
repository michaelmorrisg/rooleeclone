import React, {Component} from 'react'
import './MainNav.css'

class MainNav extends Component {


    render(){
        return(
            <div className="MainNav-main">
                <div className="MainNav-row1">
                    <p><a href="">sign in</a> or <a href="">create an account</a></p>
                    <p>My Cart</p>
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