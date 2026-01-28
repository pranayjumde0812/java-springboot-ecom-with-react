import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

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
