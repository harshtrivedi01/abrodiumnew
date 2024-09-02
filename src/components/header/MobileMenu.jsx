import { Link } from "react-router-dom";
import MobileSidebar from "./mobile-sidebar";
import logo from "../../Images/logo.png";

const MobileMenu = () => {
  return (
    // <!-- Main Header-->
    <header className="main-header main-header-mobile"  style={{backgroundColor:"#4C3957"}}> 
      <div className="auto-container">
        {/* <!-- Main box --> */}
        <div className="inner-box">
          <div className="nav-outer">
            <div className="logo-box">
              <div className="me-10">
                <Link to="/">
                <img alt="brand" src="https://blog.abroadium.com/wp-content/uploads/2024/03/cropped-Ab-e1709974122683-300x91.png" className="m-3 w-28 " />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <MobileSidebar />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <div className="login-box">
              <a
                href="#"
                className="call-modal"
                data-bs-toggle="modal"
                data-bs-target="#loginPopupModal"
              >
                <span className="icon icon-user"></span>
              </a>
            </div>
            {/* login popup end */}

            <a
              href="#"
              className="mobile-nav-toggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMenu"
            >
              <span className="flaticon-menu-1"></span>
            </a>
            {/* right humberger menu */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileMenu;
