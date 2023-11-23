/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const TransportServiceArea = () => {
  return (
    <>
      {/* Transport service area start */}
      <div className='transport-service-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title  text-center'>
                <span className='subtitle'>Our Services</span>
                <h2 className='title'>What We Can Do For You</h2>
              </div>
            </div>
          </div>
          <div className='row transport-service-single'>
            <div className='col-lg-6'>
              <div className='transport-service-image wow fadeInLeft'>
                <img
                  src='assets/img/service/8.jpg'
                  className='img-fluid'
                  alt='transport-service images'
                />
                <div className='transport-service-item-hover'>
                  <a href='#'>
                    <div className='transport-service-link'>
                      <span className='fa fa-eye' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-1 d-flex'>
              <div className='transport-service-content wow fadeInRight'>
                <h3 className='title'>Retail Services:</h3>
                <p>
                From strategic store layout and visual merchandising to inventory management and customer relationship management, we provide comprehensive solutions tailored to your specific retail needs. 
                </p>
                {/* <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn blank'>
                    Contact for transport
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className='row transport-service-single'>
            <div className='col-lg-6 offset-lg-1 order-lg-2'>
              <div className='transport-service-image wow fadeInRight'>
                <img
                  src='assets/img/service/9.jpg'
                  className='img-fluid'
                  alt='transport-service images'
                />
                <div className='transport-service-item-hover'>
                  <a href='#'>
                    <div className='transport-service-link'>
                      <span className='fa fa-eye' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-1 d-flex '>
              <div className='transport-service-content wow fadeInLeft'>
                <h3 className='title'>Franchising Services:</h3>
                <p>
                Our team of experts offers end-to-end support in franchise development, including franchisee recruitment, training programs, operational systems, and marketing strategies.
                </p>
                {/* <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn blank'>
                    Contact for transport
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className='row transport-service-single'>
            <div className='col-lg-6'>
              <div className='transport-service-image wow fadeInLeft'>
                <img
                  src='assets/img/service/10.jpg'
                  className='img-fluid'
                  alt='transport-service images'
                />
                <div className='transport-service-item-hover'>
                  <a href='#'>
                    <div className='transport-service-link'>
                      <span className='fa fa-eye' />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-4 offset-lg-1 d-flex'>
              <div className='transport-service-content wow fadeInRight'>
                <h3 className='title'>Digital Marketing Services:</h3>
                <p>
                From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation, we employ cutting-edge strategies and tools to drive website traffic.                </p>
                {/* <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn blank'>
                    Contact for transport
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className='row justify-content-center'>
            <div className='col-lg-2'>
              <div className='btn-wrapper animated fadeInUpBig text-center'>
                <a href='#' className='boxed-btn btn-bounce'>
                  View All
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Transport service area end */}
    </>
  );
};

export default TransportServiceArea;
