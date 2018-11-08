import React from 'react'
import './Footer.css'

export default function Footer(){
    return(
        <div className="Footer-main">
            <div>
                <h5>SHOP CATEGORIES</h5>
                <ul>
                    <li>ALL</li>
                    <li>NEW</li>
                    <li>CLOTHING</li>
                    <li>SHOES + ACCESSORIES</li>
                    <li>OUTFITS</li>
                    <li>MOM</li>
                    <li>KIDS</li>
                    <li>HOUSE + HOME</li>
                    <li>SALE</li>
                </ul>
            </div>
            <div>
                <h5>VISIT ROOLEE</h5>
                <ul>
                    <li>165 W 1600 N</li>
                    <li>#110</li>
                    <li>LOGAN, UT 84341</li>
                </ul>
                <br/>
                <h5>STORE HOURS</h5>
                <ul>
                    <li>M-F 10-7</li>
                    <li>SAT 10-7</li>
                </ul>
            </div>
            <div className="Footer-social-main">
                <h6 style={{fontFamily: "Times", letterSpacing: "2px", fontSize: "1.133em", fontWeight: "900", marginBottom: "15px"}}>LET'S BE FRIENDS</h6>
                <div className="Footer-social-div">
                    <img src={require("../Assets/instabubble.png")}/>
                    <img src={require("../Assets/facebubble.png")}/>
                    <img src={require("../Assets/pinbubble.png")}/>
                    <img src={require("../Assets/mailbubble.png")}/>
                </div>
            </div>
            <div>
                <h5>CUSTOMER CARE</h5>
                <ul>
                    <li>CONTACT US</li>
                    <li>FAQs</li>
                    <li>RETURN POLICY</li>
                    <li>SHIPPING & DELIVERY</li>
                    <li>DEALS + NEWS</li>
                    <li>FIND YOUR SIZE</li>
                    <li>OUR MODELS</li>
                    <li>COLLABORATE</li>
                    <li>WHOLESALE</li>
                </ul>
            </div>
            <div>
                <h5>ABOUT US</h5>
                <ul>
                    <li>ABOUT US</li>
                    <li>BLOG</li>
                </ul>
            </div>
        </div>
    )
}