//React Hook - allows functional components to use react features
// without writing class components
// useState , useEffect , useContext , useReducer etc

//useState = allows creation of a staeful variable and a setter
// function to update its valuse in virtual dom [name , setName]

import React, { useState } from "react";

// const Counter = ({ name = "Guest", age = 15 }) => {
const States = () => {
  //   const [cName, setCName] = useState(name);
  //   const [cAge, setCAge] = useState(age);
  //easier way to set def vals for function comps
  const [name, setCName] = useState("Guest");
  const [age, setCAge] = useState(0);

  const updateName = () => {
    // name = "SpongeBob";
    //will update in console but not in virtual dom hence use setter function

    setCName("Sanskar");
  };

  const incrementAge = () => {
    setCAge(age + 1);
  };

  return (
    <div>
      {/* <p>Name: {cName}</p>
      <p>Age: {cAge}</p> */}
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name </button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Age</button>
    </div>
  );
};

export default States;

// Counter.defaultProps = {
//   name: "Grandpa Max",
// };
