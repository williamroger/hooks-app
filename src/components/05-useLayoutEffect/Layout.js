import React, { useLayoutEffect, useRef, useState } from 'react';
import './layout.css';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {
  const {counter, increment} = useCounter(1);
  
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    console.log('useLayoutEffect ', pTag.current.getBoundingClientRect());
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <hr />

      <figure className="text-end">
        <blockquote className="blockquote">
          <p ref={pTag}>{quote}</p>
        </blockquote>
      </figure>
      
      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>

      <button 
        className="btn btn-primary"
        onClick={increment}
      >
        Frase seguinte
      </button>
    </div>
  );
}