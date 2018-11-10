import React, { Component } from 'react'
import './Dropdown.css'
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

class Dropdown extends Component {
    constructor(){
        super()
        this.state = {
            slidesShow: 4
        }
    }
    componentDidMount(){
        if(this.props.images.length < 4){
            this.setState({
                slidesShow: this.props.images.length
            })
        }
    }


    render(){
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: this.state.slidesShow,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
          };
        return(
            <div className="Dropdown-main" id={this.props.id} onMouseEnter={()=>this.props.expand()} onMouseLeave={()=>this.props.shrink()} >
                <div className="Dropdown-category">
                    <h2>BY CATEGORY</h2>
                    <ul>
                        {this.props.listItems.map((item,i) => {
                            return (
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="Dropdown-carousel" style={{width: `${this.props.images.length < 4 ? "50%" : "70%"}`,right: `${this.props.images.length < 4 ? "25%": "100px"}`}}>
                    <Slider {...settings} style={{backgroundColor:"pink"}}>
                        {/* <div className="slide-container"><div><img src={require('../Assets/carousel-newArrivals.jpg')}/></div></div>
                        <div className="slide-container"><div><img src={require('../Assets/carousel-newArrivals.jpg')}/></div></div>
                        <div className="slide-container"><div><img src={require('../Assets/carousel-newArrivals.jpg')}/></div></div>
                        <div className="slide-container"><div><img src={require('../Assets/carousel-newArrivals.jpg')}/></div></div>
                        <div className="slide-container"><div><img src={require('../Assets/carousel-newArrivals.jpg')}/></div></div> */}
                        {this.props.images.map((image,i)=>{
                            return (
                                <div className="slide-container">
                                    <div>
                                        <img src={image.image} />
                                        <button>{image.text}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        )
    }
} export default Dropdown