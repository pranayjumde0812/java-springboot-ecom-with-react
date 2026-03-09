import { useState } from 'react';
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div>
        <h1>React Hooks Form</h1>
        <form onSubmit={handleSubmit}>
          <label>Name :
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange} /> <br />
          </label>

          <label>Email :
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange} /> <br />
          </label>

          <label>Password :
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange} /> <br />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
