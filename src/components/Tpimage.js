import React from "react"
import Styled from "styled-components"
const Wrapper=Styled.div`
    position: relative;
  .center {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    z-index: 0;
    margin-left: 1rem;
  }
  img {
          height: 14rem;
    width: 100%;
  }
`;
const Tpimage =({ title, image }) => (
    <Wrapper>
  <img src={image}/>
  <div className="center subtitle is-5 has-text-white has-text-weight-normal is-family-sans-serif">{title}</div>
</Wrapper>
  
    );
    export default Tpimage;
