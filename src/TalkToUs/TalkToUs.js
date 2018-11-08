import React from 'react'
import './TalkToUs.css'

export default function TalkToUs(){
    return(
        <div className="TalkToUs-main">
            <div>
                <div>
                    <div>
                        <img src={require('../Assets/left_heart.png')}/>
                    </div>
                    <div>
                        <span style={{fontSize:"14px", fontFamily:"Times", fontStyle: "italic"}}>have questions?</span>
                        <span>TALK TO US <a href="">HERE</a></span>
                        <span>or email</span>
                        <span style={{fontStyle: "normal"}}><a href="">contact@roolee.com</a></span>
                    </div>
                </div>
            </div>
            <div>
                <span style={{fontFamily: "Times", fontSize: "20px", fontStyle: "italic"}}>we are always here</span>
                <span style={{fontSize: "28px", letterSpacing: "2px"}}>TO HELP YOU</span>
            </div>
            <div>
                <div>
                <div>
                    <span style={{fontSize:"14px", fontFamily:"Times", fontStyle: "italic"}}>come visit us!</span>
                    <span style={{fontSize: "20px"}}>165 W 1600 N #110</span>
                    <span style={{fontSize: "16px"}}>LOGAN, UT 84341</span>
                </div>
                <div>
                    <img src={require('../Assets/right_heart.png')}/>
                </div>
                </div>
            </div>
        </div>
    )
}