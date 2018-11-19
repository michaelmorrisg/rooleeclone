import React, {Component} from 'react'
import './MainNav.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import MoreDropDown from '../MoreDropDown/MoreDropDown'

library.add(faShoppingCart, faAngleDown)

class MainNav extends Component {
    constructor(){
        super()
        this.state = {
            screenWidth: window.innerWidth
        }
    }


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
                            <li style={{paddingLeft: "0px", width: "30px",minWidth: "30px"}}>NEW</li>
                            <li style={{width: "68px",minWidth: "68px"}} onMouseEnter={()=>this.props.expandClothing()} onMouseLeave={()=>this.props.shrinkClothing()}>CLOTHING</li>
                            <li style={{width: "154px",minWidth: "154px"}} onMouseEnter={()=>this.props.expandShoes()} onMouseLeave={()=>this.props.shrinkShoes()}>SHOES + ACCESSORIES</li>
                            <li style={{width: "56px",minWidth: "56px"}}>OUTFITS</li>
                            <li style={{width: "33px",minWidth: "33px"}} onMouseEnter={()=>this.props.expandMom()} onMouseLeave={()=>this.props.shrinkMom()}>MOM</li>
                            <li style={{width: "30px",minWidth: "30px"}} onMouseEnter={()=>this.props.expandKids()} onMouseLeave={()=>this.props.shrinkKids()}>KIDS</li>
                            <li className={this.props.screenWidth < 844 ? "MainNav-hidden" : ''} style={{width: "104px",minWidth: "104px"}} onMouseEnter={()=>this.props.expandHome()} onMouseLeave={()=>this.props.shrinkHome()}>HOUSE + HOME</li>
                            <li className={this.props.screenWidth < 922 ? "MainNav-hidden" : ''}>SALE</li>
                            <li className={this.props.screenWidth < 1002 ? "MainNav-hidden" : ''} onMouseEnter={()=>this.props.expandGifts()} onMouseLeave={()=>this.props.shrinkGifts()}>GIFTS</li>
                            <li className={this.props.screenWidth < 1080 ? "MainNav-hidden" : ''}>FAQS</li>
                            <li onMouseEnter={()=>this.props.expandMore()} onMouseLeave={()=>this.props.shrinkMore()}>MORE</li>
                        </ul>
                        <MoreDropDown moreExpanded={this.props.moreExpanded} screenWidth={this.props.screenWidth}/>
                    </nav>
                </div>
            </div>
        )
    }
} export default MainNav