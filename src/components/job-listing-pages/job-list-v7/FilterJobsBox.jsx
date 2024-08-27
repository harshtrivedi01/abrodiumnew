import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import jobs from "../../../data/job-featured";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  addDatePosted,
  addDestination,
  addKeyword,
  addLocation,
  addPerPage,
  addSalary,
  addSort,
  addTag,
  clearExperience,
  clearJobType,
} from "../../../features/filter/filterSlice";
import {
  clearDatePostToggle,
  clearExperienceToggle,
  clearJobTypeToggle,
} from "../../../features/job/jobSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import { Constant } from "@/utils/constant/constant";
import { useParams } from "react-router-dom";
const FilterJobsBox = () => {
  const token = localStorage.getItem(Constant.USER_TOKEN);

  const { jobList, jobSort } = useSelector((state) => state.filter);
  const {
    keyword,
    location,
    destination,
    category,
    jobType,
    datePosted,
    experience,
    salary,
    tag,
  } = jobList || {};

  const { sort, perPage } = jobSort;

  const dispatch = useDispatch();

  // keyword filter on title
  const keywordFilter = (item) =>
    keyword !== ""
      ? item.jobTitle.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
      : item;

  // location filter
  const locationFilter = (item) =>
    location !== ""
      ? item?.location
          ?.toLocaleLowerCase()
          .includes(location?.toLocaleLowerCase())
      : item;

  // location filter
  const destinationFilter = (item) =>
    item?.destination?.min >= destination?.min &&
    item?.destination?.max <= destination?.max;

  // category filter
  const categoryFilter = (item) =>
    category !== ""
      ? item?.category?.toLocaleLowerCase() === category?.toLocaleLowerCase()
      : item;

  // job-type filter
  const jobTypeFilter = (item) =>
    jobType?.length !== 0 && item?.jobType !== undefined
      ? jobType?.includes(
          item?.jobType[0]?.type.toLocaleLowerCase().split(" ").join("-")
        )
      : item;

  // date-posted filter
  const datePostedFilter = (item) =>
    datePosted !== "all" && datePosted !== ""
      ? item?.created_at
          ?.toLocaleLowerCase()
          .split(" ")
          .join("-")
          .includes(datePosted)
      : item;

  // experience level filter
  const experienceFilter = (item) =>
    experience?.length !== 0
      ? experience?.includes(
          item?.experience?.split(" ").join("-").toLocaleLowerCase()
        )
      : item;

  // salary filter
  const salaryFilter = (item) =>
    item?.totalSalary?.min >= salary?.min &&
    item?.totalSalary?.max <= salary?.max;

  // tag filter
  const tagFilter = (item) => (tag !== "" ? item?.tag === tag : item);

  // sort filter
  const sortFilter = (a, b) =>
    sort === "des" ? a.id > b.id && -1 : a.id < b.id && -1;

  const [Jobs, setJobs] = useState([]);

  useEffect(() => {
    // Construct query parameters based on selected filters
    const queryParams = new URLSearchParams();

    if (jobType?.length) queryParams.append("job_type_id", jobType.join(","));
    if (salary?.min || salary?.max) {
      queryParams.append("offered_salary", `${salary.max}`);
    }
    if (experience) queryParams.append("experience", experience);
    if (location) queryParams.append("city_id", location);
    if (category) queryParams.append("category_id", category);
    // Add other filters similarly

    axios
      .get(
        `https://api.sentryspot.co.uk/api/jobseeker/job-list?${queryParams.toString()}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((response) => {
        if (response.data.status === "success") {
          setJobs(response.data.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the job list!", error);
      });
  }, [
    jobType,
    salary,
    experience,
    location,
    category /* Add other filters here */,
  ]);

  // Your existing content logic
  let content = Jobs
    ?.sort(sortFilter)
    ?.map((item) => (
      <div
        className="job-block-four col-lg-12 col-md-6 col-sm-12"
        key={item.id}
      >
        <div className="inner-box text-start ps-5 p-0">
          <span className="flex align-middle">
            <img
              src={item.logo || "https://img.freepik.com/premium-photo/intelligent-logo-simple_553012-47516.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717372800&semt=ais_user"}
              alt="featured job"
              className="absolute -left-10 top-7 rounded-xl border-2 p-1 h-20 bg-black"
            />
            <h4 className="pt-8 ps-2 flex justify-between w-full">
              {console.log(item.job_title, "data")}
              <Link to={`/job-single-v3/${item.id}`}>{item.job_title}</Link>
              <div className="absolute right-0">
                <button className="border-1 p-1 px-2 border-blue-800 rounded-full me-2">
                  <i className="fas fa-save text-blue-500"></i>
                </button>
                <button className="border-1 p-1 px-2 border-blue-800 rounded-full me-2">
                  <i className="fas fa-heart text-blue-500"></i>
                </button>
              </div>
            </h4>
          </span>

          <div className="location">
            <span className="icon flaticon-map-locator"></span>
            {item.complete_address}
          </div>

          <div className="flex">
            <ul className="post-tags text-start">
              <li className="border">
                <a href="#">Specialisms: {item.specialisms}</a>
              </li>
              <li className="border">
                <a href="#">Qualification: {item.qualification}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      // End all jobs
    ));

  // sort handler
  const sortHandler = (e) => {
    dispatch(addSort(e.target.value));
  };

  // per page handler
  const perPageHandler = (e) => {
    const pageData = JSON.parse(e.target.value);
    dispatch(addPerPage(pageData));
  };

  // clear all filters
  const clearAll = () => {
    dispatch(addKeyword(""));
    dispatch(addLocation(""));
    dispatch(addDestination({ min: 0, max: 100 }));
    dispatch(addCategory(""));
    dispatch(clearJobType());
    dispatch(clearJobTypeToggle());
    dispatch(addDatePosted(""));
    dispatch(clearDatePostToggle());
    dispatch(clearExperience());
    dispatch(clearExperienceToggle());
    dispatch(addSalary({ min: 0, max: 20000 }));
    dispatch(addTag(""));
    dispatch(addSort(""));
    dispatch(addPerPage({ start: 0, end: 0 }));
  };
  return (
    <>
      <div className="ls-switcher">
        <div className="showing-result">
          <div className="show-1023">
            <button
              type="button"
              className="theme-btn toggle-filters "
              data-bs-toggle="offcanvas"
              data-bs-target="#filter-sidebar"
            >
              <span className="icon icon-filter"></span> Filter
            </button>
          </div>
          {/* Collapsible sidebar button */}

          <div className="text">
            Show <strong>{content?.length}</strong> jobs
          </div>
        </div>
        {/* End showing-result */}

        <div className="sort-by">
          {keyword !== "" ||
          location !== "" ||
          destination?.min !== 0 ||
          destination?.max !== 100 ||
          category !== "" ||
          jobType?.length !== 0 ||
          datePosted !== "" ||
          experience?.length !== 0 ||
          salary?.min !== 0 ||
          salary?.max !== 20000 ||
          tag !== "" ||
          sort !== "" ||
          perPage.start !== 0 ||
          perPage.end !== 0 ? (
            <button
              onClick={clearAll}
              className="btn btn-danger text-nowrap me-2"
              style={{ minHeight: "45px", marginBottom: "15px" }}
            >
              Clear All
            </button>
          ) : undefined}

          <select
            value={sort}
            className="chosen-single form-select"
            onChange={sortHandler}
          >
            <option value="">Sort by (default)</option>
            <option value="asc">Newest</option>
            <option value="des">Oldest</option>
          </select>
          {/* End select */}

          <select
            onChange={perPageHandler}
            className="chosen-single form-select ms-3 "
            value={JSON.stringify(perPage)}
          >
            <option
              value={JSON.stringify({
                start: 0,
                end: 0,
              })}
            >
              All
            </option>
            <option
              value={JSON.stringify({
                start: 20,
                end: 26,
              })}
            >
              25 per page
            </option>
            <option
              value={JSON.stringify({
                start: 25,
                end: 31,
              })}
            >
              30 per page
            </option>
            <option
              value={JSON.stringify({
                start: 30,
                end: 36,
              })}
            >
              35 per page
            </option>
          </select>
          {/* End select */}
        </div>
      </div>
      {/* End top filter bar box */}

      <div className="row m-3">{content}</div>
      {/* End .row */}

      <Pagination />
      {/* <!-- End Pagination --> */}
    </>
  );
};

export default FilterJobsBox;
