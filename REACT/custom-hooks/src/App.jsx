import './App.css'
import useCounter from './hooks/useCounter';

// custom hooks in react are the functions
// that let you reuse stateful logic
// across multiple components
// custom hooks start with "use"
// and can call other hooks
// custom hooks are the way to extract
// stateful logic from a component
// to a reusable function
// custom hooks are the way to extract
// stateful logic from a component
// to a reusable function
// custom hooks are the way to extract
// stateful logic from a component
// to a reusable function
// custom hooks are the way to extract
// stateful logic from a component
// to a reusable function

function App() {

  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h1>Custom Hooks</h1>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App;
