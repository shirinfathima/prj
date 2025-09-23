// src/SignUpModal.js
import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button, Divider, Link,
  FormControl, InputLabel, Select, MenuItem
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  outline: 'none',
  maxHeight: '80vh',
  overflowY: 'auto',
}));

function SignUpModal({ open, onClose, onSignInClick }) {
  const [formData, setFormData] = useState({
    fullName: '', // Added Full Name field
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    document: null
  });

  const handleSignInRedirect = () => {
    onClose();
    onSignInClick();
  };

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleSubmit = () => {
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Registration data:', formData);
    // Here you would typically send this data to your backend
    alert('Registration submitted!');
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="sign-up-modal-title"
      aria-describedby="sign-up-modal-description"
    >
      <StyledModalContent>
        <Typography id="sign-up-modal-title" variant="h5" fontWeight="bold" textAlign="center">
          Create Account
        </Typography>
        <Typography id="sign-up-modal-description" variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 2 }}>
          Join TrustNet to start verifying your identity
        </Typography>
        
        {/* New Full Name TextField */}
        <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            variant="outlined"
            value={formData.fullName}
            onChange={handleInputChange('fullName')}
            required
          />

        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleInputChange('email')}
          required
        />
        
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.password}
          onChange={handleInputChange('password')}
          required
        />
        
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          required
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Role</InputLabel>
          <Select
            value={formData.role}
            onChange={handleInputChange('role')}
            label="Role"
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="verifier">Verifier</MenuItem>
            <MenuItem value="issuer">Issuer</MenuItem>
          </Select>
        </FormControl>

        <Button 
          variant="contained" 
          fullWidth 
          sx={{ mt: 3, py: 1.5 }}
          onClick={handleSubmit}
        >
          Sign Up
        </Button>

        <Link
          component="button"
          variant="body2"
          onClick={handleSignInRedirect}
          sx={{ mt: 1, textAlign: 'center', textDecoration: 'underline' }}
        >
          Already have an account? Sign in
        </Link>

        <Divider sx={{ my: 2 }}>or</Divider>

        <Button variant="contained" fullWidth sx={{ py: 1.5, backgroundColor: '#1A73E8' }}>
          Sign up with Google
        </Button>
      </StyledModalContent>
    </Modal>
  );
}

export default SignUpModal;