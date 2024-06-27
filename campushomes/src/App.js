import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomesPage from './pages/HomesPage';
import AddHome from './pages/AddHome';
import Sidebar from './componentes/SideBar';
import { AuthProvider } from './componentes/AuthContext';
import ProtectedRoute from './componentes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/catalog" element={<HomesPage />} />
            <Route
              path="/add-property"
              element={
                <ProtectedRoute>
                  <AddHome />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
