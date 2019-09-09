import React from "react"
import Styled from "styled-components"
const Wrapper=Styled.div
`
.text1{
    font-family: "Playfair Display", times, serif;
    margin-top: 4rem;
  }
.image{
  box-shadow: 7px 10px 14px 8px cadetblue;
}
`
const Welcome =()=>(
<Wrapper>
    <div className="hero is-light">
    <div className="hero-body">
      <div className="container">
      <div className="columns">
  <div className="column is-three-fifths">
  <p className="text1 title is-2 column-is-7 is-offset-2 has-text-weight-bold">WELCOME !</p>
  <p className="text2 subtitle is-6 has-text-centered has-text-grey">
   Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
   </p>
   <a className="button is-warning is-rounded is-focused is-outlined">Learn More</a>
   
  </div>
  <div className="column">

   <div className="image">
  <figure className="image is-4by5">
  <img src="https://colorlib.com/preview/theme/sogo/images/img_1.jpg"/>
  </figure>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  
 
</Wrapper>
);
export default Welcome;