import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterTwo from "../components/FooterTwo";
import WhyChooseUsTwo from "../components/WhyChooseUsTwo";
import FeatureOne from "../components/FeatureOne";
import TransportServiceArea from "../components/TransportServiceArea";
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const CounterTwo = React.lazy(() => import("../components/CounterTwo"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarTwo = React.lazy(() => import("../components/NavbarTwo"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const SkillOne = React.lazy(() => import("../components/SkillOne"));
const TeamOne = React.lazy(() => import("../components/TeamOne"));
const TestimonialTwo = React.lazy(() => import("../components/TestimonialTwo"));
const VideoAreaOne = React.lazy(() => import("../components/VideoAreaOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarTwo />

          {/* Breadcrumb */}
          <Breadcrumb title={"ABOUT US"} />

          {/* About One */}
          <div className='pd-top-120 pd-bottom-120'>
            <AboutOne />
          </div>
        
          {/* Counter One */}

          <div className='fact-area' style={{ background: "#f9f9f9" }}>
            <CounterTwo />
          </div>

          {/* Skill One */}
          <SkillOne />
          <TransportServiceArea />

{/* Why Choose Us Two */}
<WhyChooseUsTwo />
<FeatureOne/>

          {/* Video Area One */}
          <VideoAreaOne />

          {/* Team One */}
          <div className='pd-bottom-80'>
            <TeamOne />
          </div>

          {/* Testimonial Two */}
          <TestimonialTwo />

          {/* Partner One */}
          <PartnerOne />

          {/* Footer One */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
