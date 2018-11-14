import React , { Component } from 'react'
import './MobileSignUpNow.css'

class MobileSignUpNow extends Component {

    render(){
        return (
            <div className="MobileSignUpNow-main">
                <div style={{left:"0px", paddingBottom: "0px", paddingTop: "0px"}} className="SignUpNow-left">
                    <span style={{fontSize: "45px"}}>ROOLEE</span>
                    <span style={{color: "#d89c56", fontSize:"25px", fontStyle:'italic', fontFamily: 'Time'}}>INSIDER</span>
                </div>
                <div className="MobileSignUpNow-p-div">
                    <p>Sign up now + you'll receive a code</p>
                    <p>for 10% Off your next purchase</p>
                    <p>You'll LOVE being in the know!</p>
                </div>
                <input placeholder="EMAIL"/>
                <button>SUBSCRIBE</button>
            </div>
        )
    }
} export default MobileSignUpNow