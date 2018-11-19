import React from 'react'
import './MoreDropDown.css'

export default function MoreDropDown(props){
    return(
        <div className="MoreDropDown-main" id={props.moreExpanded ? "MoreDropDown-showing" : "MoreDropDown-hidden"} onMouseEnter={()=>props.expand()} onMouseLeave={()=>props.shrink()} >
            <ul>
                <li className={props.screenWidth > 844 ? "MainNav-hidden" : ''}>HOUSE + HOME</li>
                <li className={props.screenWidth > 922 ? "MainNav-hidden" : ''}>SALE</li>
                <li className={props.screenWidth > 1002 ? "MainNav-hidden" : ''}>GIFTS</li>
                <li className={props.screenWidth > 1080 ? "MainNav-hidden" : ''}>FAQS</li>
            </ul>
        </div>
    )
}