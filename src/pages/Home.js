import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const Home = () => {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold">Material Kit 2 React</Typography>
          <Typography variant="h6" mt={2}>
            Free & Open Source Web UI Kit built over ReactJS & MUI.
          </Typography>
        </Container>
      </Box>

      <Container sx={{ mt: -10, mb: 5 }}>
        <Paper elevation={3} sx={{ p: 5 }}>
          <Grid container spacing={4} textAlign="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h4" color="primary">70+</Typography>
              <Typography>Coded Elements</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" color="primary">15+</Typography>
              <Typography>Design Blocks</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" color="primary">4</Typography>
              <Typography>Pages</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Home;
