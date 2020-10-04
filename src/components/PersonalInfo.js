import React, { useReducer } from "react";

// no vaildation for selecting country.
// zipcode must be 6 digits.
// errors must be shown only when next button is clicked

// Handling the input data.
let intialState = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  zipcode: "",
  country: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "address":
      return { ...state, address: action.payload };
    case "city":
      return { ...state, city: action.payload };
    case "zipcode":
      return { ...state, zipcode: action.payload };
    case "country":
      return { ...state, country: action.payload };
    default:
      return state;
  }
}

// Error handling.
let errorState = {
  firstNameError: "",
  lastNameError: "",
  addressError: "",
  cityError: "",
  zipcodeError: "",
};

const errorReducer = (errorState, action) => {
  switch (action.type) {
    case "firstNameError":
      return { ...errorState, firstNameError: action.payload };
    case "lastNameError":
      return { ...errorState, lastNameError: action.payload };
    case "addressError":
      return { ...errorState, addressError: action.payload };
    case "cityError":
      return { ...errorState, cityError: action.payload };
    case "zipcodeError":
      return { ...errorState, zipcodeError: action.payload };
    default:
      return errorState;
  }
};

function PersonalInfo({ prevStep, nextStep }) {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [errorMessage, setErrorMessage] = useReducer(errorReducer, errorState);

  const firstNameErr = () => {
    if (!state.firstName) {
      setErrorMessage({
        type: "firstNameError",
        payload: "Field cannot be empty",
      });
    }
  };

  const lastNameErr = () => {
    if (!state.lastName) {
      setErrorMessage({
        type: "lastNameError",
        payload: "Field cannot be empty",
      });
    }
  };

  const addressErr = () => {
    if (!state.address) {
      setErrorMessage({
        type: "addressError",
        payload: "Field cannot be empty",
      });
    }
  };

  const cityErr = () => {
    if (!state.city) {
      setErrorMessage({ type: "cityError", payload: "Field cannot be empty" });
    }
  };

  const zipErr = () => {
    if (!state.zipcode) {
      setErrorMessage({
        type: "zipcodeError",
        payload: "Field cannot be empty",
      });
    }
    if (state.zipcode.length < 6 || state.zipcode.length > 6) {
      setErrorMessage({
        type: "zipcodeError",
        payload: "Must be 6 characters",
      });
    }
  };

  const handleNext = () => {
    firstNameErr();
    lastNameErr();
    addressErr();
    cityErr();
    zipErr();
    validate();
  };

  const validate = () => {
    if (
      state.firstNameError &&
      state.lastNameError &&
      state.addressError &&
      state.cityError &&
      state.zipcodeError
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
        name="firstName"
        value={state.firstName}
        placeholder="Enter your first name"
        onChange={(e) =>
          dispatch({ type: "firstName", payload: e.target.value })
        }
      />
      {errorMessage.firstNameError ? (
        <h4>{errorMessage.firstNameError}</h4>
      ) : (
        ""
      )}

      <input
        type="text"
        name="lastName"
        value={state.lastName}
        placeholder="Enter your last name"
        onChange={(e) =>
          dispatch({ type: "lastName", payload: e.target.value })
        }
      />
      {errorMessage.lastNameError ? <h4>{errorMessage.lastNameError}</h4> : ""}

      <input
        type="text"
        name="address"
        value={state.address}
        placeholder="Enter the address where you live."
        onChange={(e) => dispatch({ type: "address", payload: e.target.value })}
      />
      {errorMessage.addressError ? <h4>{errorMessage.addressError}</h4> : ""}

      <input
        type="text"
        name="city"
        value={state.city}
        placeholder="Enter the city where you live"
        onChange={(e) => dispatch({ type: "city", payload: e.target.value })}
      />
      {errorMessage.cityError ? <h4>{errorMessage.cityError}</h4> : ""}

      <input
        type="number"
        name="zipcode"
        value={state.zipcode}
        placeholder="Enter zipcode of the are you live in"
        onChange={(e) => dispatch({ type: "zipcode", payload: e.target.value })}
      />
      {errorMessage.zipcodeError ? <h4>{errorMessage.zipcodeError}</h4> : ""}

      <select>
        <option>---</option>
        <option>Maharashtra</option>
        <option>Himachal</option>
        <option>Kerala</option>
        <option>Goa</option>
      </select>

      <button onClick={prevStep}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalInfo;
