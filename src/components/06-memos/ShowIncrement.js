import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {
  console.log('showIncrement generated again :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => { increment(5); }}
    >
      Incrementar
    </button>
  );
});
