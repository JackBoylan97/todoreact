import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Another from './Another';
function App() {

  function decrement(){
    setCount(count -1);
  }

  function increment(){
    setCount(count + 1);
  }
  const [count,setCount] = useState(0);
  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold'
  }
  return (
    <div className="App">
      <header className="App-header">
        <Another name="Jack"></Another>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <span>{count}</span>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {true &&
        <p style={someStyle}>I'm jack and im {20+6}</p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
