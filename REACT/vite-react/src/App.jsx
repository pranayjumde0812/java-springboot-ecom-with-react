import { useState } from "react";
import MyButton from "./components/MyButton";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const handleHobbyClick = (hobby) => {
    alert(`You clicked on hobby: ${hobby}`);
  };

  return (
    <>
      <div className="app-container">
        <h1>Hello</h1>
        {/* <MyButton /> */}

        <ProfileCard
          name="Pranay"
          age={24}
          isMember={true}
          hobbies={["Gaming", "Cooking", "Hiking"]}
          onHobbyClick={handleHobbyClick}
        />
        <ProfileCard
          name="Rahul"
          age={30}
          isMember={false}
          hobbies={["Photography", "Cycling"]}
          onHobbyClick={handleHobbyClick}
        />
      </div>
    </>
  );
}

export default App;
