import React from "react";
import Profile from "./Profile";
import PersonalInfo from "./PersonalInfo";
import EducationQualification from "./EducationQualification";
import Notification from "./Notification";

function FormContainer() {
  return (
    <div>
      <Profile />
      <PersonalInfo />
      <EducationQualification />
      <Notification />
    </div>
  );
}

export default FormContainer;
