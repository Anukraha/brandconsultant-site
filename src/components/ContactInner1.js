/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef } from "react";
import {
  FaCity,
  // FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegClipboard,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactInner = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_yipk4xg", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Message Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Message Not Sent!");
          }
        }
      );
  };
  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* contact area start */}
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
              <form
                className='contact-form text-center'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>JOIN OUR TEAM</h3>
                <div className='row'>
                  <p className="section-title style-white text-center">
                  At Brand Monk, we are always on the lookout for talented individuals who are eager to make a difference in the world of business.
                  </p><hr></hr>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaUserAlt />
                      </label>
                      <input
                        type='text'
                        placeholder='Your name'
                        name='user_name'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaRegEnvelope />
                      </label>
                      <input
                        type='text'
                        placeholder='Your email'
                        name='user_email'
                      />
                    </div>
                    
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPhoneAlt />
                      </label>
                      <input type='text' placeholder=' Phone number' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaRegClipboard />
                      </label>
                      <input
                        type='text'
                        placeholder='Qualification'
                        name='qual'
                      />
                    </div> </div>
                    <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaCity />
                      </label>
                      <input type='text' placeholder=' City' />
                    </div>
                  </div>
                  
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder='Write a few words about yourself'
                        defaultValue={""}
                        id='message'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-base' type='submit'>
                      {" "}
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5'>
              <div className='contact-information-wrap'>
                <h3>CONTACT INFORMATION</h3>
                <div className='single-contact-info-wrap'>
                  <h6>Contact Number:</h6>
                  <div className='media'>
                    <div className='icon'>
                      <FaPhoneAlt />
                    </div>
                    <div className='media-body'>
                      <p>+91 98400 54814</p>

                      <p>+91 73977 55655</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap'>
                  <h6>Mail Address:</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#080C24" }}>
                      <FaRegEnvelope />
                    </div>
                    <div className='media-body'>
                      <p>arun@brandmonk.biz</p>
                      <p>work@brandmonk.biz</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap mb-0'>
                  <h6>Office Location:</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className='media-body'>
                      <p>Brandmonk Food & Beverages PVT LTD.
Nishanth Plaza, 2nd Floor, 
</p>
                      <p>E Venkatasamy Rd, R S Puram West,
Coimbatore, Tamil Nadu – 641002</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}

      <div className='contact-g-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3475109212923!2d76.94793557394819!3d11.012532154796517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c48c74a221%3A0xaa942720f64661aa!2sBrand%20Monk%20FnB%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1686566061891!5m2!1sen!2sins' />
      </div>
    </>
  );
};

export default ContactInner;
