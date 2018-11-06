import React from 'react'
import './HandpickedOutfits.css'
import IndividualProduct from '../IndividualProduct/IndividualProduct'
import apple from '../Assets/apple.jpg'
import bestOfMe from '../Assets/best_of_me.jpg'
import autumnSunshine from '../Assets/autumn_sunshine.jpg'
import dontLookBack from '../Assets/dont_look_back.jpg'

export default function HandpickedOutfits(){
    return (
        <div className="HandpickedOutfits-main">
            <IndividualProduct title="APPLE OF MY EYE OUTFIT" image={apple}/>
            <IndividualProduct title="AUTUMN SUNSHINE OUTFIT" image={autumnSunshine}/>
            <IndividualProduct title="BEST OF ME OUTFIT" image={bestOfMe}/>
            <IndividualProduct title="DON'T LOOK BACK OUTFIT" image={dontLookBack}/>
        </div>
    )
}