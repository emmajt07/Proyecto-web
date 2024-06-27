import React from 'react';
import './SideBar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <a href="#" className="closebtn" onClick={toggleSidebar}>&times;</a>
      <a href="#">Iniciar sesión</a>
      <a href="#">Viviendas</a>
      <a href="#">Subir vivienda</a>
    </div>
  );
}

export default Sidebar;
