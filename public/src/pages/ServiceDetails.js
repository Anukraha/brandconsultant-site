import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterTwo from "../components/FooterTwo";
import NavbarTwo from "../components/NavbarTwo";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);

const ServiceDetailsInner = React.lazy(() =>
  import("../components/ServiceDetailsInner")
);
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const ServiceDetails = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarTwo />

          {/* Breadcrumb */}
          <Breadcrumb title={"SERVICES DETAILS"} />

          {/* Service Details Inner */}
          <ServiceDetailsInner />

          {/* Footer One */}
          <FooterTwo />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default ServiceDetails;
