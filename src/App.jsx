import logo from './logo.svg';
import Greeting from './components/Greeting';
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Welcome to React</h1>
      <Greeting name="Ori" color="blue" />
      <p> This is your first React Component</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
