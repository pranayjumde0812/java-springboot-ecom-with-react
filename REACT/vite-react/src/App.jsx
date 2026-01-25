import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello</h1>
        <MyButton />
      </div>
    </>
  );
}

export default App;
