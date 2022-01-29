import React, { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Olha o Small aqui :(');

  return (
    <small>{value}</small>
  );
});