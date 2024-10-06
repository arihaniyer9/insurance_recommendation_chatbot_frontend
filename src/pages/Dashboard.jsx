import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={4} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 6 }} mt={3}>
        <Grid item md={6}>
        <Link to="/info">
          <Box
            height={300}
            width={690}
            my={4}
            display="flex"
            gap={4}
            p={15}
            sx={{ display: 'inline-block', mx: '2px', border: '2px solid grey' }}
          >
            <Typography variant="h3">Why Insurance?</Typography>
            <Typography variant="body1">Explore why investing in financial stability is best for our future.</Typography>
          </Box>
          </Link>
        </Grid>
        <Grid item md={6}>
        <Link to="/chat">
          <Box
            height={300}
            width={690}
            my={4}
            display="flex"
            gap={4}
            p={15}
            sx={{ display: 'inline-block', mx: '2px', border: '2px solid grey' }}
          >
            <Typography variant="h3">Insurance Recommender</Typography>
            <Typography variant="body1">Choose the best insurance based on financial, residential, and medical needs.</Typography>
          </Box>
          </Link>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 4 }} mt={3}>
        <Grid item md={4}></Grid>
        <Grid item md={4}>
        <Link to="/community">
          <Box
            height={300}
            width={690}
            my={4}
            display="flex"
            gap={4}
            p={15}
            sx={{ display: 'inline-block', mx: '2px', border: '2px solid grey' }}
          >
            <Typography variant="h3">Community Support</Typography>
            <Typography variant="body1">Need help for bank loans, jobs and medical support?</Typography>
          </Box>
          </Link>
        </Grid>
        <Grid item md={4}>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;