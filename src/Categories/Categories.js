import React from 'react'
import "./Categories.css"

export default function Categories(){
    return(
        <div className="Categories-main">
            <div className="Categories-row1">
                <div className="Categories-row1-left">
                <div>
                <img src={require('../Assets/new-arrivals.jpg')} />
                <button style={{marginLeft: "-108px"}}>NEW ARRIVALS</button>
                </div>
                </div>
                <div className="Categories-row1-right">
                <div>
                <img src={require('../Assets/dresses.jpg')}/>
                <button style={{marginLeft: "-76px"}}>DRESSES</button>
                </div>
                </div>
            </div>
            <div className="Categories-row2">
                <div className="Categories-row2-left">
                <div>
                <img src={require('../Assets/tops.jpg')}/>
                <button style={{marginLeft: "-55px"}}>TOPS</button>
                </div>
                </div>
                <div className="Categories-row2-right">
                <div>
                <img src={require('../Assets/shoes.jpg')}/>
                <button style={{marginLeft: "-64px"}}>SHOES</button>
                </div>
                </div>
            </div>

        </div>
    )
}