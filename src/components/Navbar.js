import React from "react"
import Styled from "styled-components"
const Wrapper=Styled.div`
.image{
  background-image: linear-gradient(to bottom,rgba(226,249,248,0.47),rgba(29, 29, 27, 0.64)),url(https://colorlib.com/preview/theme/sogo/images/hero_4.jpg);
    margin-top: -27rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 73rem;
}
.navbar{background: transparent;
  font-family: serif;
  font-weight: bolder;
}
.hero-body{
  padding-top: 44rem;
}
.title{
  padding-top: 2rem;
    font-size: 4rem;
}

`

const Navbar =()=>(
  <Wrapper>
  
  <section className="image">
  <div className="hero-head">
    <nav className="navbar is-fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
          <a className="navbar-item is-active">
              Home
            </a>
          </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item is-active">
              Home
            </a>
            <a className="navbar-item">
              Examples
            </a>
            <a className="navbar-item">
              Documentation
            </a>
            <span className="navbar-item">
              <a className="button is-info is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>FOOD</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div className="hero-body">
    <div className="container has-text-centered">
      
      <p className="subtitle has-text-white has-text-centered has-text-weight-bold is-family-sans-serif">
      WELCOME TO 5  HOTEL
      </p>
      <p className="title is-1 has-text-white has-text-centered column-is-7 is-offset-2 has-text-weight-semibold is-family-sans-serif">
      A Best Place To Stay
      </p>
    </div>
  </div> 
  
</section>

</Wrapper>
);
export default Navbar;