import React, { useEffect, useState } from 'react';

import './effects.css';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
  });

  const { name, email } = formState;

  useEffect(() => {
    console.log('useEffect');
  }, []);

  useEffect(() => {
    console.log('formState is changed...');
  }, [formState]);

  useEffect(() => {
    console.log('email changed...')
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      
        <div className="form-group">
          <input 
            type="text"
            name="name"
            className="form-control"
            placeholder="Seu Nome"
            autoComplete="off"
            value={name} 
            onChange={handleInputChange}
          />
          <input 
            type="text"
            name="email"
            className="form-control"
            placeholder="seuemail@email.com"
            autoComplete="off"
            value={email} 
            onChange={handleInputChange}
          />
        </div>
      
    </>
  )
}