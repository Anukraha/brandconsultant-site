/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPaperPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area'>
        <div
          className='footer-top'
          style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/map-marker.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>OFFICE ADDRESS:</h6>
                    <p>

E Venkatasamy Rd, R S Puram West, Coimbatore - 641002</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/phone.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>CONTACT US:</h6>
                    <p>arun@brandmonk.biz</p>
                    <p>+91 98400 54814</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top after-none'>
                  <div className='icon'>
                    <img src='assets/img/icon/clock.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>WORKING HOURS:</h6>
                    <p>Weekdays - Mon-Fri: 10am-7pm</p>
                    <p>Weekend - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/logo-white.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <p>
                  We are creative thinkers who work closely with clients to find innovative approaches to business challenges. When we put our minds together, there’s no problem we can’t solve.We enjoy building business.We are in it with you as much as you are.

                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>USEFULL LINKS</h4>
                <ul>
                  <li>
                    <Link to='/about'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Services
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaArrowRight /> Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to='/blog'>
                      <FaArrowRight />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      <FaArrowRight /> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-2 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>OUR SERVICES</h4>
                <ul>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Food & Beverages
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Retail
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Franchising
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FaArrowRight /> Digital Marketing
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_subscribe'>
                <h4 className='widget-title'>SUBSCRIBE NOW</h4>
                <p>
                  Continually evolve worldwide vortals rather than process
                  centric human capital. Subscribe for our latest news &amp;
                  articles. and send message.
                </p>
                <div className='single-subscribe-inner'>
                  <input type='text' placeholder='Email Address' />
                  <a className='btn btn-base' href='#'>
                    <FaPaperPlane />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterOne;
