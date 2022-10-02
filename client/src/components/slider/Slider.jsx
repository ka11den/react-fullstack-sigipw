import React, { Component } from "react";
import Slider from "react-slick";
import slider1 from '../../img/slider1.png'
import slider2 from '../../img/slider2.png'
import slider from '../../img/slider.png'
import './slider.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slideer1">
        <Slider {...settings}>
          <div>
            <img className="slider__img" src={slider}/>
          </div>
          <div>
            <img className="slider__img"  src={slider1}/>
          </div>
          <div>
            <img className="slider__img"  src={slider2}/>
          </div>
        </Slider>
      </div>
    );
  }
}