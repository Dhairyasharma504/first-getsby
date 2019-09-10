import React from "react"
import Styled from "styled-components"
const Wrapper = Styled.div`
.hero{
  background-image: linear-gradient(to bottom,rgba(175,210,214,0.14),rgba(12, 21, 20, 0.29)),url(https://colorlib.com/preview/theme/tour/images/img_bg_2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 42rem;
    margin-top: -3rem;
}
.container{
  margin-top:6rem;
}

`
const Tnavbar = () => (
  <Wrapper>
    <section className="hero">
      <div className="hero-head">
        <header className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item has-text-weight-bold has-text-white is-size-4">
                Tour
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroC"
              ></span>
            </div>
            <div className="navbar-end">
              <div className="navbar-brand">
                <a
                  className="navbar-item has-text-white"
                  href="http://localhost:8000/about"
                >
                  About
                </a>
                <a className="navbar-item has-text-white">Examples</a>
                <a className="navbar-item has-text-white">Documentation</a>
                <span className="navbar-item has-text-white">
                  <a className="button is-success is-inverted">
                    <span className="icon has-text-white">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <h2 className="subtitle has-text-white">10 DAYS CRUISES</h2>
          <h1 className="title is-1 has-text-weight-light has-text-white ">
            From Greece to Spain
          </h1>
        </div>
      </div>
    </section>
  </Wrapper>
)
export default Tnavbar
