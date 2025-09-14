import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    document: null
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
    alert('Registration submitted successfully!');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
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
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange('email')}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={formData.password}
            onChange={handleInputChange('password')}
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            variant="outlined"
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
            <Box sx={{ mt: 2, mb: 2 }}>
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
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 3 }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;