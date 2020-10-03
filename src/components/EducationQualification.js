import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

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

function EducationQualification() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div>
      <input
        type="text"
        name="school"
        value={state.school}
        onChange={(e) => dispatch({ type: "school", payload: e.target.value })}
      />
      <input
        type="text"
        name="college"
        value={state.college}
        onChange={(e) => dispatch({ type: "college", payload: e.target.value })}
      />
      <input
        type="text"
        name="postGradutaion"
        value={state.postGraduation}
        onChange={(e) =>
          dispatch({ type: "postGraduation", payload: e.target.value })
        }
      />
      <NavLink to="/form/personalInfo">
        <button>Back</button>
      </NavLink>
      <NavLink to="/form/notification">
        <button>Next</button>
      </NavLink>
    </div>
  );
}

export default EducationQualification;
