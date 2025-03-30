import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import SampleImage1 from '../assets/SampleImage1.png';
import SampleImage2 from '../assets/SampleImage1.png';

const CrowdFunding = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h2" gutterBottom>
          Aarogya Vardaan Crowdfunding Campaign
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: '800px', margin: '0 auto' }}>
          Aarogya Vardaan is dedicated to ensuring that house helps and low-income workers have access to essential health insurance. Through this crowdfunding initiative, we aim to provide financial security and healthcare support to those who need it most.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => window.open('https://forms.gle/your-google-form-link', '_blank')}
        >
          Donate Now
        </Button>
      </Container>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Our Mission & Vision
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Mission:</strong> To bridge the gap in healthcare access by ensuring affordable insurance coverage for house helps and low-income workers.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Vision:</strong> A future where no one is denied quality healthcare due to financial constraints.
        </Typography>
      </Container>

      {/* About Rotary SOBO */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          About Rotary SOBO
        </Typography>
        <Typography>
          Rotary Club of South Bombay (SOBO) is a service-driven organization committed to social impact through various initiatives, including healthcare, education, and community development. As a key partner in this campaign, Rotary SOBO helps expand the reach and impact of Aarogya Vardaan’s mission.
        </Typography>
      </Container>

      {/* Donation Impact */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          How Your Donation Helps
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">₹500</Typography>
            <Typography>Can cover a portion of an individual’s premium.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">₹1000</Typography>
            <Typography>Can provide full coverage for a house help’s medical emergencies.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">₹5000</Typography>
            <Typography>Can sponsor an entire family’s insurance for a year.</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Participants Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>
          Key Participants
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Aarogya Vardaan Team</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Rotary SOBO Representatives</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Volunteers and Supporters</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Progress Tracker */}
      <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Fundraising Progress
        </Typography>
        <Box sx={{ height: 20, backgroundColor: '#ccc', borderRadius: 10, overflow: 'hidden', position: 'relative' }}>
          <Box sx={{ width: '60%', backgroundColor: '#4caf50', height: '100%' }}></Box>
        </Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          ₹3,00,000 raised of ₹5,00,000 goal
        </Typography>
      </Container>

      <Footer />
    </div>
  );
};

export default CrowdFunding;
