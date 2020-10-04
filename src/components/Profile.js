import React, { useReducer } from "react";

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

function Profile({ nextStep }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [errorMessage, setErrorMessage] = useReducer(errorReducer, errorState);

  const userError = async () => {
    // Length is less than 6 letters
    if (state.username.length < 6) {
      setErrorMessage({
        type: "usernameError",
        payload: "Must be atleast 6 characters",
      });
    }
  };

  const errorBio = () => {
    // Length is less than 150 characters
    if (state.bio.length < 150) {
      setErrorMessage({
        type: "bioError",
        payload: "Must be atleast 150 characters long.",
      });
    }

    // Field is empty.
    if (!state.bio) {
      setErrorMessage({
        type: "bioError",
        payload: "Field cannot be empty",
      });
    }
  };

  const emailError = () => {
    // Does not include @
    if (!state.emailId.includes("@")) {
      setErrorMessage({
        type: "emailError",
        payload: "e-mail must contain @",
      });
    } else if (!state.emailId.endsWith(".com")) {
      setErrorMessage({
        type: "emailError",
        payload: "e-mail must end with .com",
      });
    }

    // Field is empty.
    if (!state.emailId) {
      setErrorMessage({
        type: "emailError",
        payload: "Field cannot be empty",
      });
    }
  };

  const numberError = () => {
    // Starts with.
    if (
      !state.phoneNumber[0] === 7 ||
      !state.phoneNumber[0] === 8 ||
      !state.phoneNumber[0] === 9
    ) {
      setErrorMessage({
        type: "phoneNumberError",
        payload: "Phone number must start with 7, 8 or 9",
      });
    }

    // Length.
    if (state.phoneNumber.length !== 10) {
      setErrorMessage({
        type: "phoneNumberError",
        payload: "Phone number must be of 10 digits",
      });
    } else if (!state.phoneNumber) {
      setErrorMessage({
        type: "phoneNumber",
        payload: "Field cannot be empty",
      });
    }
  };

  const handleNext = () => {
    userError();
    errorBio();
    emailError();
    numberError();
    validate();
  };

  const validate = () => {
    if (
      state.usernameError &&
      state.emailError &&
      state.bioError &&
      state.phoneNumberError
    ) {
      nextStep();
    } else {
      return;
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
        type="text"
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
    </div>
  );
}

export default Profile;
