import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
// import { Link } from "react-router-dom";
const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className='about-area pd-bottom-120'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-thumb-wrap'>
                  <img
                    className='img-1'
                    src='./assets/img/about/shape.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-2'
                    src='./assets/img/about/1.jpg'
                    alt='Transpro'
                  />
                  {/* <img
                    className='img-3'
                    src='./assets/img/about/2.jpg'
                    alt='Transpro'
                  /> */}
                  <div className='exprience-wrap'>
                    <img src='./assets/img/about/shape-3.png' alt='Transpro' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={6} />+
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h2 className='title'>
                      WELCOME TO BRAND MONK
                    </h2>
                    <p className='content left-line'>
                    With our deep understanding of the industry landscape and consumer trends, we tailor our services to meet the unique needs and objectives of each company and brand under our management. </p>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />{" "}
                            Food & Beverages
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            Retail
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            Franchising
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                            />
                            Digital Marketing
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-6 col-lg-12 col-md-6 align-self-center'>
                        <div className='thumb'>
                          <img src='./assets/img/about/4.jpg' alt='Transpro' />
                        </div>
                      </div>
                    </div>
                    <div className='btn-wrap'>
                    
                      <p>                    When you partner with Brand Monk, you can trust that our professionals will go above and beyond to meet your needs. Their commitment to continuous learning, understanding of client requirements, and ability to craft tailored solutions set us apart. We are dedicated to helping your business thrive in a dynamic and competitive landscape.                   
</p>

                      <div className='author-wrap'>
                       {/*  <div className='thumb'>
                          <img src='./assets/img/about/4.png' alt='Transpro' />
                        </div>
                        <div className='details'>
                          <img
                            src='./assets/img/about/signature.png'
                            alt='Transpro'
                          />
                          <p>CEO, Of Company</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutOne;
