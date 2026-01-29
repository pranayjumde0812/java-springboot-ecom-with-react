import { useState } from "react";
import MouseTracker from "./MouseTracker";

function ParentComponent() {
  const [showComponent, setShowComponent] = useState();

  const toggleComponet = () => {
    setShowComponent((prev) => !prev);
  };

  return (
    <>
      <div>
        <button onClick={toggleComponet}>
          {showComponent ? "Unmount Tracker" : "Mount Tracker"}
        </button>

        {showComponent && <MouseTracker />}
      </div>
    </>
  );
}

export default ParentComponent;
