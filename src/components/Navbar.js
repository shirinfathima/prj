import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          TrustNet
        </Typography>
        <Box>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/sign-in" color="inherit">Sign In</Button>
          <Button component={Link} to="/register" color="inherit">Register</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
