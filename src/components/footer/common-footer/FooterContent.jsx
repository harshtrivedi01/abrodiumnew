import { Link } from "react-router-dom";
import footerContent from "../../../data/footerContent";

const FooterContent = () => {
  return (
    <>
      {footerContent.map((item) => (
        <div
          className="footer-column col-lg-3 col-md-6 col-sm-12 text-white"
          key={item.id}
        >
          <div className="footer-widget links-widget text-white">
            <h4 className="widget-title text-white">{item.title}</h4>
            <div className="widget-content text-white">
              <ul className="list text-white">
                {item?.menuList?.map((menu, i) => (
                  <li key={i}>
                    <Link className="text-white" to={menu.route}>{menu.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FooterContent;
