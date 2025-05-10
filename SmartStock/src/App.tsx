import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Inventory from './pages/Inventory';
import Bussiness from './pages/Bussiness';

function AppContent() {
  const location = useLocation();

  // Rutas que NO deben mostrar el Navbar
  const hideNavbarRoutes = ['/dashboard', '/profile', '/inventory', '/bussiness'];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/bussiness" element={<Bussiness />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
