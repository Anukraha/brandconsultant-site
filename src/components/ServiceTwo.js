import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Slider from "react-slick";

const ServiceTwo = () => {
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
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
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
      {/* service area start */}
      <div
        className='service-area pd-top-115 pd-bottom-120'
        style={{ background: "#f9f9f9" }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='section-title'>
                <h4 className='subtitle style-2'>SERVICES</h4>
                <h2 className='title'>OUR EXPERTISE</h2>
                <p>
                We leverage our expertise to drive exceptional results for your brand.
                </p>
              </div>
            </div>
            <div className='col-lg-6 text-lg-end align-self-center'>
              {/* <div className='btn-wrap mb-5 mb-lg-0'>
                <Link className='btn btn-base' to='/service'>
                  VIEW ALL SERVICES
                </Link>
              </div> */}
            </div>
          </div>
          <div className='service-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/1.jpg)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-002.png'
                        alt='Transpro'
                      />
                      {/* <img
                        className='img-2'
                        src='assets/img/service/service-icon-01.png'
                        alt='Transpro'
                      /> */}
                    </div>
                  </div>
                  <div className='details'>
                    <h5>Retail</h5>
                    <p>
                    We offer services to help you unlock the full potential of retail, we offer comprehensive services that encompass strategic planning, customer experience enhancement, and sales optimization.
                    </p>
                    <div className='btn-wrap'>
                      {/* <Link className='read-more-text' to='/service-details'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/1.jpg)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-004.png'
                        alt='Transpro'
                      />
                      {/* <img
                        className='img-2'
                        src='assets/img/service/service-icon-02.png'
                        alt='Transpro'
                      /> */}
                    </div>
                  </div>
                  <div className='details'>
                    <h5>Food & Beverages</h5>
                    <p>
                    Our agency specializes in providing food and beverage services to cater to the unique needs of our clients. From menu development to brand positioning and marketing strategies.
                    </p>
                    <div className='btn-wrap'>
                      {/* <Link className='read-more-text' to='/service-details'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/1.jpg)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-003.png'
                        alt='Transpro'
                      />
                      {/* <img
                        className='img-2'
                        src='assets/img/service/service-icon-03.png'
                        alt='Transpro'
                      /> */}
                    </div>
                  </div>
                  <div className='details'>
                    <h5>Franchising</h5>
                    <p>
                    Our agency offers a wide range of franchising services to support your business expansion. We provide expert strategic solutions to help you navigate the complexities of franchising. 
                    </p>
                    <div className='btn-wrap'>
                      {/* <Link className='read-more-text' to='/service-details'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div
                  className='single-service-wrap-2'
                  style={{ backgroundImage: "url(assets/img/service/1.jpg)" }}
                >
                  <div className='thumb'>
                    <div className='icon'>
                      <img
                        src='assets/img/service/service-icon-001.png'
                        alt='Transpro'
                      />
                      {/* <img
                        className='img-2'
                        src='assets/img/service/service-icon-02.png'
                        alt='Transpro'
                      /> */}
                    </div>
                  </div>
                  <div className='details'>
                    <h5>Digital Marketing</h5>
                    <p>
                    We specialize in search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content creation, email marketing, and conversion rate optimization (CRO).                     </p>
                    <div className='btn-wrap'>
                      {/* <Link className='read-more-text' to='/service-details'>
                        READ MORE{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceTwo;
