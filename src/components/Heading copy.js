
import React from "react"
import Styled from "styled-components"
const Wrapper=Styled.div

`
.title{
    font-family: "Playfair Display", times, serif;
    font-weight: 700;
    margin-top: 4rem;
}
`
const heading =(props)=>(
    <Wrapper>
   <p className="title is-2 has-text-centered">{props.title}</p>
<p className="subtitle is-5 has-text-centered">{props.subtitle}</p>


    </Wrapper>
    );
    export default heading;
