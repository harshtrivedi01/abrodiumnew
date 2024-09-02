import Social from "./Social";

const CopyrightFooter = () => {
  return (
    <div className="footer-bottom">
      <div className="auto-container">
        <div className="outer-box">
          <div className="copyright-text text-white">
            © {new Date().getFullYear()} Abroadiumby{" "}
            
             All Right Reserved.
          </div>
          <div className="social-links text-white">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightFooter;
