import { useRef, useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import InputBox from "./components/InputBox";

// import "./Form.css";

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

////// Counter App //////

// function App() {
//   // useState
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   const incrementCount = () => setCount(count + step);

//   const decrementCount = () => setCount(count - step);

//   const stepChangeHandler = (e) => {
//     setStep(parseInt(e.target.value || "0"));
//   };

//   const resetCounter = () => {
//     setCount(0);
//     setStep(1);
//   };

//   return (
//     <>
//       <div className="app-container">
//         <h1>Counter App</h1>
//         <h2>Count: {count}</h2>
//         {/* <button onClick={() => setCount(count + 1)}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>Decrement</button> */}
//         <label>Step:</label>

//         {/* <input
//           type="number"
//           value={step}
//           onChange={(e) => setStep(parseInt(e.target.value || "0"))}
//         /> */}

//         <InputBox
//           type="number"
//           placeholder="Enter step"
//           value={step}
//           onChange={stepChangeHandler}
//         />

//         <br />
//         <MyButton actionName={"Increment"} onClick={incrementCount} />
//         <MyButton actionName={"Decrement"} onClick={decrementCount} />
//         <MyButton actionName={"Reset"} onClick={resetCounter} />
//       </div>
//     </>
//   );
// }

// ////// Passing Array and Object to State //////

// function App() {
//   const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

//   const addCounters = () => {
//     setCounters([...counters, { id: counters.length + 1, value: 0 }]);
//   };

//   const incrementCounter = (id) => {
//     setCounters(
//       counters.map((counter) =>
//         counter.id === id ? { ...counter, value: counter.value + 1 } : counter,
//       ),
//     );
//   };

//   return (
//     <>
//       <div className="app-container">
//         <button onClick={addCounters}>Add Counter</button>
//         <ul>
//           {counters.map((counter) => (
//             <li key={counter.id}>
//               Counter {counter.id}: {counter.value}
//               <button
//                 onClick={() => {
//                   incrementCounter(counter.id);
//                 }}
//               >
//                 Increment
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

/// Managing Form inputs with useState in React///

// function App() {
//   const [formData, setFormData] = useState({
//     text: "",
//     checkbox: false,
//     radio: "",
//     select: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   return (
//     <>
//       <div className="form-container">
//         <h1>Form Example</h1>
//         <form>
//           {/* Text Input */}
//           <div className="form-field">
//             <label>Text:</label>
//             <input
//               type="text"
//               name="text"
//               value={formData.text}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Checkbox */}
//           <div className="form-field">
//             <label>
//               <input
//                 type="checkbox"
//                 name="checkbox"
//                 checked={formData.checkbox}
//                 onChange={handleChange}
//               ></input>
//               Checkbox
//             </label>
//           </div>

//           {/* Radio Buttons */}
//           <div className="form-field">
//             <label>Radio:</label>
//             <label>
//               <input
//                 type="radio"
//                 name="radio"
//                 value="option1"
//                 checked={formData.radio === "option1"}
//                 onChange={handleChange}
//               />
//               option 1
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="radio"
//                 value="option2"
//                 checked={formData.radio === "option2"}
//                 onChange={handleChange}
//               />
//               option 2
//             </label>
//           </div>

//           {/* Select Dropdown */}
//           <div className="form-field">
//             <label>Select:</label>
//             <select
//               name="select"
//               value={formData.select}
//               onChange={handleChange}
//             >
//               <option value="">--Please choose an option--</option>
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//             </select>
//           </div>

//           <div className="form-data">
//             <h3>Form Data</h3>
//             <p>
//               <strong>Text: </strong>
//               {formData.text || "N/A"}
//             </p>
//             <p>
//               <strong>Checkbox: </strong>
//               {formData.checkbox === true ? "Checked" : "Unchecked"}
//             </p>
//             <p>
//               <strong>Radio: </strong>
//               {formData.radio || "N/A"}
//             </p>
//             <p>
//               <strong>Select Option: </strong>
//               {formData.select || "N/A"}
//             </p>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// Use Ref Hook

function App() {
  const [stateCount, setStateCount] = useState(0);

  const refCount = useRef(0);

  console.log(refCount);
  return (
    <>
      <div>
        <p>State Count : {stateCount}</p>
        <button onClick={() => setStateCount(stateCount + 1)}>
          Increment State Count
        </button>

        <br />

        <p>Ref Count : {refCount.current}</p>
        <button onClick={() => (refCount.current += 1)}>
          Increment Ref Count
        </button>
      </div>
    </>
  );
}
export default App;
