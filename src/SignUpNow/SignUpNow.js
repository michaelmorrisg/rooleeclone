import React from 'react'
import "./SignUpNow.css"

export default function SignUpNow(){

    return (
        <div className="SignUpNow-main">
            <div className="SignUpNow-left">
                <span style={{fontSize: "45px"}}>ROOLEE</span>
                <span style={{color: "#d89c56", fontSize:"25px", fontStyle:'italic', fontFamily: 'Time'}}>INSIDER</span>
            </div>
            <div className="SignUpNow-middle">
                <span>Sign up now + you'll receive a credit for</span>
                <span style={{fontSize: "45px", lineHeight: "1", fontFamily: "Raleway", paddingTop: "10px", paddingBottom: "10px", fontWeight: "600", fontStyle: "normal"}}>10% Off your <br/> next purchase</span>
                <span>You'll LOVE being in the know!</span>
            </div>
            <div className="SignUpNow-right">
                <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}