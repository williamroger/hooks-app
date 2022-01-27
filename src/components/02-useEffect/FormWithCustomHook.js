import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook = () => {
  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formValues;
  
  useEffect(() => {
    console.log('Email is changed');
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados form: ', formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group mb-3">
        <input 
          type="text"
          name="name"
          className="form-control"
          placeholder="Seu Nome"
          autoComplete="off"
          value={name} 
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mb-3">
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

      <div className="form-group mb-3">
        <input 
          type="password"
          name="password"
          className="form-control"
          placeholder="**********"
          value={password} 
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  )
}