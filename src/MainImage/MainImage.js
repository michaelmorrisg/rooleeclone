import React from 'react'
import './MainImage.css'

export default function MainImage(props){

    return(
        <div className="MainImage-main">
            <img src={props.image} />
        </div>
    )
}