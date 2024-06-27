import React, { useState } from 'react';
import '../componentes/Main.css';
import Sidebar from '../componentes/SideBar.js';

import logo from '../componentes/logo.jpg';
import casaIcon from '../componentes/casa.png';
import mejorPrecioIcon from '../componentes/mejor-precio.png';
import verificadoIcon from '../componentes/verificado.png';
import cubiertosCruzadosIcon from '../componentes/cubiertos-cruzados.png';
import eleccionIcon from '../componentes/eleccion.png';

const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-page">
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="menu-icon" onClick={toggleSidebar}>
                &#9776; {/* Icono de menú */}
            </div>
        </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main>
        <section className="hero">
            <div className="hero-text">
                <h1 className="hero-heading">Encuentra tu hogar perfecto</h1>
            </div>
        </section>
        <section className="features">
          <div className="feature">
            <img src={casaIcon} alt="Mayor comodidad" />
            <p>Mayor comodidad</p>
          </div>
          <div className="feature">
            <img src={mejorPrecioIcon} alt="Mejores precios" />
            <p>Mejores precios</p>
          </div>
          <div className="feature">
            <img src={verificadoIcon} alt="Más seguridad" />
            <p>Más seguridad</p>
          </div>
          <div className="feature">
            <img src={cubiertosCruzadosIcon} alt="Servicios cercanos" />
            <p>Servicios cercanos</p>
          </div>
          <div className="feature">
            <img src={eleccionIcon} alt="Más opciones" />
            <p>Mucho mas</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MainPage;
