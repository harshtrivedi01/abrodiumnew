import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import candidatesMenuData from "../../data/candidatesMenuData";
import HeaderNavContent from "./HeaderNavContent";
import { isActiveLink } from "../../utils/linkActiveChecker";
import logo from "../../Images/logo.png";
import { useLocation } from "react-router-dom";
const DashboardCandidatesHeader = () => {
  const { pathname } = useLocation();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 0) {
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
      className={`main-header header-shaddow  ${navbar ? "fixed-header " : ""}`}
    >
      <div className="container-fluid">
        {/* <!-- Main box --> */}
        <div className="main-box">
          {/* <!--Nav Outer --> */}
          <div className="nav-outer">
            <div className="logo-box">
              <div className="me-10">
                <Link to="/">
                  <img alt="brand" src="https://blog.abroadium.com/wp-content/uploads/2024/03/cropped-Ab-e1709974122683-300x91.png" className="m-3 w-28" />
                </Link>
              </div>
            </div>
            {/* End .logo-box */}

            <HeaderNavContent />
            {/* <!-- Main Menu End--> */}
          </div>
          {/* End .nav-outer */}

          <div className="outer-box">
            <button className="menu-btn">
              <span className="count">1</span>
              <span className="icon la la-heart-o"></span>
            </button>
            {/* wishlisted menu */}

            <button className="menu-btn">
              <span className="icon la la-bell"></span>
            </button>
            {/* End notification-icon */}

            {/* <!-- Dashboard Option --> */}
            <div className="dropdown dashboard-option">
              <a
                className="dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  alt="avatar"
                  className="thumb"
                  src="/images/resource/candidate-1.png"
                />
                <span className="name">My Account</span>
              </a>

              <ul className="dropdown-menu">
                {candidatesMenuData.map((item) => (
                  <li
                    className={`${
                      isActiveLink(item.routePath, pathname) ? "active" : ""
                    } mb-1`}
                    key={item.id}
                  >
                    <Link to={item.routePath}>
                      <i className={`la ${item.icon}`}></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* End dropdown */}
          </div>
          {/* End outer-box */}
        </div>
      </div>
    </header>
  );
};

export default DashboardCandidatesHeader;
