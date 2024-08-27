import { useState, useEffect } from "react";
import { Constant } from "@/utils/constant/constant";
import axios from "axios";

const SocialNetworkBox = ({ onNext }) => {

  const token = localStorage.getItem(Constant.USER_TOKEN);
  const baseurl ="https://api.sentryspot.co.uk/api/jobseeker/";


  const [coursetype, setcoursetype] = useState([]);
  const [selectcoursetype, setselectcoursetype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}course-types`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setcoursetype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);


  const [Degreetype, setDegreetype] = useState([]);
  const [selectDegreetype, setselectDegreetype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}degree`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setDegreetype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);


  const [Batchtype, setBatchtype] = useState([]);
  const [selectBatchtype, setselectBatchtype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}years`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setBatchtype(response.data.data);
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
          <select
          id="Batch"
          value={selectBatchtype}
          onChange={(e)=> setselectBatchtype(e.target.value)}>
            <option value="">select a Batch</option>
            {Batchtype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Course Type</label>
          <select
          id="course"
          value={selectcoursetype}
          onChange={(e)=> setselectcoursetype(e.target.value)}>
            <option value="">select a course</option>
            {coursetype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Degree</label>
          <select
          id="Degree"
          value={selectDegreetype}
          onChange={(e)=> setselectDegreetype(e.target.value)}>
            <option value="">select a Degree</option>
            {Degreetype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
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
