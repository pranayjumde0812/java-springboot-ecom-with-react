import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on hobby: ${hobby}`);
  };

  // converting values to Object
  const pranayProfile = {
    name: "Pranay",
    age: 24,
    isMember: true,
    hobbies: ["Gaming", "Cooking", "Hiking"],
    onHobbyClick: handleHobbyClick,
  };

  const deepakProfile = {
    name: "Deepak",
    age: 30,
    isMember: false,
    hobbies: ["Photography", "Cycling"],
    onHobbyClick: handleHobbyClick,
  };

  return (
    <>
      <div className="app-container">
        <h1>Hello</h1>
        {/* <MyButton /> */}

        {/* Passing Object as Props using spread operator */}
        <ProfileCard {...pranayProfile} />
        <ProfileCard {...deepakProfile} />
      </div>
    </>
  );
}

export default App;
