import React from "react"
import Styled from "styled-components"
const Wrapper=Styled.div`


.image{
  background-image: linear-gradient(to bottom,rgba(226,249,248,0.47),rgb(0, 0, 0)),url(https://colorlib.com/preview/theme/sogo/images/hero_4.jpg);
    background-position: 0% 32px;
    height: 72rem;
    margin-top: -27rem;
    margin-left: -18rem;
    position: sticky;
    

}
.navbar{background: transparent;
  font-family: serif;
  font-weight: bolder;
  


}
.hero-body{
  padding-top: 45rem;
  padding-left: 10rem;
}
.title{
  padding-top: 2rem;
  padding-left: 5rem;
  font-size: 5rem;
    font-family: serif;
    font-weight: bolder;
}
.subtitle{

  padding-left: 5rem;
  font-family: serif;
  font-weight: bolder;
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
      
      <p className="subtitle has-text-white">
      WELCOME TO 5  HOTEL
      </p>
      <p className="title is-1 has-text-white">
      A Best Place To Stay
      </p>
    </div>
  </div>

 
</section>
  
</Wrapper>
);
export default Navbar;