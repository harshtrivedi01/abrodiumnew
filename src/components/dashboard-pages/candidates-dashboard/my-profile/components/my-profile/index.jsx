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

  import PhoneInput from 'react-phone-input-2';
  import 'react-phone-input-2/lib/style.css';

import { useEffect } from "react";
import React, { useState } from "react";
import Select from "react-select";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import Header from "@/components/home-10/Header";
import { Constant } from "@/utils/constant/constant";
import { toast } from "react-toastify";

const Index = ({ onNext }) => {
  const token = localStorage.getItem(Constant.USER_TOKEN);
  const baseurl ="https://api.sentryspot.co.uk/api/jobseeker/";


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

  const [workplaceTypes, setWorkplaceTypes] = useState([]);
  const [selectedWorkplace, setSelectedWorkplace] = useState('');

  useEffect(() => {
    // Fetch workplace types from API
    axios
      .get(`${baseurl}workplace-types`, {
        headers: {
          'Authorization': token, // Assuming you're storing the token in localStorage
        },
      })
      .then((response) => {
        setWorkplaceTypes(response.data.data); // Adjust the path according to the response structure
      })
      .catch((error) => {
        console.error('Error fetching workplace types:', error);
      });
  }, []);

  const [jobtype, setjobstype] = useState([]);
  const [selectjobtype, setselectjobtype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}job-types`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setjobstype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  const [Experiencetype, setExperiencetype] = useState([]);
  const [selectExperiencetype, setselectExperiencetype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}experience-level`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setExperiencetype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);


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

  const [Gendertype, setGendertype] = useState([]);
  const [selectGendertype, setselectGendertype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}genders`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setGendertype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  const [Functionaltype, setFunctionaltype] = useState([]);
  const [selectFunctionaltype, setselectFunctionaltype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}functional-area`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setFunctionaltype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);


  const [industriestype, setindustriestype] = useState([]);
  const [selectindustriestype, setselectindustriestype] = useState("");

  useEffect(() => {
    axios
      .get(`${baseurl}industries`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setindustriestype(response.data.data);
      })
      .catch((error) => {
        toast.error(error);
      });
  }, []);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await axios.get(
        `${baseurl}countries`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCountries(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchStates = async (countryId) => {
    try {
      const response = await axios.get(
        `${baseurl}stats/${countryId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setStates(response.data.data);
      setCities([]); // Reset cities when country changes
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const response = await axios.get(
        `${baseurl}cities/${stateId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCities(response.data.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    fetchStates(countryId);
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setSelectedState(stateId);
    fetchCities(stateId);
  };


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
          <label>Workspace</label>
          <select
        id="workplaceType"
        value={selectedWorkplace}
        onChange={(e) => setSelectedWorkplace(e.target.value)}
      >
        <option value="">Select a workplace type</option>
        {workplaceTypes.map((type) => (
          <option key={type.id} value={type.id}>
            {type.name} {/* Adjust based on actual data structure */}
          </option>
        ))}
      </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Job-Type</label>
          <select
          id="jobtype"
          value={selectjobtype}
          onChange={(e)=> setselectjobtype(e.target.value)}>
            <option value="">select a job-type</option>
            {jobtype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          </div>      

          

          <div className="form-group col-lg-6 col-md-12">
  <label>Phone Number</label>
  <PhoneInput
    country={'us'} // Set default country here
    
    inputStyle={{
      width: "100%",
      borderRadius: "10px",
      border: "none",
      height: "calc(2.5em + 1rem + 3px)",
     
      fontSize: "1rem",
      lineHeight: "1.5",
     
      backgroundColor: "#F0F5F7",
      backgroundClip: "padding-box",
    }}
    containerStyle={{ width: "100%" }}
    buttonStyle={{
      borderRadius: "none",
      border: "none",
      backgroundColor: "#f8f9fa",
    }}
  />
</div>


        <div className="form-group col-lg-6 col-md-12">
          <label>Gender</label>
          <select
          id="Gender"
          value={selectGendertype}
          onChange={(e)=> setselectGendertype(e.target.value)}>
            <option value="">select a Gender</option>
            {Gendertype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
          </div> 

        <div className="form-group col-lg-6 col-md-12">
  <label>Date of Birth</label>
  <input
    type="date"
    name="birthdate"
    max={current}
    required
    style={{backgroundColor:"#F0F5F7"}}
    className=" rounded-lg p-2 py-3 text-lg border-0 w-full font-thin"
    placeholder="Enter BirthDate"
  />
</div>


       <div className="form-group col-lg-6 col-md-12">
          <label>Country</label>
          <select
            name="country"
            value={selectedCountry}
            onChange={handleCountryChange}
            required
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* State Dropdown */}
        <div className="form-group col-lg-6 col-md-12">
          <label>State</label>
          <select
            name="state"
            value={selectedState}
            onChange={handleStateChange}
            required
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown */}
        <div className="form-group col-lg-6 col-md-12">
          <label>City</label>
          <select
            name="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            required
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Functional Area</label>
          <select
          id="Functional"
          value={selectFunctionaltype}
          onChange={(e)=> setselectFunctionaltype(e.target.value)}>
            <option value="">select a Functional Area</option>
            {Functionaltype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
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

        <div className="form-group col-lg-6 col-md-12">
          <label>Salary (INR)</label>
          <select
          id="Salarytype"
          value={selectSalarytype}
          onChange={(e)=> setselectSalarytype(e.target.value)}>
            <option value="">select a Salary</option>
            {Salarytype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        

        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <select
          id="Experiencetype"
          value={selectExperiencetype}
          onChange={(e)=> setselectExperiencetype(e.target.value)}>
            <option value="">select a Experience</option>
            {Experiencetype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <label>Industries</label>
          <select
          id="industries"
          value={selectindustriestype}
          onChange={(e)=> setselectindustriestype(e.target.value)}>
            <option value="">select a Industries</option>
            {industriestype.map((type)=>(
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </select>
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
