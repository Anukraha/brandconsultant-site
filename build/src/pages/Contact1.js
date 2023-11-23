import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterTwo from "../components/FooterTwo";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactInner1 = React.lazy(() => import("../components/ContactInner1"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarTwo = React.lazy(() => import("../components/NavbarTwo"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const Contact1 = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarTwo />

          {/* Breadcrumb */}
          <Breadcrumb title={"CAREER"} />

          {/* Breadcrumb */}
          <ContactInner1 />

          {/* Footer One */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Contact1;
