import { Link } from "react-router-dom";
import jobs from "../../../../../data/job-featured.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Constant } from "@/utils/constant/constant.js";

const JobAlertsTable = () => {
  const token = localStorage.getItem(Constant.USER_TOKEN);

const[saved,setsaved]=useState([]);


useEffect(()=>{

axios.get(`https://api.sentryspot.co.uk/api/jobseeker/view-favorite-jobs?is_favorite=1`,{
  headers:{
Authorization: token
  }})
  .then((response)=>{
    setsaved(response.data.data)
    
  })

  .catch((err)=>{
    console.log(err)
  })

},[])






  return (
    <div className="tabs-box">
      <div className="widget-title">
        <h4>My Saved Jobs</h4>

        <div className="chosen-outer">
          {/* <!--Tabs Box--> */}
          <select className="chosen-single form-select">
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
            <option>Last 16 Months</option>
            <option>Last 24 Months</option>
            <option>Last 5 year</option>
          </select>
        </div>
      </div>
      {/* End filter top bar */}

      {/* Start table widget content */}
      <div className="widget-content">
        <div className="table-outer">
          <div className="table-outer">
            <table className="default-table manage-job-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>
              {saved.length === 0 ? (
        <p className="text-center text-xl">No Saved jobs available at the moment. Please Save jobs & check back later.</p>
      ) : (
             
              <tbody>
                {saved.map((item) => (
                  <tr key={item.id} value={item.id}>
                    <td>
                      {/* <!-- Job Block --> */}
                      <div className="job-block">
                        <div className="inner-box">
                          <div className="content">
                            <span className="company-logo">
                              <img
                               className="rounded-lg h-12"
                                src={item.logo || "https://i.pinimg.com/564x/76/e3/2a/76e32aac67331df783916caaadd9a448.jpg"}
                                alt="logo"
                              />
                            </span>
                            <h4>
                              <Link to={`/job-single-v3/${item.id}`}>
                                {item.job_title}
                              </Link>
                            </h4>
                            <ul className="job-info">
                              <li>
                                <span className="icon flaticon-briefcase"></span>
                                {item.specialisms}
                              </li>
                              <li>
                                <span className="icon flaticon-map-locator"></span>
                                {item.complete_address}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.email_address}</td>
                    <td>{item.complete_address}</td>
                    <td>
                      <div className="option-box">
                        <ul className="option-list">
                          <li>
                            <button data-text="View Aplication">
                              <span className="la la-eye"></span>
                            </button>
                          </li>
                          <li>
                            <button data-text="Delete Aplication">
                              <span className="la la-trash"></span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                )) }
              </tbody>)} 
            </table>
          </div>
        </div>
      </div>
      {/* End table widget content */}
    </div>
  );
};

export default JobAlertsTable;
