import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";

// no vaildation for selecting country.
// zipcode must be 6 digits.
// errors must be shown only when next button is clicked

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

function PersonalInfo() {
  const [state, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={state.firstName}
        onChange={(e) =>
          dispatch({ type: "firstName", payload: e.target.value })
        }
      />
      <input
        type="text"
        name="lastName"
        value={state.lastName}
        onChange={(e) =>
          dispatch({ type: "lastName", payload: e.target.value })
        }
      />
      <input
        type="text"
        name="address"
        value={state.address}
        onChange={(e) => dispatch({ type: "address", payload: e.target.value })}
      />
      <input
        type="text"
        name="city"
        value={state.city}
        onChange={(e) => dispatch({ type: "city", payload: e.target.value })}
      />
      <input
        type="number"
        name="zipcode"
        value={state.zipcode}
        onChange={(e) => dispatch({ type: "zipcode", payload: e.target.value })}
      />
      <select>
        <option>---</option>
        <option>Maharashtra</option>
        <option>Himachal</option>
        <option>Kerala</option>
        <option>Goa</option>
      </select>
      <NavLink to="/form/profile">
        <button>Back</button>
      </NavLink>
      <NavLink to="/form/educationQualification">
        <button>Next</button>
      </NavLink>
    </div>
  );
}

export default PersonalInfo;
