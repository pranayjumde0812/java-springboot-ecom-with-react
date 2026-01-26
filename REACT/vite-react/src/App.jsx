import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello</h1>
        {/* <MyButton /> */}

        <ProfileCard name="Pranay" />
        <ProfileCard name="RAhul" />
      </div>
    </>
  );
}

export default App;
