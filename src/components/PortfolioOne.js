/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import Slider from "react-slick";

const PortfolioOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    initialSlide: 1,
    autoplaySpeed: 5000,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* portfolio area start */}
      <div
        className='portfolio-area pd-top-115'
        style={{ background: "url(assets/img/portfolio/bg.jpg)" }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='section-title style-white'>
                <h4 className='subtitle style-2'>OUR COMPANIES AND BRANDS</h4>
                <h2 className='title'>CHECK OUT OUR COMPANIES</h2>
                <span className='content'>
                Our agency manages a diverse portfolio of companies and brands in various industries, including the food and beverage sector, retail, franchising, and digital marketing. 
                </span>
              </div>
            </div>
          </div>
          <div className='swiper-container'>
            {/* Additional required wrapper */}
            <div className='swiper-wrapper'>
              {/* Slides */}
              <Slider {...settings}>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/01.jpg' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Best Interior Designers in Coimbatore.</p>
                        <h4>Zika Designs</h4></div>
                      <a href='http://zikadesigns.com/' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/02.jpg' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Best Consulting services for Digital Marketing.</p>
                        <h4>Brand Monk Consulting</h4>
                      </div>
                      <a href='https://brandmonkconsulting.com/' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/03.jpg' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Franchising | Restaurant Consulting | Kitchen Equipments Supply.</p>
                        <h4>Brand Monk Food & Beverages</h4>
                      </div>
                      <a href='http://brandmonkfnb.com/' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/4.jpg' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Best Digital Marketing Training Institute.</p>
                        <h4>Brand Monk Academy</h4>
                      </div>
                      <a href='https://brandmonkacademy.com/' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/5.jpg' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Trading and wholesaling of quality tested products.</p>
                        <h4>Vision Traders</h4>
                      </div>
                      <a href='https://thevisiontraders.com/' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/6.jpg' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>The Best services for your pets.</p>
                        <h4>Zutail</h4>
                      </div>
                      <a href='https://zutail.com/' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            {/* If we need navigation buttons
            <div className='swiper-button-prev button'>
              <img src='assets/img/icon/left-arrow.png' alt='Transpro' />
            </div>
            <div className='swiper-button-next button'>
              <img src='assets/img/icon/right-arrow.png' alt='Transpro' />
            </div> */}
          </div>
        </div>
      </div>
      {/* portfolio area end */}
    </>
  );
};

export default PortfolioOne;
