import React from 'react'
import "./SectionBreak.css"

export default function SectionBreak(props){
    return (
        <div className="SectionBreak-main">
            <p className="SectionBreak-lineOne">{props.lineOne}</p>
            <p className="SectionBreak-lineTwo">{props.lineTwo}</p>
        </div>
    )
}