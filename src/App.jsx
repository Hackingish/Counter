import React from 'react'

const App = () => {
  return (
    <div className="container">
      <div className="counter">
        <div>
          <input type="text" placeholder='0'/>
        </div>

        <div className="button">
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </div>
  )
}

export default App