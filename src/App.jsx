import { useState } from "react";


const App = () => {

  const [input,setInput] = useState(0);

  const setIncrement = () =>{
    setInput((prev) => prev + 1);
  }

  const setDecrement = () =>{
    setInput((prev) => prev - 1);
  }

  const setReset = () => {
    setInput(0)
  }
  return (
    <div className="container">
      <div className="counter">
        <div className="display">{input || "0"}</div>

        <div className="buttons">
          <button className = "btn" onClick={setIncrement}>+</button>  
          <button className = "btn" onClick={setDecrement}>-</button>
          <button className = "btn reset" onClick={setReset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App