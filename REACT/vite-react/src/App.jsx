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

        <ProfileCard name="Pranay" age={24} isMember={true}/>
        <ProfileCard name="RAhul" age={30} isMember={false}/>
      </div>
    </>
  );
}

export default App;
