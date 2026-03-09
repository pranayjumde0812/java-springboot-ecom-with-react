import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'

function App() {

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')
    ])
      .then(axios.spread((posts, users) => {
        console.log(posts);
        console.log(users);
        setPosts(posts.data);
        setUsers(users.data);
        setLoading(false);
      }))
      .catch(error => {
        setError(error);
        setLoading(false);
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
          {posts.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <p>{item.userId}</p>
              <p>{item.id}</p>
              <hr />
            </li>
          ))}
        </ul>
        <ul>
          {users.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.email}</p>
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
