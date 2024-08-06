
import CopyrightFooter from "./CopyrightFooter";
import FooterContent from "./FooterContent";
import logo from "../../../Images/logo.png"
import { Link } from "react-router-dom";
const index = ({ footerStyle = "" }) => {
  return (
    <footer className={`main-footer ${footerStyle} text-white`} style={{backgroundColor:"#4C3957"}} >
      <div className="auto-container text-white">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up text-white">
          <div className="row text-white">
            <div className="big-column col-xl-4 col-lg-3 col-md-12 text-white">
              <div className="footer-column about-widget text-white">
              <div className="me-10">
              <Link to="/">
              <img
                                        alt="brand"
                                        src={logo}
                                       className=" w-28"
                                    />
              </Link>
            </div>
                <p className="phone-num text-white">
                  <span>Call us </span>
                  <a href="thebeehost@support.com" className="text-white">123 456 7890</a>
                </p>
                <p className="address text-white">
                  329 Queensberry Street, North Melbourne VIC
                  <br /> 3051, Australia. <br />
                  <a href="mailto:support@abroadium.com" className="email text-white">
                    support@abroadium.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer left widget */}

            <div className="big-column col-xl-8 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent />
              </div>
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
    //   {/* <!-- End Main Footer --> */}
  );
};

export default index;
