import React, { useState } from 'react';
import "./CounterApp.css";

const CounterApp = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='disp'>
        <h1 className='header'>{count}</h1>
        <button className='btn' onClick={()=>{
            setCount(count +1 );
        }}>
            Increement count </button>
        <button className='btn'>Decreement Count </button>
        <button className='btn'>Reset Count </button>
      
    </div>
  );
};

export default CounterApp;