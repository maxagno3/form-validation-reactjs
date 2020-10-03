import React from "react";
import Profile from "./Profile";
import PersonalInfo from "./PersonalInfo";
import EducationQualification from "./EducationQualification";
import Notification from "./Notification";
import { Route, Switch } from "react-router-dom";

function FormContainer() {
  return (
    <Switch>
      <Route exact path="/form/profile" component={Profile} />
      <Route exact path="/form/personalInfo" component={PersonalInfo} />
      <Route
        exact
        path="/form/educationQualification"
        component={EducationQualification}
      />
      <Route exact path="/form/notification" component={Notification} />
    </Switch>
  );
}

export default FormContainer;
