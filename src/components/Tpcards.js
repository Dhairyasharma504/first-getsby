import React from "react"
import styled from "styled-components"
const Some = styled.div`
  .card-image {
    box-shadow: 1px 6px 8px -4px blueviolet;
  }
  .subtitle {
    margin: 1rem;
    margin-left: 0rem;
  }
`
const Tcards = props => (
  <Some>
    <div className="card-image">
      <img src={props.img} alt="Placeholder image" />
    </div>
    <div className="card-content is-hidden-touch">
      <p className="title is-3 has-text-left has-text-weight-normal">
        {props.title}
      </p>
      <h7>New York , USA</h7>
      <p className="subtitle is-6 has-text-weight-light has-text-left">
        {props.subtitle}
      </p>
      <div className="media">
        <div className="media-left"></div>
        <div className="media-right"></div>
      </div>
    </div>
  </Some>
)
export default Tcards
