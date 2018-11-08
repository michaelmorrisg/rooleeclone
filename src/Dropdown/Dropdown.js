import React, { Component } from 'react'
import './Dropdown.css'
import Slider from 'react-slick'

class Dropdown extends Component {
    constructor(){
        super()
    }


    render(){
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
                <div className="Dropdown-carousel">
                    <Slider infinite={true} slidesToShow={4} slidesToScroll={1}>
                        <div><img src={require('../Assets/bells.jpg')}/></div>
                        <div><img src={require('../Assets/bells.jpg')}/></div>
                        <div><img src={require('../Assets/bells.jpg')}/></div>
                    </Slider>
                </div>
            </div>
        )
    }
} export default Dropdown