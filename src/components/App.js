import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
 const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevState) => prevState +1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevState) => prevState -1);
    }
  };

  const getCounterClass = () => {
    if (count % 3 === 0 && count % 5 === 0) {
      return 'fizzbuzz';
    } else if (count % 3 === 0) {
      return 'fizz';
    } else if (count % 5 === 0) {
      return 'buzz';
    } else {
      return 'normal';
    }
  };

  return (
    <div className="App">
    
      <button id="increment" onClick={handleIncrement}>Increment</button>
      <div id="counter" className={getCounterClass()}>{count}</div>
      <button id="decrement" onClick={handleDecrement}>Decrement</button>
    </div>
  );
}


export default App;
