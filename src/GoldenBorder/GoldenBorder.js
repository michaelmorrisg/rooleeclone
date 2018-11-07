import React from 'react'
import './GoldenBorder.css'

export default function GoldenBorder(props){
    return(
        <div className="GoldenBorder-main" style={props.full ? {width:'100%'} : {}}></div>
    )
}