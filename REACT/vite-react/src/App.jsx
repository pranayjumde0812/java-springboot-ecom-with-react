import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const hobbies1 = ["Reading", "Traveling", 1];
  return (
    <>
      <div className="app-container">
        <h1>Hello</h1>
        {/* <MyButton /> */}

        <ProfileCard
          name="Pranay"
          age={24}
          isMember={true}
          hobbies={hobbies1}
        />
        <ProfileCard
          name="Rahul"
          age={30}
          isMember={false}
          hobbies={hobbies1}
        />
      </div>
    </>
  );
}

export default App;
