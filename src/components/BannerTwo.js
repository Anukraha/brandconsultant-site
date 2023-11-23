import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BannerTwo = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 5,
    initialSlide: 0,
    autoplay:true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  
  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-1'>
     
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
            <div >
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/bg-03.jpg")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 '>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-1 title'>
                       Empowering Brands for Success
                        </h1>
                        <p className='b-animate-1 content'>
                        With our agency services, we can transform brands and businesses by leveraging our deep industry knowledge to propel your brand to new heights of success.</p>
                           <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/about'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                         
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5 '>
               
                  
                  {/* <div className="contactf1 ">
                  <div className='contact-form b-animate-4'>
                  <h2 className="contacth2">Get in Touch</h2>
                  <form>
                    <div className='form-group'>
                      <input type='text' placeholder='Name' className='transparent-input'/>
                    </div><br></br>
                    <div className='form-group'>
                      <input type='email' placeholder='Email' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <input type='phone' placeholder='Phone Number' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <textarea placeholder='Message' className='transparent-input'></textarea>
                    </div><br></br>
                    <button type='submit' className='btn btn-base'>
                      Submit
                    </button>
                  </form>
                </div>
              </div> */}
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/bg-05.jpg")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Fueling Business and Influence
                        </h1>
                        <p className='b-animate-2 content'>
                        Our agency is committed to maximizing the potential of your brand, employing our proven methodologies and forward-thinking approaches to deliver results.                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/about'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                         
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5 '>
               
                    {/* <div className="contactf1 ">
                  <div className='contact-form b-animate-4'>
                  <h2 className="contacth2">Get in Touch</h2>
                  <form>
                    <div className='form-group'>
                      <input type='text' placeholder='Name' className='transparent-input'/>
                    </div><br></br>
                    <div className='form-group'>
                      <input type='email' placeholder='Email' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <input type='phone' placeholder='Phone Number' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <textarea placeholder='Message' className='transparent-input'></textarea>
                    </div><br></br>
                    <button type='submit' className='btn btn-base'>
                      Submit
                    </button>
                  </form>
                </div>
              </div> */}
            
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/bg-02.jpg")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-3 title'>
                        Inspiring Success through Creative Excellence
                        </h1>
                        <p className='b-animate-3 content'>
                        When you choose our agency, you gain a trusted partner that excels at creating impactful strategies and delivering exceptional results, combining our expertise, creativity, and data-driven insights to position your brand as a market leader.</p>
                         <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/about'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                         
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5 '>
                    
                <div className='contact-form b-animate-4'>
                  
                  <h2 className="contacth2">Get in Touch</h2>
                  <form>
                    <div className='form-group'>
                      <input type='text' placeholder='Name' className='transparent-input'/>
                    </div><br></br>
                    <div className='form-group'>
                      <input type='email' placeholder='Email' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <input type='phone' placeholder='Phone Number' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <textarea placeholder='Message' className='transparent-input'></textarea>
                    </div><br></br>
                    <button type='submit' className='btn btn-base'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/bg-01.jpg")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-4 title'>
                        Propelling Businesses to New Heights
                        </h1>
                        <p className='b-animate-4 content'>
                        Partner with us to revolutionize your brand's retail presence, expand through franchising, and conquer the digital landscape.                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/about'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                         
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5 '>
               
                    {/* <div className="contactf1 ">
                  <div className='contact-form b-animate-4'>
                  <h2 className="contacth2">Get in Touch</h2>
                  <form>
                    <div className='form-group'>
                      <input type='text' placeholder='Name' className='transparent-input'/>
                    </div><br></br>
                    <div className='form-group'>
                      <input type='email' placeholder='Email' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <input type='phone' placeholder='Phone Number' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <textarea placeholder='Message' className='transparent-input'></textarea>
                    </div><br></br>
                    <button type='submit' className='btn btn-base'>
                      Submit
                    </button>
                  </form>
                </div>
              </div> */}
                  </div>
                </div>
              </div>
            </div>
          
             </div>
            {/* <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/bg-05.jpg")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-5 title'>
                        Fostering Connections and Driving Results
                        </h1>
                        <p className='b-animate-5 content'>
                        Driving customer engagement and loyalty for your food and beverage brand through innovative retail strategies and digital marketing campaigns.                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/about'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                         
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-5 '>
                
                  
                  <div className='contact-form b-animate-4'>
                  <h2 className="contacth2">Get in Touch</h2>
                  <form>
                    <div className='form-group'>
                      <input type='text' placeholder='Name' className='transparent-input'/>
                    </div><br></br>
                    <div className='form-group'>
                      <input type='email' placeholder='Email' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <input type='phone' placeholder='Phone Number' className='transparent-input' />
                    </div><br></br>
                    <div className='form-group'>
                      <textarea placeholder='Message' className='transparent-input'></textarea>
                    </div><br></br>
                    <button type='submit' className='btn btn-base'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
                  </div>
                </div>

              </div>
            </div> */}
            </Slider>
        </div>
       
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerTwo;
