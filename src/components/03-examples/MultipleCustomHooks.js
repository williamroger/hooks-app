import React from 'react';
import './example.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const MultipleCustomHooks = () => {
  const {counter, increment} = useCounter(1);
  
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote, author } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad API Quotes</h1>
      <hr />

      {loading
        ? 
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
        :
          (
            <figure className="text-end">
              <blockquote className="blockquote">
                <p>{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
              </blockquote>
            </figure>
          )
      }

      <button 
        className="btn btn-primary"
        onClick={increment}
      >
        Frase seguinte
      </button>
    </div>
  );
}