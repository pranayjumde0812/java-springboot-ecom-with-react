import { useState } from 'react'
import './App.css'

// - App = DATA
//   - ComponentA
//     - ComponentB
//       - ThemedComponent =  needs theme prop

function App() {
  const theme = "dark";

  return (
    <>
      <div className="app" style={{ border: '2px solid black', padding: "20px", margin: "20px", textAlign: "center" }}>
        <h2>App(parent) Component</h2>
        <ComponentA theme={theme} />
      </div>
    </>
  )
}

function ComponentA({ theme }) {
  return (
    <>
      <div className="app" style={{ border: '2px solid blue', padding: "20px", margin: "20px" }}>
        <h2>ComponentA(child) Component</h2>
        <ComponentB theme={theme} />
      </div>
    </>
  )
}

function ComponentB({ theme }) {
  return (
    <>
      <div className="app" style={{ border: '2px solid green', padding: "20px", margin: "20px" }}>
        <h2>ComponentB(grandchild) Component</h2>
        <ThemedComponent theme={theme} />
      </div>
    </>
  )
}

function ThemedComponent({ theme }) {
  return (
    <>
      <div className="app" style={{ border: '2px solid red', padding: "20px", margin: "20px" }}>
        <h2>ThemedComponent(great-grandchild) Component</h2>
        <div>The current theme is = {theme}</div>
      </div>
    </>
  )
}

export default App
