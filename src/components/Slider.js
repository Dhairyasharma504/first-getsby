import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components"
const Slick=styled.div`
`

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <Slick>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />"
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />
          </div>
          <div>
          <img src="https://colorlib.com/preview/theme/sneaky/img/home/featured1.png" />
          </div>
        </Slider>
      </Slick>
    );
  }
}