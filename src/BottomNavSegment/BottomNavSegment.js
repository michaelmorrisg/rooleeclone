import React from 'react'

export default function BottomNavSegment(props){

    return(
        <div>
            <div>{props.category}</div>
            <div>
                <ul>
                    {props.list.map((item, i) => {
                        return (
                            <li key={i}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}