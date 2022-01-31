import React, { useState, useMemo } from 'react';
import './memo.css';
import { processWeight } from '../../helpers/processWeight';

import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcessWeight = useMemo(() => processWeight(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <hr />

      <h3>Counter: <small>{counter}</small></h3>

      <p>{memoProcessWeight}</p>

      <button 
        className="btn btn-primary" 
        onClick={increment}
      >
          +1
      </button>
    
      <button 
        className="btn btn-outline-primary ms-5"
        onClick={() => setShow(!show)}  
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
}