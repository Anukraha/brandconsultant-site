import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
const CounterTwo = () => {
  return (
    <>
      {/*fact-area start*/}
      <div className='fact-area' style={{ background: "#F9F9F9" }}>
        <div className='container'>
          <div
            className='fact-counter-area'
            style={{ background: "url(assets/img/fact/bg.png)" }}
          >
            <div className='row justify-content-center'>
              
              <div className='col-lg-3 col-md-6'>
              
                <div className='single-fact-wrap'>
                  <h2>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={1500} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <h5>PROJECTS DONE</h5>
                  <p>
We have completed various projects, meeting the diverse needs of our clients.</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-fact-wrap'>
                  <h2>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={80} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <h5>BEST EMPLOYEES</h5>
                  <p>Employees who deliver exceptional results for our clients.</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-fact-wrap'>
                  <h2>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={400} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <h5>CLIENTS</h5>
                  <p>We have served various clients helping them achieve remarkable success.</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/*fact-area end*/}
    </>
  );
};

export default CounterTwo;
