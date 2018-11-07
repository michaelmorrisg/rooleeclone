import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MainCarousel.css'

class MainCarousel extends Component {

    render(){
        return(
            <div className="MainCarousel-main">
                <img src={require("../Assets/main-text.jpg")} />
            </div>
        )
    }
} export default MainCarousel