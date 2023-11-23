import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

const ServiceOneAll = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h6 className='subtitle'>COMPANIES</h6>
                <h2 className='title'>OUR COMPANIES AND BRANDS</h2><br></br>
                <span>
                Our agency manages a diverse portfolio of companies and brands in various industries, including the food and beverage sector, retail, franchising, and digital marketing. 

                </span>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                <a href='https://brandmonkconsulting.com/'> <img src='assets/img/service/001.png' alt='Transpro' /></a>
                  {/* <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.png'
                      alt='Transpro'
                    /> 
                  </div>*/}
                </div>
                <div className='details'>
                  <h6>BRAND MONK CONSULTING</h6>
                  <p>
                  Best Consulting services for Digital Marketing.
                  </p>
                  {/* <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                 <a href='http://zikadesigns.com/'><img src='assets/img/service/002.png' alt='Transpro' /></a> 
                  {/* <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-2.png'
                      alt='Transpro'
                    /> 
                  </div>*/} 
                </div>
                <div className='details'>
                  <h6>ZIKA DESIGNS</h6>
                  <p>
                  Best Interior Designers and Consultants in Coimbatore.
                  </p>
                  {/* <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                <a href='https://thevisiontraders.com/'> <img src='assets/img/service/004.png' alt='Transpro' /></a>
                  {/* <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='Transpro'
                    /> 
                  </div>*/}
                </div>
                <div className='details'>
                  <h6> VISION TRADERS</h6>
                  <p>
                  Trading and wholesaling of quality tested products
                  </p>
                  {/* <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <a href='http://brandmonkfnb.com/'><img src='assets/img/service/005.png' alt='Transpro' /></a>
                   {/*<div className='icon'>
                    <img
                      src='assets/img/service/service-icon-4.png'
                      alt='Transpro'
                    /> 
                  </div>*/}
                </div>
                <div className='details'>
                  <h6>BRAND MONK F&B</h6>
                  <p>
                  Franchising | Restaurant Consulting | Kitchen Equipments Supply.
                  </p>
                  {/* <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                 <a href='https://zutail.com/'> <img src='assets/img/service/006.png' alt='Transpro' /></a>
                  {/* <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-5.png'
                      alt='Transpro'
                    /> 
                  </div>*/}
                </div>
                <div className='details'>
                  <h6>ZUTAIL</h6>
                  <p>
                  The Best services for your pets in Coimbatore.
                  </p>
                  {/* <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                 <a href='https://brandmonkacademy.com/'> <img src='assets/img/service/003.png' alt='Transpro' /></a>
                  {/* <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-6.png'
                      alt='Transpro'
                    /> 
                  </div>*/}
                </div>
                <div className='details'>
                  <h6>BRAND MONK ACADEMY</h6>
                  <p>
                  Best Digital Marketing Training Institute in Coimbatore.
                  </p>
                  {/* <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOneAll;
