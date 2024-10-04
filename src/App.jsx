import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Dashboard from './pages/Dashboard';
import ChatInterface from './pages/ChatInterface';
import InsuranceInfoPage from './pages/InsuranceInfoPage';
import UserAccountPage from './pages/UserAccountPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/chat" element={<ChatInterface/>} />
        <Route path="/info" element={<InsuranceInfoPage/>} />
        <Route path="/acct" element={<UserAccountPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

