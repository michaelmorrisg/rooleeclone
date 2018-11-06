import React from 'react'
import './MainImage.css'
import image from '../Assets/watches.jpg'

export default function MainImage(){

    return(
        <div className="MainImage-main" style={{backgroundImage: `url(${image})`}}>

        </div>
    )
}