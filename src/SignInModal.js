import React from 'react';
import {
  Modal, Box, Typography, TextField, Button, Divider, Link
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledModalContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  outline: 'none',
}));

function SignInModal({ open, onClose, onSignUpClick }) {
  const handleSignUpRedirect = () => {
    onClose();
    onSignUpClick();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="sign-in-modal-title"
      aria-describedby="sign-in-modal-description"
    >
      <StyledModalContent>
        <Typography id="sign-in-modal-title" variant="h5" fontWeight="bold" textAlign="center">
          Welcome Back
        </Typography>
        <Typography id="sign-in-modal-description" variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 2 }}>
          Sign in to access your digital identity dashboard
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          autoFocus
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <Button variant="contained" fullWidth sx={{ mt: 2, py: 1.5 }}>
          Sign In
        </Button>

        <Link
          component="button"
          variant="body2"
          onClick={handleSignUpRedirect}
          sx={{ mt: 1, textAlign: 'center', textDecoration: 'underline' }}
        >
          Don’t have an account? Sign up
        </Link>

        <Divider sx={{ my: 2 }}>or</Divider>

        <Button variant="contained" fullWidth sx={{ py: 1.5, backgroundColor: '#1A73E8' }}>
          Sign in anonymously
        </Button>
      </StyledModalContent>
    </Modal>
  );
}

export default SignInModal;
