import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const { x, y } = coords;

  useEffect(() => {
    console.log('Componente montado');

    const mouseMove = (e) => {
      const coords = {
        x: e.x,
        y: e.y,
      }
      setCoords(coords);
    }

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  }, []);

  return (
    <div>
      <h1>Coordenadas</h1>
      <h3>X: {x}</h3>
      <h3>Y: {y}</h3>
    </div>
  );
}

