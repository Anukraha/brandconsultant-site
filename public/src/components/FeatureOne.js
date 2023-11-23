import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
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
    initialSlide: 0,
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
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area mb-60'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title mb-0'>
                <h4 className='subtitle'>FEATURES</h4>
                <h2 className='title'>WHY US?</h2>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='section-title'>
                <p className='content left-line'>
                At our company, we take pride in offering exceptional services and solutions that set us apart. Our commitment to excellence, innovative thinking, inclusive work environment, and talent-driven approach make us the ideal choice.                </p>
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-1.png' alt='Transpro' />
                  </div>
                  <h5>Motivating<br></br> Stewardship:</h5>
                  <p>
                  We set high standards and motivate our team to surpass them, ensuring that our clients receive exceptional service.  </p>              </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-2.png' alt='Transpro' />
                  </div>
                  <h5>Innovative<br></br> Thinking:</h5>
                  <p>
                  Our out-of-the-box approach delivers fresh, defining ideas that shape the future and provide cutting-edge solutions.                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-3.png' alt='Transpro' />
                  </div>
                  <h5>Inclusive <br></br>Environment:</h5>
                  <p>
                  Our ingenious work culture fosters collaboration and creativity, allowing talents to explore new possibilities.                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/feature-02.png' alt='Transpro' />
                  </div>
                  <h5>Limitless<br></br> Talent:</h5>
                  <p>
                  We foster a enriching work environment for our employess by embracing diversity and inclusivity in our work               </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
