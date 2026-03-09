import { useState } from 'react';
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
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
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          </label>

          <label>Email :
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange} /> <br />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </label>

          <label>Password :
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange} /> <br />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
