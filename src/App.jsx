import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Inicio from './routes/Inicio/Inicio';
import Servicios from './routes/Servicios/Servicios';
import Enfermedades from './routes/Enfermedades/Enfermedades';
import Medicamentos from './routes/Medicamentos/Medicamentos';
import Contacto from './routes/Contacto/Contacto';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/enfermedades" element={<Enfermedades />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
