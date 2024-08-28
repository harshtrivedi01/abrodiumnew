import Map from "../../../Map";
import ResumeUpload from "./my-profile/ResumeUpload";

const ContactInfoBox = ({ onNext }) => {

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
        <div className="form-group flex gap-10 col-lg-12 col-md-12 mb-5">
          <label className="w-1/4">Attach Resume</label>
          <ResumeUpload/>
        </div>
        
        {/* <!-- Input --> */}
        <div className="form-group flex gap-10 col-lg-12 col-md-12 my-5">
          <label className="w-1/4">Upload Video Profile</label>
      <div className="w-full">
      Get a 70% higher chance of getting noticed by recruiters.
       Create your 60-second Video Profile and mark your first 
       impression even before meeting your prospective employers. <br/> <br/>
      <button className="bg-blue-900 text-white px-2 py-1 rounded-sm ">Create Video Profile</button>
      </div>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group flex gap-10 col-lg-12 col-md-12 mt-5">
          <label className="w-1/4">Cover Letter</label>
          <input
            type="textarea"
            name="name"
            className="border h-60  w-full rounded-lg"
            placeholder="329 Queensberry Street, North Melbourne VIC 3051, Australia.
             Queensberry Street, North Melbourne VIC 3051"
            required
          />
        </div>
        <div className="form-group flex  col-lg-12 col-md-12">
          <label className="w-1/5"></label>
          <input
            type="checkbox"
            name="name"
           className="ms-4"
          />
            <p className="">Include cover letter while applying</p>
        </div>

       
        {/* End MapBox */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save & Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
