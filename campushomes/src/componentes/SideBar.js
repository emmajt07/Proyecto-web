import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="closebtn" onClick={toggleSidebar}>&times;</button>
      <Link to="/login" onClick={toggleSidebar}>Iniciar sesión</Link>
      <Link to="/catalog" onClick={toggleSidebar}>Viviendas</Link>
      <Link to="/add-property" onClick={toggleSidebar}>Subir vivienda</Link>
    </div>
  );
}

export default Sidebar;