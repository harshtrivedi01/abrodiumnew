
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png"
const SidebarHeader = () => {
  return (
    <div className="pro-header"  style={{backgroundColor:"#4C3957"}}>
      <Link to="/">
      <img alt="brand" src="https://blog.abroadium.com/wp-content/uploads/2024/03/cropped-Ab-e1709974122683-300x91.png" className="m-3 w-28 " />

      </Link>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
