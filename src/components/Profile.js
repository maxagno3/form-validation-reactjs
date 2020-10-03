import React, { useReducer } from "react";

// username - must contain atleast 6 characters and must not contain any numbers and must be lowercase.
// bio - must be atleast 150 characters.
// photo - must be JPEG.
// email-id
// phone number - must be 10 digits and must start with 6,7,8,9
// Errors must be shown when next button is clicked.

let intialState = {
  username: "",
  bio: "",
  emailId: "",
  phoneNumber: "",
  error: "",
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
    default:
      return state;
  }
}

function Profile() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={(e) =>
          dispatch({ type: "username", payload: e.target.value })
        }
      />
      <input
        type="text"
        name="bio"
        value={state.bio}
        onChange={(e) => dispatch({ type: "bio", payload: e.target.value })}
      />
      <input
        type="email"
        name="emailId"
        value={state.emailId}
        onChange={(e) => dispatch({ type: "emailId", payload: e.target.value })}
      />
      <input
        type="number"
        name="phoneNumber"
        value={state.phoneNumber}
        onChange={(e) =>
          dispatch({ type: "phoneNumber", payload: e.target.value })
        }
      />
      <button>Next</button>
    </div>
  );
}

export default Profile;
