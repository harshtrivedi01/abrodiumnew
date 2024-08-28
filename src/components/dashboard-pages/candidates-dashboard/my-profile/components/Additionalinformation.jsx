import Map from "../../../Map";
import ResumeUpload from "./my-profile/ResumeUpload";

const Additionalinformation = () => {
  
  return (
    <form className="default-form">
      <div className="row">
    
        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">About</label>
          <input
          type="text"
          />
        </div>
        
        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">IIT-JEE All India Rank (AIR)</label>
          <input
          type="text"
          />
        </div>

        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">CAT Percentile</label>
          <input
          type="text"
          />
        </div>

       
        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">GMAT Score</label>
          <input
          type="text"
          />
        </div>

        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Marital Status</label>
          <input
          type="text"
          />
        </div>

        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Are you a veteran or ex-military?</label>
          <div className="flex "> 
            
          <input
          type="radio"
          name="yes"
          />
          <label htmlFor="yes" className="pt-1 me-4 ms-1">Yes</label><br/>
         
          <input
          type="radio"
          name="No"
          />
           <label htmlFor="No" className="pt-1 me-4 ms-1">No</label><br/>
          </div>
        </div>

        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Are you Differently-Abled?</label>
          <div className="flex "> 
            
            <input
            type="radio"
            name="yes"
            />
            <label htmlFor="yes" className="pt-1 me-4 ms-1">Yes</label><br/>
           
            <input
            type="radio"
            name="No"
            />
             <label htmlFor="No" className="pt-1 me-4 ms-1">No</label><br/>
            </div>
        </div>

        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Have you handled a team?</label>
          <div className="flex "> 
            
            <input
            type="radio"
            name="yes"
            />
            <label htmlFor="yes" className="pt-1 me-4 ms-1">Yes</label><br/>
           
            <input
            type="radio"
            name="No"
            />
             <label htmlFor="No" className="pt-1 me-4 ms-1">No</label><br/>
            </div>
        </div>

        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Are you willing to work 6 days a week?</label>
          <div className="flex "> 
            
            <input
            type="radio"
            name="yes"
            />
            <label htmlFor="yes" className="pt-3 me-4 ms-1">Yes</label><br/>
           
            <input
            type="radio"
            name="No"
            />
             <label htmlFor="No" className="pt-3 me-4 ms-1">No</label><br/>
            </div>
        </div>

        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Are you willing to relocate?</label>
          <div className="flex "> 
            
            <input
            type="radio"
            name="yes"
            />
            <label htmlFor="yes" className="pt-1 me-4 ms-1">Yes</label><br/>
           
            <input
            type="radio"
            name="No"
            />
             <label htmlFor="No" className="pt-1 me-4 ms-1">No</label><br/>
            </div>
        </div>
        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Are you open to joining an early stage start-up?</label>
          <div className="flex "> 
            
            <input
            type="radio"
            name="yes"
            />
            <label htmlFor="yes" className="pt-3 me-4 ms-1">Yes</label><br/>
           
            <input
            type="radio"
            name="No"
            />
             <label htmlFor="No" className="pt-3 me-4 ms-1">No</label><br/>
            </div>
        </div>
        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Willingness to Travel?</label>
          <div className="flex "> 
            
            <input
            type="radio"
            name="yes"
            />
            <label htmlFor="yes" className="pt-1 me-4 ms-1">Yes</label><br/>
           
            <input
            type="radio"
            name="No"
            />
             <label htmlFor="No" className="pt-1 me-4 ms-1">No</label><br/>
            </div>
        </div>
        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Work Permit for USA</label>
          <input
          type="text"
          />
        </div>
        <div className="form-group flex gap-10 col-lg-12 col-md-12 ">
          <label className="w-1/4">Languages</label>
          <input
          type="text"
          />
        </div>



        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Additionalinformation;
