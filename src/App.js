import React, { useState } from 'react'
import './App.css';

const App = () => {
  const[holdResult, setHoldldResult] = useState(0)


  const handleDecrese =()=>{
    if (holdResult >0){
      const newResult = holdResult - 1;
      setHoldldResult(newResult) 
    }else{
      alert("Can not go below 0.")
    }
  }

const handleIncrease =()=>{
  const newResultIncrease = holdResult + 1
setHoldldResult(newResultIncrease)
}


const handleReset =()=>{
  const newResultReset = 0
  setHoldldResult(newResultReset)
}
  return (
    <>
    <div className='mainBox'>
      <div className='smallBox'>
        <div className='showResult'>
       Counter: {holdResult}
        </div>
        <button onClick={handleDecrese}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
      </div>

    </div>
    </>
  )
}

export default App