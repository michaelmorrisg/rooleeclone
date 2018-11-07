import React from 'react'
import './IndividualProduct.css'

export default function IndividualProduct(props){

    return(
        <div className="IndividualProduct-main">
            <img src={props.image} />
            <p className="IndividualProduct-title">{props.title}</p>
            <a href="">view details</a>
        </div>
    )
}