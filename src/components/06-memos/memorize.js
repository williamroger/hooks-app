import React, { useState } from 'react';
import './memo.css';

import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Memorize</h1>
      <hr />

      <h3>Counter: <Small value={counter} /></h3>

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