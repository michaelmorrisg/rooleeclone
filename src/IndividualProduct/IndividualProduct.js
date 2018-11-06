import React from 'react'
import './IndividualProduct.css'

export default function IndividualProduct(props){

    return(
        <div className="IndividualProduct-main">
            <div className="IndividualProduct-image" style={{backgroundImage: `url(${props.image})`}}></div>
            <p className="IndividualProduct-title">{props.title}</p>
            <a href="">view details</a>
        </div>
    )
}