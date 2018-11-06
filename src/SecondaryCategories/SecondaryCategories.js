import React from 'react'
import './SecondaryCategories.css'
import kids from '../Assets/kids.jpg'
import home from '../Assets/home.jpg'

export default function SecondaryCategories(){
    return (
        <div className="SecondaryCategories-main">
            <div style={{backgroundImage: `url(${kids})`}}>
                <button>SHOP KIDS</button>
            </div>
            <div style={{backgroundImage: `url(${home})`}}>
                <button>SHOP HOME DECOR</button>
            </div>
        </div>
    )
}