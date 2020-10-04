import React, { useState } from "react";
import Profile from "./Profile";
import PersonalInfo from "./PersonalInfo";
import EducationQualification from "./EducationQualification";
import Notification from "./Notification";

export const RenderPageContext = React.createContext();

function FormContainer() {
  const [steps, setSteps] = useState(1);

  const changeComponent = () => {
    setSteps(steps + 1);
  };

  const previousComponent = () => {
    setSteps(steps - 1);
  };

  switch (steps) {
    case 1:
      return <Profile nextStep={changeComponent} />;
    case 2:
      return (
        <PersonalInfo nextStep={changeComponent} prevStep={previousComponent} />
      );
    case 3:
      return (
        <EducationQualification
          nextStep={changeComponent}
          prevStep={previousComponent}
        />
      );
    case 4:
      return (
        <Notification nextStep={changeComponent} prevStep={previousComponent} />
      );
    default:
      return <FormContainer />;
  }
}

export default FormContainer;
