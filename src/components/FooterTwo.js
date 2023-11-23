/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FaArrowRight,
  // FaFacebookF,
  // FaLinkedinIn,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaRegEnvelopeOpen,
  // FaRegPaperPlane,
  // FaTwitter,
  // FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area style-2'>
      <br></br>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_about'>
                <h4 className='widget-title'>ABOUT COMPANY</h4>
                <div className='details'>
                  <p>
                  We are creative thinkers who work closely with clients to find innovative approaches to business challenges. When we put our minds together, there’s no problem we can’t solve.
                  </p>
                  {/* <ul className='social-media style-border'>
                    <li>
                      // <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      // <a href='#'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      // <a href='#'>
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      // <a href='#'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-lg-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>LINKS</h4>
                <ul>
                  <li>
                    <Link to='/about'>
                      <FaArrowRight /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'>
                      <FaArrowRight /> Companies
                    </Link>
                  </li>
                  {/* <li>
                    <Link to='#'>
                      <FaArrowRight /> Portfolio
                    </Link>
                  </li> */}
                  <li>
                    <Link to='/contact1'>
                      <FaArrowRight /> Career
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
            <div className='col-xl-2 col-lg-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>SERVICES</h4>
                <ul>
                  <li>
                    {/* <a href='#'> */}
                      <FaArrowRight /> Food & Beverages
                    {/* </a> */}
                  </li>
                  <li>
                    {/* <a href='#'> */}
                      <FaArrowRight /> Retail
                    {/* </a> */}
                  </li>
                  <li>
                    {/* <a href='#'> */}
                      <FaArrowRight /> Franchising
                    {/* </a> */}
                  </li>
                  <li>
                    {/* <a href='#'> */}
                      <FaArrowRight /> Digital Marketing
                    {/* </a> */}
                  </li>
                  {/* <li>
                    // <a href='#'>
                      <FaArrowRight /> Distribution
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-lg-6'>
              <div className='widget widget_contact'>
                <h4 className='widget-title'>CONTACT NOW</h4>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaMapMarkerAlt />
                  </div>
                  <div className='details'>
                    <p>
Nishanth Plaza, 2nd Floor, 
E Venkatasamy Rd, R S Puram West,
Coimbatore, Tamil Nadu – 641002.</p>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaMobileAlt />
                  </div>
                  <div className='details'>
                    <p>+91 98400 54814</p>

                    <p>+91 73977 55655</p>
                  </div>
                </div>
                <div className='single-contact-inner'>
                  <div className='icon'>
                    <FaRegEnvelopeOpen />
                  </div>
                  <div className='details'>
                    <p>arun@brandmonk.biz</p>

                    <p>work@brandmonk.biz</p>
                  </div>
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

export default FooterTwo;
