import React, { useState, useEffect, useRef } from 'react';
import testimonios from './data';
import Testimonial from './components/Testimonial';
import Controls from './components/Controls';
import './styles.css';

function App() {
  // Definicion de los hooks
  const [index, setIndex] = useState(0);
  const length = testimonios.length;
  const autoplayRef = useRef(null);

  // Definicion de las funciones de control
  const next = () => setIndex(prev => (prev + 1) % length);
  const prev = () => setIndex(prev => (prev - 1 + length) % length);
  const random = () => {
    let r = Math.floor(Math.random() * length);
    if (r === index) r = (r + 1) % length;
    setIndex(r);
  }

  // Autoplay con useEffect
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, 5000);
    return () => clearInterval(autoplayRef.current);
  }, [length]);

  // Reiniciar autoplay al usar controles
  const handleUserAction = (actionFn) => {
    clearInterval(autoplayRef.current);
    actionFn();
    autoplayRef.current = setInterval(() => {
      setIndex(i => (i + 1) % length);
    }, 5000);
  };

  return (
    <main className='app'>
      <h1>Testimonios de la empresa</h1>
      <div className="card-wrapper">
        <Testimonial 
          // Agregar key para forzar re-render del Testimonial
          key={index}
          // Agregar key para forzar re-render del Testimonial
          item={testimonios[index]} /> 
      </div>

      {/* Controles de navegación */}
      <Controls 
        onPrev={() => handleUserAction(prev)} 
        onNext={() => handleUserAction(next)} 
        onRandom={() => handleUserAction(random)} 
      />

      {/* Contador de testimonios */}
      <p className="counter">{index + 1} / {length}</p>
    </main>
  );
}

export default App;
