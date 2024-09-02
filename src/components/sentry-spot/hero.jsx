import banner from "./images/banner.webp";
import banner1 from "./images/1.png";
import banner2 from "./images/2.png";
import banner3 from "./images/3.png";
import banner4 from "./images/4.png";
import banner5 from "./images/5.png";
import banner6 from "./images/6.png";

import verify from "./images/verify.png";
import manage from "./images/manage.png";
import manage_1 from "./images/manage_1.png";
import job from "./images/job.png";

const HeroSection = () => {
  return (
    <section className="bg-white py-8 base:px-40 md:px-8 lg:px-20 xl:px-40">
      <div>
        <div className="bg-blue-900 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-white text-2xl md:text-3xl font-semibold">
              Enhance Your Career Prospects with a AbroadiumID Profile
            </h2>
            <p className="text-white text-sm md:text-lg mt-4">
              A AbroadiumProfile provides you with a personalized search experience and more relevant job recommendations – so you can find your next job faster.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-900"
              >
                Create Profile
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src={banner} alt="Banner" className="w-full h-auto" />
          </div>
        </div>

        <div className="py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-8">Services</h2>
            <div className="flex flex-wrap -mx-4 text-white">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-blue-900 rounded-lg p-8 text-white shadow-lg h-full transform transition-transform duration-300 hover:scale-95">
                  <img src={banner1} className="w-24 mx-auto mb-4" alt="Service 1" />
                  <h2 className="text-xl md:text-2xl font-semibold">AI Resume Building</h2>
                  <p className="mt-4 text-white text-sm md:text-base">
                    Enhance your resume with AI-driven insights: get a personalized AI score, expert suggestions, and one-click improvements using top-tier templates.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-blue-900 rounded-lg p-8 text-white shadow-lg h-full transform transition-transform duration-300 hover:scale-95">
                  <img src={banner2} className="w-24 mx-auto mb-4" alt="Service 2" />
                  <h2 className="text-xl md:text-2xl font-semibold">AI Skill Test with Badging & Certification</h2>
                  <p className="mt-4 text-white text-sm md:text-base">
                    Validate your expertise with our AI Skill Test, earning you badges and certifications that showcase your proficiency to employers.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-blue-900 rounded-lg p-8 text-white shadow-lg h-full transform transition-transform duration-300 hover:scale-95">
                  <img src={banner3} className="w-24 mx-auto mb-4" alt="Service 3" />
                  <h2 className="text-xl md:text-2xl font-semibold">Speak Your Skills</h2>
                  <p className="mt-4 text-white text-sm md:text-base">
                    Showcase your skills with video and audio recordings, allowing your expertise to shine through personalized presentations.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-blue-900 rounded-lg p-8 text-white shadow-lg h-full transform transition-transform duration-300 hover:scale-95">
                  <img src={banner4} className="w-24 mx-auto mb-4" alt="Service 4" />
                  <h2 className="text-xl md:text-2xl font-semibold">AI-Enabled Courses</h2>
                  <p className="mt-4 text-white text-sm md:text-base">
                    Upgrade your abilities with AI-enabled courses designed to enhance your skills and keep you ahead in your career.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-blue-900 rounded-lg p-8 text-white shadow-lg h-full transform transition-transform duration-300 hover:scale-95">
                  <img src={banner5} className="w-24 mx-auto mb-4" alt="Service 5" />
                  <h2 className="text-xl md:text-2xl font-semibold">Get Answers to All Your Career Questions</h2>
                  <p className="mt-4 text-white text-sm md:text-base">
                    Get answers to all your career questions through our feed, and speak directly with industry experts for personalized guidance.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-blue-900 rounded-lg p-8 text-white shadow-lg h-full transform transition-transform duration-300 hover:scale-95">
                  <img src={banner6} className="w-24 mx-auto mb-4" alt="Service 6" />
                  <h2 className="text-xl md:text-2xl font-semibold">Your Personal HR Assistant</h2>
                  <p className="mt-4 text-white text-sm md:text-base">
                    Be it Resumes, Cover letters, documentations, Industry experts, all right there in your dashboard always.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 px-4 md:px-8 lg:px-20 xl:px-40">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-8">The Career Profile to Land Your Next Great Job</h2>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="rounded-lg p-8 h-full  transform transition-transform duration-300 hover:scale-95">
                  <img src={verify} className="w-24 mx-auto mb-4" alt="Feature 1" />
                  <h2 className="font-semibold text-gray-800 text-lg md:text-xl">Job Recommendations Made Just for You</h2>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    Get job recommendations that match your unique skills and experience and fit your industry and salary expectations.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="rounded-lg p-8 h-full  transform transition-transform duration-300 hover:scale-95">
                  <img src={job} className="w-24 mx-auto mb-4" alt="Feature 2" />
                  <h2 className="font-semibold text-gray-800 text-lg md:text-xl">Let Great Jobs Come to You</h2>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    Recruiters and employers can view your profile and contact you to discuss new opportunities - even when you’re not looking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 px-4 md:px-8 lg:px-20 xl:px-40">
          <div className="container mx-auto text-center">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-8">Stand Out to Future Employers</h2>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="rounded-lg p-8  transform transition-transform duration-300 hover:scale-95">
                  <img src={manage_1} className="w-24 mx-auto mb-4" alt="Feature 3" />
                  <h2 className="font-semibold text-gray-800 text-lg md:text-xl">Manage Your Profile</h2>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    Take control of how your profile appears to potential employers via three profile visibility settings.
                  </p>
                  <a href="#" className="text-blue-500 mt-2 inline-block">Learn about profile visibility</a>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-8">
                <div className="rounded-lg p-8  transform transition-transform duration-300 hover:scale-95">
                  <img src={manage} className="w-24 mx-auto mb-4" alt="Feature 4" />
                  <h2 className="font-semibold text-gray-800 text-lg md:text-xl">Verify and Stand Out</h2>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    Quickly and securely verify your work-related credentials in your profile and on job applications with AbroadiumPass.
                  </p>
                  <a href="#" className="text-blue-500 mt-2 inline-block">Learn about AbroadiumPass</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

