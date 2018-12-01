import React, {Component} from 'react'
import BottomNavSegment from '../BottomNavSegment/BottomNavSegment'

class BottomNav extends Component {


    render(){
        return (
            <div>
                <BottomNavSegment category="SHOP CATEGORIES" list={["ALL","NEW","CLOTHING","SHOES + ACCESSORIES","OUTFITS","MOM","KIDS","HOUSE + HOME","SALE"]}/>
                <BottomNavSegment category="CUSTOMER CARE" list={["CONTACT US","FAQs","RETURN POLICY","SHIPPING + DELIVERY","DEALS + NEWS","FIND YOUR SIZE","OUR MODELS","COLLABORATE","WHOLESALE"]}/>
                <BottomNavSegment category="ABOUT US" list={["ABOUT US","BLOG","GIVEAWAY"]}/>
            </div>
        )
    }
}
export default BottomNav