import React from 'react'
import './MobileCategories.css'

export default function MobileCategories(){
    return(
        <div className="MobileCategories-main">
            <div>
                <button>NEW ARRIVALS</button>
                <button>DRESSES</button>
            </div>
            <div>
                <button>TOPS</button>
                <button>SHOES</button>
            </div>
        </div>
    )
}