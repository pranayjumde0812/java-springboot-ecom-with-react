import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import InputBox from "./components/InputBox";

// function App() {
//   const handleHobbyClick = (hobby) => {
//     alert(`You clicked on hobby: ${hobby}`);
//   };

//   // converting values to Object
//   const pranayProfile = {
//     name: "Pranay",
//     age: 24,
//     isMember: true,
//     hobbies: ["Gaming", "Cooking", "Hiking"],
//     onHobbyClick: handleHobbyClick,
//   };

//   const deepakProfile = {
//     name: "Deepak",
//     age: 30,
//     isMember: false,
//     hobbies: ["Photography", "Cycling"],
//     onHobbyClick: handleHobbyClick,
//   };

//   return (
//     <>
//       <div className="app-container">
//         <h1>Hello</h1>
//         {/* <MyButton /> */}

//         {/* Passing Object as Props using spread operator */}
//         <ProfileCard {...pranayProfile} />
//         <ProfileCard {...deepakProfile} />
//       </div>
//     </>
//   );
// }

// Hooks Example
function App() {
  // useState
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const incrementCount = () => setCount(count + step);

  const decrementCount = () => setCount(count - step);

  const stepChangeHandler = (e) => {
    setStep(parseInt(e.target.value || "0"));
  };
  return (
    <>
      <div className="app-container">
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button> */}
        <label>Step:</label>

        {/* <input
          type="number"
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value || "0"))}
        /> */}

        <InputBox
          type="number"
          placeholder="Enter step"
          value={step}
          onChange={stepChangeHandler}
        />

        <br />
        <MyButton actionName={"Increment"} onClick={incrementCount} />
        <MyButton actionName={"Decrement"} onClick={decrementCount} />
      </div>
    </>
  );
}

export default App;
