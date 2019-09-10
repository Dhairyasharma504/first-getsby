import React from "react"
import Styled from "styled-components"
const Wrapper = Styled.div`
.main{
    align-self: center;
}
.ss{
    box-shadow: -4px 8px 9px 1px black;
    margin: 2rem;
}
`
const Tmedia = () => (
  <section className="section">
    <Wrapper>
      <div className="columns">
        <div className="column is-hidden-touch">
          <figure className="ss image is-4by3">
            <img src="https://colorlib.com/preview/theme/tour/images/blog-3.jpg" />
          </figure>
        </div>
        <div className="main">
          <div className="column">
            <div className="columns">
              <div className="column">
                <article className="media">
                  <figure className="media-left">
                    <figure className="image is-96x96">
                      <img
                        className="is-rounded"
                        src="https://colorlib.com/preview/theme/tour/images/blog-1.jpg"
                      />
                    </figure>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        Feb 22,2018
                        <h3 className="title is-4 has-text-weight-light">
                          A Definitive Guide to the Best Dining
                        </h3>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <article className="media">
                  <figure className="media-left">
                    <figure className="image is-96x96">
                      <img
                        className="is-rounded"
                        src="https://colorlib.com/preview/theme/tour/images/blog-1.jpg"
                      />
                    </figure>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        Feb 22,2018
                        <h3 className="title is-4 has-text-weight-light">
                          How these 5 Peoples Found Their Dream Trip{" "}
                        </h3>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <article className="media">
                  <figure className="media-left">
                    <figure className="image is-96x96">
                      <img
                        className="is-rounded"
                        src="https://colorlib.com/preview/theme/tour/images/blog-1.jpg"
                      />
                    </figure>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        Feb 22,2018
                        <h3 className="title is-4 has-text-weight-light">
                          Our secreat island boat tour is just for you
                        </h3>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
)
export default Tmedia
