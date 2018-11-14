import React from 'react'
import "./SectionBreak.css"

export default function SectionBreak(props){
    return (
        <div className="SectionBreak-main" id={props.id ? props.id : ''}>
            <h4 className="SectionBreak-lineOne">{props.lineOne}</h4>
            <h2 className="SectionBreak-lineTwo">{props.lineTwo}</h2>
        </div>
    )
}