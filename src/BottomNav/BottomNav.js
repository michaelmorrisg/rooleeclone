import React, {Component} from 'react'
import BottomNavSegment from '../BottomNavSegment/BottomNavSegment'
import "./BottomNav.css"

class BottomNav extends Component {


    render(){
        return (
            <div className="BottomNav-main">
                <BottomNavSegment category="SHOP CATEGORIES" list={["ALL","NEW","CLOTHING","SHOES + ACCESSORIES","OUTFITS","MOM","KIDS","HOUSE + HOME","SALE"]} height="250px"/>
                <BottomNavSegment category="CUSTOMER CARE" list={["CONTACT US","FAQs","RETURN POLICY","SHIPPING + DELIVERY","DEALS + NEWS","FIND YOUR SIZE","OUR MODELS","COLLABORATE","WHOLESALE"]} height="250px"/>
                <BottomNavSegment category="ABOUT US" list={["ABOUT US","BLOG","GIVEAWAY"]} height="100px"/>
            </div>
        )
    }
}
export default BottomNav