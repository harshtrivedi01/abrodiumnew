const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" name="username" placeholder="Username" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
         
            <div className="input-group checkboxess ">
              <input type="checkbox" name="" id=""  required/>
              <label htmlFor="service" className="service" >
                <span className="custom-checkbox ms-2">By using our Services, you agree to our terms of use</span> 
              </label>
            </div>
            
          
        </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          Register
        </button>
      </div>
      
      {/* login */}
    </form>
  );
};

export default FormContent;
