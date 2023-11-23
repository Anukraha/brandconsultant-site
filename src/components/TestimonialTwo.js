import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialTwo = () => {
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
        },
      },
      {
        breakpoint: 991,
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
      {/* testimonial area start */}
      <div
        className='testimonial-area pd-top-115 pd-bottom-120'
        style={{ backgroundImage: "url(assets/img/testimonial/bg.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-0'>
                <h4 className='subtitle style-2'>TESTIMONIALS</h4>
                <h2 className='title'>OUR CLIENT’S FEEDBACK</h2><br></br>
                <span className='content'>
                Here's what some of our satisfied clients have to say about their <br></br>experience working with us:
                </span>
              </div>
            </div>
          </div>
          <div className='testimonial-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                  I have been working with the agency for several years now, and I can confidently say that their expertise and dedication have been instrumental in the success of my brand. 
                  </p>
                  <div className='client-wrap'>
                   
                    <div className='details'>
                      <h5>ANJELINA</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                  The agency has been a valuable partner in our retail business. They have consistently delivered exceptional results and have helped us stay ahead in a highly competitive market. 
                  </p>
                  <div className='client-wrap'>
                    
                    <div className='details'>
                      <h5>MIGUEL PEDRO</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                  Working with Brand Monk has been a game-changer for our franchise business. Their expertise in franchising and their ability to create scalable systems have been invaluable for our brand. 
                  </p>
                  <div className='client-wrap'>
                  
                    <div className='details'>
                      <h5>MICHAEL CLARK</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    We partnered with the agency and reached our target audience effectively with help of Brand Monk, generate quality leads, and increase our online conversions. We highly recommend their services. 
                  </p>
                  <div className='client-wrap'>
                   
                    <div className='details'>
                      <h5>MANISH PAUL</h5>
                      <p>Co-Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialTwo;
