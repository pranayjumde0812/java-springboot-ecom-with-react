import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // When we pass dependecy like here [count] then only when changes happen in
    // count then this code will run. everytime when count changes

    document.title = `Count : ${count}`;
    console.log("Use Effect is Triggered");
  }, [count]);

  // useEffect(() => {
  //   // Use Only when have to perform some task  at time of component mount
  //   // empty [] passing only runs this at the time of component mounting
  //   document.title = `Count : ${count}`;
  //   console.log("Use Effect is Triggered");
  // }, []);

  // useEffect(() => {
  //   // Run every time when component render , anything changes then this code will run
  // });

  const incrementCount = () => {
    setCount(count + 1);
    // document.title = `Count : ${count}`;
  };

  return (
    <>
      <div>
        <h1>useEffect Hook</h1>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </>
  );
}

export default App;
