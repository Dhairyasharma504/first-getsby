import React from "react"
const Hero =(props)=>(
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={props.img} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{props.title}</p>
      </div>
    </div>
  </div>
</div>

);
export default Hero; 