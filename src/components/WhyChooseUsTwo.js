import React from "react";

const WhyChooseUsTwo = () => {
  return (
    <>
      {/*wcu-area start*/}
      <div
        className='wcu-area-2 pd-top-115'
        style={{ backgroundImage: "url(assets/img/wcu/bg-2.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title style-white text-center'>
                <h4 className='subtitle style-2'>SERVICES</h4><br></br>
                {/* <h2 className='title'>SERVICES WE PROVIDE</h2> */}
                <span className='content'>
                We offer a diverse set of services to cater to your specific needs.
                </span>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='single-wcu-wrap style-2'><br></br>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-4.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>STRATEGY CONSULTING</h6>
                  <p>
                  < ul><li>Business Strategy</li>
                  <li>Unit Economics</li>
                  <li>Performance Management</li>
                  <li>Franchising</li>
                  </ul>                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-5.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>GROWTH CONSULTING</h6>
                  <p>
                  < ul><li>Go to Market</li>
                  <li>Sales Research</li>
                 <li>Market Research</li> 
                  <li>Customer Insight</li>
                  </ul>                    </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'><br></br><br></br>
              <div className='thumb text-center'>
                <img src='assets/img/wcu/1.jpg' alt='Transpro' />
              </div>
            </div>
            
            <div className='col-lg-4'>
              <div className='single-wcu-wrap style-2'><br></br>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-6.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>E-BUSINESS CONSULTING</h6>
                  <p>
                  < ul><li>Digital Transformation</li>
                  <li>Operational Transformation</li>
                  <li>Analytics and Data Insights</li>
                  <li>CRM</li>
                  </ul>   </p>
                </div>
              </div>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-7.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>Digital Marketing</h6>
                  <p>
                  < ul><li>Keyword Research</li>
                  <li>On-Page SEO Optimization</li>
                  <li>Performance Tracking </li>
                  <li>Content Strategy</li>
                  </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*wcu-area end*/}
    </>
  );
};

export default WhyChooseUsTwo;
