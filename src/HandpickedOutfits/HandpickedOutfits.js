import React from 'react'
import './HandpickedOutfits.css'
import IndividualProduct from '../IndividualProduct/IndividualProduct'
import apple from '../Assets/apple.jpg'
import bestOfMe from '../Assets/best_of_me.jpg'
import autumnSunshine from '../Assets/autumn_sunshine.jpg'
import dontLookBack from '../Assets/dont_look_back.jpg'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className="MainCarousel-carousel-arrow right"
        style={{position:"absolute", right: "-65px", top: "40%"}}
        onClick={onClick}
      >
      <img style={{width: "50%", height: "auto"}} src={require('../Assets/right.png')}/>
      </div>
    );
  }
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="MainCarousel-carousel-arrow left"
        style={{position:"absolute", left: "-65px", top:"40%"}}
        onClick={onClick}
      >
      <img style={{width: "50%", height: "auto"}} src={require('../Assets/left.png')}/>
      </div>
    );
  }

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