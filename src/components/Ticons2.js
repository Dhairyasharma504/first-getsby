import React from "react"
import Styled from "styled-components"
const Wrapper=Styled.div

` align-self: center;
.icon{
    margin: 6rem;
    margin-bottom: 5rem;
}
.subtitle{
    margin: 3rem;
    margin-top: 2rem;
}
.title{
    margin: 2rem;
}
.dd{
    box-shadow: 9px 0px 8px -8px blue;
    background: space;
}
.cc{
    box-shadow: -3px 0px 15px -3px blue;
    background: space;
}
.is-rounded{
    box-shadow: inset 0px 1px 13px 0px gainsboro;
}
`;
const heading =()=>(
    <section className="section">
    <Wrapper>
<div className="columns is-desktop">
  <div className="dd column">
  <figure className="icon image is-128x128">
  <img className="is-rounded" src="https://image.flaticon.com/icons/svg/201/201623.svg"/>
</figure>
  <h1 className="title is-3 has-text-weight-light has-text-centered has-text-dark">Amazing Travel</h1>
  <h2 className="subtitle is-6 has-text-centered  has-text-weight-light ">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</h2>
  </div>


  <div className="column">
  <figure className="icon image is-128x128">
  <img className="is-rounded" src="https://image.flaticon.com/icons/svg/1064/1064719.svg"/>
</figure>
<h1 className="title is-3 has-text-centered has-text-weight-light has-text-dark">Our Cruises</h1>
  <h2 className="subtitle is-6 has-text-centered  has-text-weight-light">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</h2>
  </div>


  <div className="column">
  <figure className="icon image is-128x128">
  <img className="is-rounded" src="https://image.flaticon.com/icons/svg/741/741407.svg"/>
</figure>
<h1 className="title is-3 has-text-centered has-text-weight-light has-text-dark">Book Your Trip</h1>
  <h2 className="subtitle is-6 has-text-centered  has-text-weight-light">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</h2>
  </div>


  <div className="cc column">

  <figure className="icon image is-128x128">
  <img className="is-rounded" src="https://image.flaticon.com/icons/svg/2082/2082484.svg"/>
</figure>
<h1 className="title is-3 has-text-centered has-text-weight-light has-text-dark">Nice Support</h1>
  <h2 className="subtitle is-6 has-text-centered  has-text-weight-light">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies</h2>
  </div>
</div>

    </Wrapper>
    </section>
    );
    export default heading;
