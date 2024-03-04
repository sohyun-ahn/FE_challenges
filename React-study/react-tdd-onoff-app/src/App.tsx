import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button
          data-testid="minus-button"
          onClick={() => setCount(count - 1)}
          disabled={disabled}
        >
          -
        </button>
        <button
          data-testid="plus-button"
          onClick={() => setCount(count + 1)}
          disabled={disabled}
        >
          +
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          data-testid="onoff-button"
          onClick={() => setDisabled(!disabled)}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
