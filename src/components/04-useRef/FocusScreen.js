import React, { useRef } from 'react';
import './focus.css';

export const FocusScreen = () => {
  const inputRef = useRef();
  
  const handleClick = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input 
        ref={inputRef}
        type="text" 
        className="form-control"
        placeholder="Seu nome"
      />

      <button 
        className="btn btn-primary mt-5"
        onClick={handleClick}
      >
        Focus
      </button>
    </>
  );
}