import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import SignInPage from './SignInPage/SignInPage';
import AdminDashboard from './Admin&Dispatcher/AdminPage/AdminDashboard';
import DispatcherDashboard from './Admin&Dispatcher/DispatcherPage/DispatcherDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dispatcher" element={<DispatcherDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
