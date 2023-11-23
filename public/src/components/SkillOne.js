import React from "react";

const SkillOne = () => {
  return (
    <>
      {/*skill-area start*/}
      <div
        className='skill-area pd-top-120 pd-bottom-30'
        style={{ background: "#f9f9f9" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6 order-lg-2'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='thumb'>
                    <br></br>
                    <img
                      className='w-100'
                      src='assets/img/about/5.jpg'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='thumb img-2'>
                    <img
                      className='w-100'
                      src='assets/img/about/6.jpg'
                      alt='Transpro'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 order-lg-1'>
              <div className='section-title mt-lg-0 mt-5'>
                <h4 className='subtitle style-2'>OUR SKILLS</h4>
                {/* <h2 className='title'>WHY CHOOSE FOR US?</h2> */}
                <p>
                Our team of experienced professionals is passionate about driving results and delivering exceptional outcomes for our clients. 
                </p>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-1.png' alt='Transpro' />
                </div>
                <div className='details1'>
                  <h6>Strategic Brand Management:</h6>
                  <p>
                  Establishing a clear and distinct brand identity is crucial. This involves defining the brand's mission, vision and positioning.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-2.png' alt='Transpro' />
                </div>
                <div className='details1'>
                  <h6>Digital Marketing Expertise:</h6>
                  <p>
                  Understanding and implementing strategies to optimize websites and content for better visibility in search engine results.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-3.png' alt='Transpro' />
                </div>
                <div className='details1'>
                  <h6>Franchise Development :</h6>
                  <p>
                  It involves creating and implementing strategies to grow the franchise network and increase brand presence in new markets. 
                  </p>
                </div>
              </div>
            </div>
            </div>
              
          </div>
        </div>
     
      {/*skill-area end*/}
    </>
  );
};

export default SkillOne;
