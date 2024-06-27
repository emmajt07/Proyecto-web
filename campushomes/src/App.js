import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '.../src/pages/MainPage.js';
import LoginPage from '.../src/pages/LoginPage.js';
import RegisterPage from '.../src/pages/RegisterPage.js';
import HousingCatalogPage from '.../src/pages/HomesPage.js';
import AddPropertyPage from '.../src/pages/AddHome.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/catalog" element={<HousingCatalogPage />} />
          <Route path="/add-property" element={<AddPropertyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
