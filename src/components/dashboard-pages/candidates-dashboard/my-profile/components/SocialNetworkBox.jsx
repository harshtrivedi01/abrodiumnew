import { useState, useEffect } from "react";
import { Constant } from "@/utils/constant/constant";


const SocialNetworkBox = ({ onNext }) => {

  const token = localStorage.getItem(Constant.USER_TOKEN);
  const baseurl ="https://api.sentryspot.co.uk/api/jobseeker/";

  
  const [Salarytype, setSalarytype] = useState([]);
  const [selectSalarytype, setselectSalarytype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}salary-range`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setSalarytype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
 
    onNext();
  };
  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Institute</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Batch</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Course Type</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Degree</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one bg-blue-950">
          Save & Next ➤
          </button>
        </div>
      </div>
    </form>
  );
};

export default SocialNetworkBox;
