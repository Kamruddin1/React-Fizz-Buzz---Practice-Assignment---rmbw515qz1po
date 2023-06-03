import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [count, setCount] = useState(1);
 

  const handleIncrement = () =>{
    setCount((prevState) => prevState + 1);
   
  }
  const handleDecrement = () =>{
    setCount((prevState) => prevState - 1);
  }

  const getColorClassName = () =>{
    if(count % 3 == 0 && count % 5 == 0){
      return "fizzbuzz";
    }
    else if(count % 3 == 0){
      return "fizz";
    }
    else if(count % 5 == 0){
      return "buzz";
    }
    else{
      return "normal";
    }
  }

  
  return (
    <div id="main">

      <button onClick={handleIncrement}>Increment</button>
      <p className={getColorClassName()}>{count}</p>
      
      <button onClick={handleDecrement}>Decrement</button>

    </div>
  )
}


export default App;
