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
    <header style={{backgroundColor:"#4C3957"}}
      className={`main-header  text-white font-semibold  ${
        navbar ? "fixed-header animated slideInDown" : ""
      }`}
    >
      {/* <!-- Main box --> */}
      <div className="main-box text-white font-semibold">
        {/* <!--Nav Outer --> */}
        <div className="nav-outer">
          <div className="">
            <div className="me-10">
              <Link to="/">
              <img
                                        alt="brand"
                                        src={logo}
                                       className="h- w-40"
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
          <Link to="/candidates-dashboard/cv-manager" style={{fontWeight:"600"}} className="upload-cv text-white font-semibold font-semibold">
            Upload your CV
          </Link>
          {/* <!-- Login/Register --> */}
          <div className="btn-box">
            <a
          
              className="theme-btn btn-style-three call-modal  text-blue-950"
              data-bs-toggle="modal"
            
            > {/* data-bs-target="#loginPopupModal" */}
              Login / Register
            </a>
            <Link
              to="/employers-dashboard/post-jobs"
              className="theme-btn btn-style-one bg-blue-950 text-white font-semibold"
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
