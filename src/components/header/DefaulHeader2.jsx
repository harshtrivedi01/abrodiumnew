import logo from "../../Images/logo.png"


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderNavContent from "./HeaderNavContent";


const DefaulHeader2 = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    // <!-- Main Header-->
    <header 
      className={`main-header font-bold ${
        navbar ? "fixed-header animated slideInDown " : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="logo-box">
            <div className="me-10">
              <Link to="/">
              <img
                                        alt="brand"
                                        src={logo}
                                       className="h-28 w-28"
                                    />
              </Link>
            </div>
          </div>
          {/* End .logo-box */}

          <HeaderNavContent />
          {/* <!-- Main Menu End--> */}
        </div>
        {/* End .nav-outer */}

        <div className="outer-box">
          {/* <!-- Add Listing --> */}
          <Link to="/candidates-dashboard/cv-manager" className="upload-cv text-blue-950">
            Upload your CV
          </Link>
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
              href="#"
              className="theme-btn btn-style-three call-modal p-3   text-blue-950"
              data-bs-toggle="modal"
              data-bs-target="#loginPopupModal"
            >
              Login / Register
            </a>
            <Link
              to="/employers-dashboard/post-jobs"
              className="theme-btn btn-style-one bg-blue-950 text-white"
            >
              Job Post
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader2;
