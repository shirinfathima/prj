import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

// Import all pages
import HomePage from './HomePage';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import DocumentUpload from './pages/DocumentUpload';
import VerificationResult from './pages/VerificationResult';
import AdminDashboard from './pages/AdminDashboard';
import VerifierDashboard from './pages/VerifierDashboard';
import FraudDetection from './pages/FraudDetection';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        
        {/* User Routes */}
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/upload" element={<DocumentUpload />} />
        <Route path="/verification-result" element={<VerificationResult />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        
        {/* Verifier Routes */}
        <Route path="/verifier" element={<VerifierDashboard />} />
        <Route path="/verifier/dashboard" element={<VerifierDashboard />} />
        
        {/* Security Routes */}
        <Route path="/fraud-detection" element={<FraudDetection />} />
        
        {/* Fallback Route */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
