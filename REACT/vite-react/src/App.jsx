import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <div>
        <h1>Hello</h1>
        {/* <MyButton /> */}

        <ProfileCard name="Pranay" age={24} isMember={true} />
        <ProfileCard name="Rahul" age={30} isMember={false} />
      </div>
    </>
  );
}

export default App;
