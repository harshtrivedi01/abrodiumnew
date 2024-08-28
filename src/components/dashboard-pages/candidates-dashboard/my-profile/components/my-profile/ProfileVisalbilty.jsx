import React, { useState, Fragment } from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ProfileVisalbilty = ({ onNext }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    // After successful submission, go to the next tab
    onNext();
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Designation</label>
          <input
            type="text"
            name="name"
            placeholder=""
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Organization</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Salary</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Time Period</label>
          <input type="text" name="name" placeholder="" required />
        </div>

        {/* <!-- Input --> */}
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
