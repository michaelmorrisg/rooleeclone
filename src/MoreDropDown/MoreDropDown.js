import React from 'react'
import './MoreDropDown.css'

export default function MoreDropDown(props){
    return(
        <div className="MoreDropDown-main" id={props.moreExpanded ? "MoreDropDown-showing" : "MoreDropDown-hidden"}>
            <ul>
                <li className={props.screenWidth > 844 ? "MainNav-hidden" : ''}>HOUSE + HOME</li>
                <li className={props.screenWidth > 922 ? "MainNav-hidden" : ''}>SALE</li>
                <li className={props.screenWidth > 1002 ? "MainNav-hidden" : ''}>GIFTS</li>
                <li className={props.screenWidth > 1080 ? "MainNav-hidden" : ''}>FAQS</li>
                {/* <li className={this.state.screenWidth > 1080 ? "MainNav-hidden" : ''}>KIDS</li> */}
            </ul>
        </div>
    )
}