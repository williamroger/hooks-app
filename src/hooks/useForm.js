import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputValue = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  }

  return [
    values,
    handleInputValue
  ];
}