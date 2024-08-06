import React from 'react';
import Typist from 'react-typist';
import { TypeAnimation } from 'react-type-animation';
import SearchForm from "../../common/job-search/SearchForm";
import ImageBox from "./ImageBox";
import PopularSearch from "../PopularSearch";


const Index = () => {
  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div className="inner-column" data-aos="fade-up" data-aos-delay="500">
              <div className="text-animation-container">
             
              </div>
              <div className="text-2xl font-bold flex my-4">
                <span> AI </span> 
                <span className='text-purple-900 mx-2'> 
                <TypeAnimation
                  sequence={[
                    " Enabled Resume Building",
                    1000,
                    " Matched Jobs",
                    1000,
                    " Skill Test & Badges",
                    1000,
                    " Verified Global Opportunities",
                    1000,
                    
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
                <span className="">Your 1 Stop Career ID is here</span>
              </div>

              {/* <!-- Job Search Form --> */}
              <div className="job-search-form">
                <SearchForm />
              </div>
              {/* <!-- Job Search Form --> */}

              {/* <!-- Popular Search --> */}
              <PopularSearch />
              {/* <!-- End Popular Search --> */}
            </div>
          </div>
          {/* End .col */}

          <div className="image-column col-lg-5 col-md-12">
            <ImageBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
