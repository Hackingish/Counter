import { useState } from "react";


const App = () => {

  const [input,setInput] = useState(0);

  const setIncrement = () =>{
    setInput((prev) => prev + 1);
  }

  const setDecrement = () =>{
    setInput((prev) => prev - 1);
  }
  return (
    <div className="container">
      <div className="counter">
        <div className="display">{input || "0"}</div>

        <div className="button">
          <button onClick={setIncrement}>+</button>  
          <button onClick={setDecrement}>-</button>
        </div>
      </div>
    </div>
  )
}

export default App