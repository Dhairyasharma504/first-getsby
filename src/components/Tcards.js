import React, { Component } from "react"
import Slider from "react-slick"
import Tpcards from "../components/Tpcards"

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    }
    return (
      <div>
        <Slider {...settings}>
          <div>
            <section className="section">
              <div className="columns">
                <div className="column ">
                  <Tpcards
                    img="https://colorlib.com/preview/theme/tour/images/hotel-2.jpg"
                    title="Hotel Edison"
                    subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                  />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="section">
              <div className="columns">
                <div className="column ">
                  <Tpcards
                    img="https://colorlib.com/preview/theme/tour/images/hotel-3.jpg"
                    title="Hotel Edison"
                    subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                  />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="section">
              <div className="columns">
                <div className="column ">
                  <Tpcards
                    img="https://colorlib.com/preview/theme/tour/images/hotel-1.jpg"
                    title="Hotel Edison"
                    subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia. "
                  />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="section">
              <div className="columns">
                <div className="column ">
                  <Tpcards
                    img="https://colorlib.com/preview/theme/square/images/image_1.jpg"
                    title="Hotel Edison"
                    subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                  />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="section">
              <div className="columns">
                <div className="column ">
                  <Tpcards
                    img="https://colorlib.com/preview/theme/tour/images/tour-2.jpg"
                    title="Hotel Edison"
                    subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia."
                  />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="section">
              <div className="columns">
                <div className="column ">
                  <Tpcards
                    img="https://colorlib.com/preview/theme/tour/images/hotel-1.jpg"
                    title="Hotel Edison"
                    subtitle="A small river named Duden flows by their place and supplies it with the necessary regelialia. "
                  />
                </div>
              </div>
            </section>
          </div>
        </Slider>
      </div>
    )
  }
}
