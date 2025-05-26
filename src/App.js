import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

import Home from './components/Home';
import About from './components/About';
import UserProfile from './components/UserProfile';
import NotFound from './components/NotFound';
import Login from './auth/Login';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './components/DashboardHome';
import DashboardSettings from './components/DashboardSettings';

function App() {
  return (
    <AuthProvider>
      <div className="font-sans min-h-screen bg-gray-50 text-gray-800">
        {/* Public header/nav */}
        <header className="bg-white shadow p-4">
          <nav className="space-x-4">
            <NavLink to="/"   className={({isActive}) => isActive ? 'text-blue-500 font-bold' : ''}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : ''}>About</NavLink>
            <NavLink to="/user/1" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : ''}>User 1</NavLink>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? 'text-blue-500 font-bold' : ''}>Dashboard</NavLink>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user/:id" element={<UserProfile />} />
            <Route path="/login" element={<Login />} />

            {/* Protected & Nested */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route index element={<DashboardHome />} />
              <Route path="home"     element={<DashboardHome />} />
              <Route path="settings" element={<DashboardSettings />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;
