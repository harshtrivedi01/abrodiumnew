{/*
  import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";
import ResumeUpload from "./ResumeUpload";

const index = ({ onNext }) => {
  return (
    <div className="widget-content">
     {/* <LogoUpload /> 
           <ResumeUpload />



 
 <FormInfoBox />
 
</div>
);
};

export default index;

  */}




import React, { useState } from "react";
import Select from "react-select";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Index = ({ onNext }) => {
  const current = new Date().toISOString().split("T")[0];
  const [logImg, setLogImg] = useState(null);

  const logImgHander = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogImg(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // After successful submission, go to the next tab
    onNext();
  };

  const catOptions = [
    { value: "Banking", label: "Banking" },
    { value: "Digital & Creative", label: "Digital & Creative" },
    { value: "Retail", label: "Retail" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Managemnet", label: "Managemnet" },
    { value: "Accounting & Finance", label: "Accounting & Finance" },
    { value: "Digital", label: "Digital" },
    { value: "Creative Art", label: "Creative Art" },
  ];

  return (
    <form onSubmit={handleSubmit} className="default-form">
      <div className="row">
        {/* Profile Picture Upload */}
        <div className="form-group col-lg-6 col-md-12 flex justify-center">
          <div>
            <div className="rounded-full border w-32 h-32 flex items-center justify-center">
              <input
                className="uploadButton-input hidden"
                type="file"
                name="attachments[]"
                accept="image/*"
                id="upload"
                required
                onChange={logImgHander}
              />
              <label
                className="uploadButton-button cursor-pointer flex items-center justify-center"
                htmlFor="upload"
              >
                {logImg ? (
                  <img
                    src={logImg}
                    alt="Uploaded"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <i className="fas fa-camera text-6xl"></i>
                  </div>
                )}
              </label>
            </div>
            <div className="bg-blue-800 w-28 mt-2 py-1 ms-2 text-white text-sm text-center rounded-lg">
              Add Picture
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Jerome"
            required
            className="border rounded-none"
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <input type="text" name="gender" placeholder="Gender" required />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Industry</label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="industry"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="0 123 456 7890"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
  <label>Date of Birth</label>
  <input
    type="date"
    name="birthdate"
    max={current}
    required
    className="border rounded-none p-2 w-full"
    placeholder="Enter BirthDate"
  />
</div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Location</label>
          <input type="text" name="location" placeholder="Location" required />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Preferred Location</label>
          <input
            type="text"
            name="preferred_location"
            placeholder="Preferred Location"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Functional Area</label>
          <input
            type="text"
            name="functional_area"
            placeholder="Functional Area"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Notice Period</label>
          <input
            type="text"
            name="notice_period"
            placeholder="Notice Period"
            required
          />
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Annual Salary (INR)</label>
          <select className="chosen-single form-select" required>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        <div className="form-group col-lg-3 col-md-12">
          <label>Expected Salary (INR)</label>
          <select className="chosen-single form-select" required>
            <option>120-350 K</option>
            <option>40-70 K</option>
            <option>50-80 K</option>
            <option>60-90 K</option>
            <option>70-100 K</option>
            <option>100-150 K</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input
            type="text"
            name="experience"
            placeholder="5-10 Years"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one bg-blue-900">
          Save & Next ➤
          </button>
        </div>
      </div>
    </form>
  );
};

export default Index;
