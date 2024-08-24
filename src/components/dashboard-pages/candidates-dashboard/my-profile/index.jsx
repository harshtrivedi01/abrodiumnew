import React, { useState } from "react";
import MobileMenu from "../../../header/MobileMenu";
import LoginPopup from "../../../common/form/login/LoginPopup";
import DashboardCandidatesSidebar from "../../../header/DashboardCandidatesSidebar";
import BreadCrumb from "../../BreadCrumb";
import MyProfile from "./components/my-profile";
import SocialNetworkBox from "./components/SocialNetworkBox";
import ContactInfoBox from "./components/ContactInfoBox";
import ProfileVisalbilty from "./components/my-profile/ProfileVisalbilty";
import CopyrightFooter from "../../CopyrightFooter";
import DashboardCandidatesHeader from "../../../header/DashboardCandidatesHeader";
import MenuToggler from "../../MenuToggler";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "My Profile", component: <MyProfile /> },
    { id: 2, title: "Social Network", component: <SocialNetworkBox /> },
    { id: 3, title: "Profile Visibility", component: <ProfileVisalbilty /> },
    { id: 4, title: "Contact Information", component: <ContactInfoBox /> },
  ];

  return (
    <div className="page-wrapper dashboard">
      <span className="header-span"></span>

      <LoginPopup />
      <DashboardCandidatesHeader />
      <MobileMenu />
      <DashboardCandidatesSidebar />

      <section className="user-dashboard">
        <div className="dashboard-outer">
          <BreadCrumb title="My Profile!" />
          <MenuToggler />

          {/* Top Progress Bar */}
          <div className="w-full bg-blue-100 rounded-t-lg " style={{backgroundColor:"#F4F6FB"}}>
            <div className="flex justify-around ">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`relative cursor-pointer py-2 w-full mx-2 text-center font-medium transition-colors duration-300 ${
                    currentStep === step.id
                      ? "text-blue-900 border border rounded-3xl bg-white"
                      : " hover:bg-blue-300 hover:text-blue-800 bg-blue-800 text-white  rounded-3xl"
                  }`}
                >
                  {step.title}
                  {index < steps.length - 1 && (
                    <span
                      className={`absolute top-0 -right-5 h-3 mt-3 w-[24px] bg-blue-800  ${
                        currentStep === step.id ? "bg-white" : ""
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold">
                  {steps[currentStep - 1].title}
                </h4>
                {currentStep === 1 && (
                  <div className="flex items-center space-x-2">
                    <label htmlFor="visibility" className="font-bold">
                      Profile and CV Visibility
                    </label>
                    <Switch
                      id="visibility"
                      className="rounded-xl data-[state=checked]:bg-[#1502e6]"
                    />
                  </div>
                )}
              </div>
              {steps[currentStep - 1].component}
            </div>
          </div>
        </div>
      </section>

      <CopyrightFooter />
    </div>
  );
};

export default Index;
