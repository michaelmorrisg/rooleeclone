import React from 'react'
import './SecondaryCategories.css'
import kids from '../Assets/kids.jpg'
import home from '../Assets/home.jpg'

export default function SecondaryCategories(){
    return (
        <div className="SecondaryCategories-main">
            <div>
            <img src={kids} />
                <button style={{marginLeft: "-85.5px"}} id="shopKids-button">SHOP KIDS</button>
            </div>
            <div>
            <img src={home}/>
                <button style={{marginLeft: "-136.5px"}}>SHOP HOME DECOR</button>
            </div>
        </div>
    )
}