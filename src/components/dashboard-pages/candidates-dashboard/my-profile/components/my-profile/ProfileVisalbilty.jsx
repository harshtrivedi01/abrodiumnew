import React, { useState, useEffect } from "react";
import axios from "axios";
import { Constant } from "@/utils/constant/constant";
import { toast } from "react-toastify";

const ProfileVisalbilty = ({ onNext }) => {
  const token = localStorage.getItem(Constant.USER_TOKEN);
  const baseurl = "https://api.sentryspot.co.uk/api/jobseeker/";

  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [timePeriodStart, setTimePeriodStart] = useState("");
  const [timePeriodEnd, setTimePeriodEnd] = useState("");
  const [isPresent, setIsPresent] = useState(0); // 1 for present, 0 for not present
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
        toast.error(error.message);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = [
      {
        designation,
        organization,
        annual_salary_id: parseInt(selectSalarytype, 10), // Convert to integer
        time_period_start: timePeriodStart,
        time_period_end: timePeriodEnd,
        is_present: isPresent,
      }
    ];

    try {
      await axios.put(`${baseurl}user-profile-professional`, payload, {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json'
        },
      });
      toast.success("Professional details saved successfully!");
      onNext();  // Move to the next step
    } catch (error) {
      toast.error("Failed to save professional details.");
    }
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="Enter your designation"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Organization</label>
          <input
            type="text"
            name="organization"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Enter organization name"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Salary-Range (INR)</label>
          <select
            id="Salarytype"
            name="Salarytype"
            value={selectSalarytype}
            onChange={(e) => setselectSalarytype(e.target.value)}
          >
            <option value="">Select a Salary</option>
            {Salarytype.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
  <label>Time Period Start</label>
  <input
    type="date"
    name="timePeriodStart"
    value={timePeriodStart}
    onChange={(e) => setTimePeriodStart(e.target.value)}
    required
    style={{backgroundColor:"#F0F5F7"}}
    className="form-control text-lg p-3 rounded-lg border-0 w-full font-thin" // Added to match the style
    placeholder="Select start date"  // Added for consistency
  />
</div>

<div className="form-group col-lg-6 col-md-12">
  <label>Time Period End</label>
  <input
    type="date"
    name="timePeriodEnd"
    value={timePeriodEnd}
    onChange={(e) => setTimePeriodEnd(e.target.value)}
    required={!isPresent}
    disabled={isPresent === 1}
    style={{backgroundColor:"#F0F5F7"}}
    className="form-control text-lg p-3 rounded-lg border-0 w-full font-thin"  // Added to match the style
    placeholder="Select end date"  // Added for consistency
  />
</div>


        <div className="form-group col-lg-6 col-md-12">
          <label>
            <input
              type="checkbox"
              checked={isPresent === 1}
              onChange={(e) => setIsPresent(e.target.checked ? 1 : 0)}
            />
            Currently working here
          </label>
        </div>

        <div className="form-group col-lg-7 col-md-12">
          <button type="submit" className="theme-btn btn-style-one bg-blue-950">
            Save & Next ➤
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileVisalbilty;
