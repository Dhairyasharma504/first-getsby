import React from 'react';
import Hero from "../components/Hero"
import Styled from "styled-components"
const Wrapper=Styled.div`

.columns{
  margin-top:3rem;
}
`;

const Heroone =()=>(
  <Wrapper>
<section>
<div className="container">
 <div className="columns">
  <div className="column">
    <Hero title=" mechanical" img="https://colorlib.com/preview/theme/sogo/images/img_1.jpg"/>
  </div>
  <div className="column">
  <Hero title=" mechanical" img="https://colorlib.com/preview/theme/sogo/images/img_2.jpg"/>
  </div>
  <div className="column">
  <Hero title=" mechanietetetet4" img="https://colorlib.com/preview/theme/sogo/images/img_3.jpg"/>
  </div>
</div>
    </div>
</section>
</Wrapper>
) ;
export default Heroone;