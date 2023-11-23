import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterTwo from "../components/FooterTwo";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarTwo = React.lazy(() => import("../components/NavbarTwo"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const Contact = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarTwo />

          {/* Breadcrumb */}
          <Breadcrumb title={"CONTACT US"} />

          {/* Breadcrumb */}
          <ContactInner />

          {/* Footer One */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Contact;
