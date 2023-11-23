import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BannerOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-1'>
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/1.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                       Empowering Brands for Success
                        </h1>
                        <p className='b-animate-3 content'>
                        With our comprehensive agency services, we have the power to transform brands and businesses, leveraging our deep industry knowledge and cutting-edge strategies to propel your brand to new heights of success.</p>
                           <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Fueling Business Expansion and Influence
                        </h1>
                        <p className='b-animate-3 content'>
                        Our agency is committed to unlocking growth opportunities and maximizing the potential of your brand, employing our proven methodologies and forward-thinking approaches to deliver exceptional results in a rapidly evolving business landscape.                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Pioneering Success in the Business Landscape
                        </h1>
                        <p className='b-animate-3 content'>
                        When you choose our agency, you gain a trusted partner that excels at creating impactful strategies and delivering exceptional results, combining our expertise, creativity, and data-driven insights to position your brand as a market leader.</p>
                         <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Revolutionizing Brands, Maximizing Impact
                        </h1>
                        <p className='b-animate-3 content'>
                        Partner with us to revolutionize your brand's retail presence, expand through franchising, and conquer the digital landscape.                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Building Success from the Ground Up
                        </h1>
                        <p className='b-animate-3 content'>
                        Maximize your reach, revenue, and customer engagement with our integrated approach to retail, franchising, and digital marketing.                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Fostering Connections and Driving Results
                        </h1>
                        <p className='b-animate-3 content'>
                        Driving customer engagement and loyalty for your food and beverage brand through innovative retail strategies and digital marketing campaigns.                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            </Slider>
        </div>
       
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerOne;
