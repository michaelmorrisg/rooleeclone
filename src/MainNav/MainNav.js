import React, {Component} from 'react'
import './MainNav.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faAngleDown)

class MainNav extends Component {
    constructor(){
        super()
        this.state = {
            screenWidth: 0
        }
    }

    componentDidMount() {
        window.addEventListener("resize", e => {
             this.setState({
                 screenWidth: window.innerWidth
             })
        });
      }


    render(){
        console.log(this.state.screenWidth)
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
                            <li style={{paddingLeft: "0px"}}>NEW</li>
                            <li onMouseEnter={()=>this.props.expandClothing()} onMouseLeave={()=>this.props.shrinkClothing()}>CLOTHING</li>
                            <li onMouseEnter={()=>this.props.expandShoes()} onMouseLeave={()=>this.props.shrinkShoes()}>SHOES + ACCESSORIES</li>
                            <li>OUTFITS</li>
                            <li onMouseEnter={()=>this.props.expandMom()} onMouseLeave={()=>this.props.shrinkMom()}>MOM</li>
                            <li onMouseEnter={()=>this.props.expandKids()} onMouseLeave={()=>this.props.shrinkKids()}>KIDS</li>
                            <li onMouseEnter={()=>this.props.expandHome()} onMouseLeave={()=>this.props.shrinkHome()}>HOUSE + HOME</li>
                            <li>SALE</li>
                            <li onMouseEnter={()=>this.props.expandGifts()} onMouseLeave={()=>this.props.shrinkGifts()}>GIFTS</li>
                            <li>FAQS</li>
                            <li>MORE</li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
} export default MainNav