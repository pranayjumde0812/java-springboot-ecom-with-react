import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, []);

  if (loading) {
    return <div><p>Loading...</p></div>;
  }

  if (error) {
    return <div><p>Error fetching data: {error.message}</p></div>;
  }

  return (
    <>
      <div>
        <h1>Data from API</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <p>{item.userId}</p>
              <p>{item.id}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
