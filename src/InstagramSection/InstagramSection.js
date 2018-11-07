import React from 'react'
import InstagramPost from '../InstagramPost/InstagramPost'
import './InstagramSection.css'
import insta1 from '../Assets/Insta1.jpg'
import insta2 from '../Assets/Insta2.jpg'
import insta3 from '../Assets/Insta3.jpg'
import insta4 from '../Assets/Insta4.jpg'
import insta5 from '../Assets/Insta5.jpg'

export default function InstagramSection(){
    return (
        <div className="InstagramSection-main">
            <InstagramPost image={insta1}/>
            <InstagramPost image={insta2}/>
            <InstagramPost image={insta3}/>
            <InstagramPost image={insta4}/>
            <InstagramPost image={insta5}/>
        </div>
    )
}