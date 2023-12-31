/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
// import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* about area start */}
      <div className='about-area-2  pd-bottom-240'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row '>
              <div className='col-lg-5 order-lg-2'>
                <div className='about-thumb-wrap mb-lg-0 mb-4'>
                  <img
                    className='img-1'
                    src='assets/img/about/shape.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-2'
                    src='assets/img/about/3.jpg'
                    alt='Transpro'
                  />
                  {/* <img
                    className='img-3'
                    src='assets/img/about/3.jpg'
                    alt='Transpro'
                  /> */}
                  <div className='exprience-wrap'>
                    <img src='assets/img/about/shape-3.png' alt='Transpro' />
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
              <div className='col-lg-7 align-self-center order-lg-1'>
                <div className='about-inner-wrap ms-0'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h3 className='title mb-2'>
                    Unleash the full potential of your brand with our strategic guidance.

                    </h3>
                    <p>
                    With the market becoming increasingly competitive, our agency is dedicated to ensuring your brand not only thrives but also distinguishes itself among competitors. Drawing upon our experience and deep industry knowledge, we are committed to propelling your brand towards unparalleled success.
                    </p>
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img
                              src='assets/img/about/icon-1.png'
                              alt='Transpro'
                            />
                          </div>
                          <div className='details'>
                            <h6> Best Consultation Services</h6>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img
                              src='assets/img/about/icon-2.png'
                              alt='Transpro'
                            />
                          </div>
                          <div className='details'>
                            <h6>Client-Centric Approach</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='btn-wrap'>
                      <Link className='btn btn-base' to='/about'>
                        DISCOVER MORE
                      </Link>
                      {/* <div className='video-wrap d-flex align-items-center gap-2'>
                        <span
                          className='video-play-btn cursor-pointer'
                          data-effect='mfp-zoom-in'
                          onClick={() => setOpen(true)}
                        >
                          <FaPlay />
                        </span>
                        <span>Watch The Video</span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XM6kTQPzzpQ'
          onClose={() => setOpen(false)}
        /> */}
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutTwo;
