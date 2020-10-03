import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

// username - must contain atleast 6 characters and must not contain any numbers and must be lowercase.
// bio - must be atleast 150 characters.
// photo - must be JPEG.
// email-id
// phone number - must be 10 digits and must start with 6,7,8,9
// Errors must be shown when next button is clicked.

// Handling the input data.
let intialState = {
  username: "",
  bio: "",
  emailId: "",
  phoneNumber: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "username":
      return { ...state, username: action.payload };
    case "bio":
      return { ...state, bio: action.payload };
    case "emailId":
      return { ...state, emailId: action.payload };
    case "phoneNumber":
      return { ...state, phoneNumber: action.payload };
    case "error":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

// Error handling reducer.
let errorState = {
  usernameError: "",
  bioError: "",
  emailError: "",
  phoneNumberError: "",
};

const errorReducer = (errorState, action) => {
  switch (action.type) {
    case "usernameError":
      return { ...errorState, usernameError: action.payload };
    case "bioError":
      return { ...errorState, bioError: action.payload };
    case "emailError":
      return { ...errorState, emailError: action.payload };
    case "phoneNumberError":
      return { ...errorState, phoneNumberError: action.payload };
    default:
      return errorState;
  }
};

function Profile() {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [errorMessage, setErrorMessage] = useReducer(errorReducer, errorState);

  const handleNext = () => {
    if (state.bio.length < 150) {
      setErrorMessage({
        type: "bioError",
        payload: "Must be atleast 150 characters long.",
      });
    }

    if (!state.emailId.includes("@")) {
      setErrorMessage({ type: "emailError", payload: "e-mail must contain @" });
    } else if (!state.emailId.endsWith(".com")) {
      setErrorMessage({
        type: "emailError",
        payload: "e-mail must end with .com",
      });
    }

    if (!state.phoneNumber.startsWith("7" || "8")) {
      setErrorMessage({
        type: "phoneNumberError",
        payload: "Phone number must start with 7 or 8",
      });
    } else if (!state.phoneNumber.length < 10) {
      setErrorMessage({
        type: "phoneNumberError",
        payload: "Phone number must be of 10 digits",
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={state.username}
        placeholder="Enter Username"
        onChange={(e) =>
          dispatch({ type: "username", payload: e.target.value })
        }
      />
      {errorMessage.usernameError ? <h4>{errorMessage.usernameError}</h4> : ""}
      <input
        type="text"
        name="bio"
        value={state.bio}
        placeholder="Enter bio"
        onChange={(e) => dispatch({ type: "bio", payload: e.target.value })}
      />
      {errorMessage.bioError ? <h4>{errorMessage.bioError}</h4> : ""}
      <input
        type="email"
        name="emailId"
        value={state.emailId}
        placeholder="Enter valid email"
        onChange={(e) => dispatch({ type: "emailId", payload: e.target.value })}
      />
      {errorMessage.emailError ? <h4>{errorMessage.emailError}</h4> : ""}
      <input
        type="number"
        name="phoneNumber"
        value={state.phoneNumber}
        placeholder="Enter valid 10 digit phone number"
        onChange={(e) =>
          dispatch({ type: "phoneNumber", payload: e.target.value })
        }
      />
      {errorMessage.phoneNumberError ? (
        <h4>{errorMessage.phoneNumberError}</h4>
      ) : (
        ""
      )}

      <button onClick={handleNext}>Next</button>
      {!state.username && !state.emailId && !state.bio && !state.phoneNumber ? (
        <h4>Cannot proceed with empty form</h4>
      ) : (
        ""
      )}
    </div>
  );
}

export default Profile;
