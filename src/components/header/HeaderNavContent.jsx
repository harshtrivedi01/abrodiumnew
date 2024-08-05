

import { Link } from "react-router-dom";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";

import { useLocation } from "react-router-dom";
const HeaderNavContent = () => {
  const { pathname } = useLocation();
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            className={`${
              isActiveParent(homeItems, pathname) ? "" : ""
            } dropdown`}
          >
            <span>Home</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link to={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li
            className={`${
              isActiveParent(homeItems, pathname) ? "current" : ""
            } dropdown`}
          >
            <span>AI Resume</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
              <li
                className={
                  pathname?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link to="/employers-dashboard/dashboard">
                Resume Score
                </Link>
              </li>
              <li
                className={
                  pathname?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link to="/employers-dashboard/dashboard">
                Auto Data Parsing


                </Link>
              </li>
              <li
                className={
                  pathname?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link to="/employers-dashboard/dashboard">
                  Employers Dashboard
                </Link>
              </li>
              </div>
            </div>
          </li>
          {/* End homepage menu items */}
          <Link to="/job-list-v7">
          <li
            className={`${
              isActiveParent(findJobItems, pathname) ? "current" : ""
            } dropdown has-mega-menu me-5`}
            id="has-mega-menu"
          >
            <span>Jobs</span>
            <div className="mega-menu">
              <div className="mega-menu-bar row">
                {/*{findJobItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <h3>{item.title}</h3>
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link to={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))} */}
              </div>
            </div>
          </li></Link>
          {/* End findjobs menu items */}

          <li
            className={`${
              isActiveParent(employerItems, pathname) ||
              pathname?.split("/")[1] === "employers-dashboard"
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Employers</span>
            <ul>
              {/*{employerItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, pathname)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link to={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))} */}
               <li
                className={
                  pathname?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link to="/employers-list-v2">
                  Employers List
                </Link>
              </li>
              <li
                className={
                  pathname?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link to="/employers-single-v1/1">
                  Employers Listing detail page
                </Link>
              </li>
              <li
                className={
                  pathname?.includes("/employers-dashboard")
                    ? "current"
                    : ""
                }
              >
                <Link to="/employers-dashboard/dashboard">
                  Employers Dashboard
                </Link>
              </li>
            </ul>
          </li>
          {/* End Employers menu items */}

          <li
            className={`${
              isActiveParent(candidateItems, pathname) ||
              pathname?.split("/")[1] === "candidates-dashboard"
                ? "current"
                : ""
                ? "current"
                : ""
            } dropdown`}
          >
            <span>Candidates</span>
            <ul>
              {/*{candidateItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={
                      isActiveParentChaild(item.items, pathname)
                        ? "current"
                        : ""
                    }
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link to={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))} */}
              <li
                className={
                  pathname?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link to="/candidates-list-v2">
                  Candidates List
                </Link>
              </li>
              <li
                className={
                  pathname?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link to="/candidates-single-v1/1">
                  Candidates Listing detail page
                </Link>
              </li>
              <li
                className={
                  pathname?.includes("/candidates-dashboard/")
                    ? "current"
                    : ""
                }
              >
                <Link to="/candidates-dashboard/dashboard">
                  Candidates Dashboard
                </Link>
              </li>
            </ul>
          </li>
          {/* End Candidates menu items */}

          <li
            className={`${
              isActiveParentChaild(blogItems, pathname) ? "current" : ""
            } dropdown`}
          >
            <span>Resources</span>
            <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, pathname) ? "current" : ""
                  }
                  key={i}
                >
                  <Link to={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End Blog menu items */}

          {/*<li
            className={`${
              isActiveParentChaild(pageItems, pathname) ||
              isActiveParentChaild(shopItems[0].items, pathname)
                ? "current "
                : ""
            } dropdown`}
          >
            <span>Pages</span>
            <ul>
              {shopItems.map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(shopItems[0].items, pathname)
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.title}
                  </span>
                  <ul>
                    {item.items.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, pathname)
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link to={menu.routePath}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, pathname) ? "current" : ""
                  }
                  key={i}
                >
                  <Link to={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
