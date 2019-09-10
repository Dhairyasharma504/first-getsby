import React from "react"
import styled from "styled-components"
const Wrapper = styled.div`
  align-self: center;
  .hero {
    background-image: linear-gradient( to bottom, rgba(12, 11, 11, 0.41), rgb(14, 15, 17) ), url(https://colorlib.com/preview/theme/tour/images/cover-img-1.jpg);
      url(https://colorlib.com/preview/theme/tour/images/cover-img-1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 25rem;
  }
  .ww{
    margin: 3rem;
  }
  .aa{
    font-family: cursive;
    font-size: 3rem;
    place-self: center;
  }
  .dd{
    margin: 3rem;
  }
`
const Tbackground = () => (
  <Wrapper>
    <div className="hero">
      <div className="columns">
        <div className="ww column">
          <h1 className="aa has-text-warning">
            <span>45%</span>
            <span>OFF SALE</span>
          </h1>
          <h1 className="title is-3 has-text-white has-text-weight-light">
            Just hurry up limited offer!
          </h1>
          <h2 className="subtitle is-6 has-text-white has-text-weight-light">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </h2>
          <div className="buttons">
            <span className="button is-success is-rounded">Book Now</span>
            <span className="button is-warning is-rounded">Read More</span>
          </div>
        </div>

        <div className="dd column is-hidden-touch">
          <img src="https://colorlib.com/preview/theme/tour/images/img_bg_2.jpg" />
        </div>
      </div>
    </div>
  </Wrapper>
)
export default Tbackground
