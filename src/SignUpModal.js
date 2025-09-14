// src/SignUpModal.js
import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button, Divider, Link,
  FormControl, InputLabel, Select, MenuItem, Input
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please select a valid file type (JPEG, PNG, PDF)');
        return;
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }

      setFormData({
        ...formData,
        document: file
      });
    }
  };

  const handleSubmit = () => {
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!formData.document && formData.role !== 'admin') {
      alert('Please upload an identity document');
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
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>

        {formData.role !== 'admin' && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Upload Identity Document (PDF/Image) *
            </Typography>
            <Input
              type="file"
              inputProps={{ 
                accept: '.pdf,.jpg,.jpeg,.png',
                onChange: handleFileUpload
              }}
              style={{ display: 'none' }}
              id="document-upload"
            />
            <label htmlFor="document-upload">
              <Button
                variant="outlined"
                component="span"
                startIcon={<CloudUploadIcon />}
                fullWidth
              >
                {formData.document ? formData.document.name : 'Choose File'}
              </Button>
            </label>
            {formData.document && (
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                Selected: {formData.document.name} ({(formData.document.size / 1024 / 1024).toFixed(2)} MB)
              </Typography>
            )}
            <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
              Supported formats: PDF, JPG, PNG (Max 10MB)
            </Typography>
          </Box>
        )}

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