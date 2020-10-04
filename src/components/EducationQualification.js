import React, { useReducer } from "react";

// Error handler.
let initialState = {
  school: "",
  college: "",
  postGraduation: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "school":
      return { ...state, school: action.payload };
    case "college":
      return { ...state, college: action.payload };
    case "postGraduation":
      return { ...state, postGraduation: action.payload };
    default:
      return state;
  }
};

//Error handler
let errorState = {
  school: "",
  college: "",
  postGraduation: "",
};

const errorReducer = (errorState, action) => {
  switch (action.type) {
    case "schoolError":
      return { ...errorState, school: action.payload };
    case "collegeError":
      return { ...errorState, college: action.payload };
    case "postGraduationError":
      return { ...errorState, postGraduation: action.payload };
    default:
      return errorState;
  }
};

function EducationQualification({ nextStep }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errorMessage, displayErrorMessage] = useReducer(
    errorReducer,
    errorState
  );

  const schoolErr = () => {
    if (!state.school) {
      displayErrorMessage({
        type: "schoolError",
        payload: "Field cannot be empty.",
      });
    }
  };

  const collegeErr = () => {
    if (!state.college) {
      displayErrorMessage({
        type: "collegeError",
        payload: "Field cannot be empty.",
      });
    }
  };

  const postGradErr = () => {
    if (!state.postGraduation) {
      displayErrorMessage({
        type: "postGraduationError",
        payload: "Field cannot be empty.",
      });
    }
  };

  const handleNext = () => {
    schoolErr();
    collegeErr();
    postGradErr();
    validate();
  };

  const validate = () => {
    if (state.school && state.college && state.postGraduation) {
      nextStep();
    } else {
      return;
    }
  };

  return (
    <div>
      <input
        type="text"
        name="school"
        value={state.school}
        placeholder="Enter school name"
        onChange={(e) => dispatch({ type: "school", payload: e.target.value })}
      />
      {errorMessage.school ? <h4>{errorMessage.school}</h4> : ""}

      <input
        type="text"
        name="college"
        value={state.college}
        placeholder="Enter college name"
        onChange={(e) => dispatch({ type: "college", payload: e.target.value })}
      />
      {errorMessage.college ? <h4>{errorMessage.college}</h4> : ""}

      <input
        type="text"
        name="postGraduation"
        value={state.postGraduation}
        placeholder="Enter post graduated college name."
        onChange={(e) =>
          dispatch({ type: "postGraduation", payload: e.target.value })
        }
      />
      {errorMessage.postGraduation ? (
        <h4>{errorMessage.postGraduation}</h4>
      ) : (
        ""
      )}

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default EducationQualification;
