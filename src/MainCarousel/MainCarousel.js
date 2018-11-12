import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MainCarousel.css'
import bells from '../Assets/bells.jpg'
import main from '../Assets/main-text.jpg'
import buffalo from '../Assets/buffalo.jpg'


class MainCarousel extends Component {
    constructor(){
        super()
        this.state = {
            images : [bells,main,buffalo],
            currentSlide : 0
        }
    }

    advanceSlide(){
        if(this.state.currentSlide < this.state.images.length -1){
            this.setState({
                currentSlide : this.state.currentSlide + 1
            })
        } else {
            this.setState({
                currentSlide: 0
            })
        }
    }
    regressSlide(){
        if(this.state.currentSlide > 0){
            this.setState({
                currentSlide : this.state.currentSlide - 1
            })
        } else {
            this.setState({
                currentSlide : this.state.images.length -1
            })
        }
    }

    render(){
        return(
            <div className="MainCarousel-main">
                <div className="MainCarousel-carousel-arrow left" onClick={()=>this.advanceSlide()}>
                    <img src={require('../Assets/left.png')}/>
                </div>
                <div className="white-background"></div>
                <img src={this.state.images[this.state.currentSlide]} className="MainCarousel-image" />
                <div className="MainCarousel-carousel-arrow right" onClick={()=>this.advanceSlide()}>
                    <img src={require('../Assets/right.png')}/>
                </div>
            </div>
        )
    }
} export default MainCarousel