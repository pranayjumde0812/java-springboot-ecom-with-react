import { createContext, useContext, useState } from 'react'
import './App.css'

// - App = DATA
//   - ComponentA
//     - ComponentB
//       - ThemedComponent =  needs theme prop

// useContext()
// 1. Create Context
//    const ThemeContext = createContext(defaultValue);
// 2. Provide Context
//    <ThemeContext.Provider value={value}>
//      ...
//    </ThemeContext.Provider>
// 3. Consume Context
//    const value = useContext(ThemeContext);

const ThemeContext = createContext("light");

function App() {
  // const theme = "dark";

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  }

  return (
    <>
      <GlobalComponent />
      <ThemeContext.Provider value={theme}>
        <div className="app" style={{ border: '2px solid black', padding: "20px", margin: "20px", textAlign: "center" }}>
          <h2>App(parent) Component</h2>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <ComponentA />
        </div>
      </ThemeContext.Provider>

      <br />
      <ThemeContext.Provider value="dark">
        <GlobalComponent />
      </ThemeContext.Provider>
    </>
  )
}

function ComponentA() {
  return (
    <>
      <div className="app" style={{ border: '2px solid blue', padding: "20px", margin: "20px" }}>
        <h2>ComponentA(child) Component</h2>
        <ComponentB />
      </div>
    </>
  )
}

function ComponentB() {
  return (
    <>
      <div className="app" style={{ border: '2px solid green', padding: "20px", margin: "20px" }}>
        <h2>ComponentB(grandchild) Component</h2>
        <ThemedComponent />
      </div>
    </>
  )
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="app" style={{ border: '2px solid red', padding: "20px", margin: "20px" }}>
        <h2>ThemedComponent(great-grandchild) Component</h2>
        <div>The current theme is = {theme}</div>
      </div>
    </>
  )
}

function GlobalComponent() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <div className="app" style={{ border: '2px solid pink', padding: "20px", margin: "20px" }}>
        <h2>GlobalComponent(OutSide of Provider) Component</h2>
        <div>The current theme is = {theme}</div>
      </div>
    </>
  )
}
export default App
