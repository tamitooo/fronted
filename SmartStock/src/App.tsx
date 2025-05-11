import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Inventory from './pages/Inventory';
import Bussiness from './pages/Bussiness';
import SidebarLayout from './pages/SidebarLayout';
import "./utils/axiosInterceptor";

function AppContent() {
  const location = useLocation();

  // Rutas donde NO debe aparecer el Navbar (porque se usa Sidebar)
  const hideNavbarRoutes = ['/dashboard', '/profile', '/inventory', '/bussiness'];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas con Sidebar */}
        <Route
          path="/dashboard"
          element={
            <SidebarLayout>
              <Dashboard />
            </SidebarLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <SidebarLayout>
              <Profile />
            </SidebarLayout>
          }
        />
        <Route
          path="/inventory"
          element={
            <SidebarLayout>
              <Inventory />
            </SidebarLayout>
          }
        />
        <Route
          path="/bussiness"
          element={
            <SidebarLayout>
              <Bussiness />
            </SidebarLayout>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
