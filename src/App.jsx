import React, { useEffect, useRef } from 'react';
import Garage from './components/Garage/Garage';
import Voiture from './components/Voiture/Voiture';
import Moto from './components/Moto/Moto';
import Camion from './components/Camion/Camion';
import './App.css'

function App() {
  
  const garageRef = useRef(null);

  // Call the afficherDetails method of the garage when the component is mounted
  useEffect(() => {
    garageRef.current.afficherDetails();
  }, []);

  return (
    <div className="App">
      <Garage ref={garageRef} />
    </div>
  );

};

export default App
