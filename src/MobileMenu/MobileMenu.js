import React, {Component} from 'react'
import "./MobileMenu.css"

class MobileMenu extends Component {
    constructor(){
        super()
        this.state = {
            clothing: false,
            shoes: false,
            mom: false,
            kids: false,
            home: false,
            gifts: false
        }
    }

    expandClothing(){
        this.setState({
            clothing: !this.state.clothing
        })
    }
    expandShoes(){
        this.setState({
            shoes: !this.state.shoes
        })
    }
    expandMom(){
        this.setState({
            mom: !this.state.mom
        })
    }
    expandKids(){
        this.setState({
            kids: !this.state.kids
        })
    }
    expandHome(){
        this.setState({
            home: !this.state.home
        })
    }
    expandGifts(){
        this.setState({
            gifts: !this.state.gifts
        })
    }


    render(){

        return(
            <div className="MobileMenu-main" style={{display: this.props.expanded ? "block" : "none"}}>
                <p><a href="">NEW</a></p>
                <p>CLOTHING</p>
                <ul>
                    <li>New Arrivals</li>
                    <li>Tops</li>
                    <li>Bottoms</li>
                    <li>Dresses</li>
                    <li>Jumpsuits + Rompers</li>
                    <li>Outerwear</li>
                    <li>Plus</li>
                    <li>Swim</li>
                    <li>Sale</li>
                    <li>Back in Stock</li>
                </ul>
                <p>SHOES + ACCESSORIES</p>
                <ul>
                    <li>New Arrivals</li>
                    <li>Bandanas + Hair</li>
                    <li>Shoes</li>
                    <li>Hats</li>
                    <li>Jewelry</li>
                    <li>Purses + Bags</li>
                    <li>Watches</li>
                    <li>Other</li>
                </ul>
                <p><a href="">OUTFITS</a></p>
                <p>MOM</p>
                <ul>
                    <li>ROOLEE MOM</li>
                    <li>Nursing Friendly</li>
                    <li>Accessories</li>
                </ul>
                <p>KIDS</p>
                <ul>
                    <li>New Kids</li>
                    <li>Boys</li>
                    <li>Girls</li>
                    <li>Bedding</li>
                </ul>
                <p>HOUSE + HOME</p>
                <ul>
                    <li>New Arrivals</li>
                    <li>Home Decor</li>
                    <li>Paper + Party</li>
                </ul>
                <p>GIFTS</p>
                <ul>
                    <li>Gift Cards</li>
                    <li>Womens Gifts</li>
                    <li>Mens Gifts</li>
                    <li>Kids Gifts</li>
                </ul>
                <p><a href="">FAQS</a></p>
            </div>
        )
    }
}
export default MobileMenu