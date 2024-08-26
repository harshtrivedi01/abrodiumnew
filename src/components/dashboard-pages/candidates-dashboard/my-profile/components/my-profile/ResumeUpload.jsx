import { useState } from "react";

const ResumeUpload = () => {
  const [Resume, setResume] = useState("");
  const ResumeHander = (e) => {
    setResume(e.target.files[0]);
  };
  return (
    <>
     
      <div className="w-full">
        <div className="uploadButton">
          <input
            className="put"
            type="file"
            name="attachments[]"
            accept="pdf/*"
            id="upload"
            required
            onChange={ResumeHander}
          />
          
          
        </div>
        <div className="text-xs mt-2">
        (Accepted format includes PDF)
        </div> 
      </div>
    </>
  );
};

export default ResumeUpload;
