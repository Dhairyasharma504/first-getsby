
import React from "react"
import Styled from "styled-components"
const Wrapper=Styled.div

`
.subtitle{
    margin-top: -3rem;
}
`;
const Tpheading =(props)=>(
    <section className="section">
    <Wrapper>
        
   <p className="title is-2 has-text-centered has-text-weight-light">{props.title}</p>
   <div className="main">
<p className="subtitle is-6 has-text-centered has-text-weight-light is-family-sans-serif is-10">{props.subtitle}</p>
</div>
    </Wrapper>
    </section>
    );
    export default Tpheading;
