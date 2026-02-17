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

const CrowdfundingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Featured Impact Story */}
<Container maxWidth="md" sx={{ py: 6 }}>
  <Typography variant="h3" gutterBottom>
    Building Health Insurance Access at Kanakia International School
  </Typography>

  <Typography
    variant="subtitle1"
    color="text.secondary"
    sx={{ mb: 4 }}
  >
    A student-led initiative creating long-term healthcare security for school support staff
  </Typography>

  <Typography paragraph>
    Most schools have people who are everywhere and nowhere at once. They open gates before the first bell rings,
    clean classrooms after everyone leaves, and keep hallways running without drawing attention to themselves.
    Their work is constant, but their access to long-term security often is not.
  </Typography>

  <Typography paragraph>
    Healthcare, especially, tends to sit outside the boundaries of what institutions formally provide.
    They are employed in formal institutions, yet remain outside most employer-provided healthcare systems.
    In Mumbai, this gap became the focus of a sustained effort at Kanakia International School.
  </Typography>

  <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
    How It Started
  </Typography>

  <Typography paragraph>
    In January 2025, we began with an insurance awareness session for the school’s support staff.
    The session focused on how medical insurance works in practice, what it covers, and why having
    coverage matters even in the absence of immediate medical needs.
  </Typography>

  <Typography paragraph>
    For many staff members, this was their first opportunity to engage directly with these questions
    and break the myth of insurance being inaccessible.
  </Typography>

  <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
    From Awareness to Action
  </Typography>

  <Typography paragraph>
    Following the session, we approached the school authorities with a proposal to formally partner
    with Aarogya Vardaan and facilitate low-cost health insurance for the staff.
    The aim was simple but ambitious: to create structured, affordable health insurance access
    within the school ecosystem itself.
  </Typography>

  <Typography paragraph>
    To ensure financial transparency and institutional guidance, we partnered with the Rotary Club
    of South Bombay. With their support, a student-led crowdfunding campaign was launched at
    Kanakia International School, involving students from Grades 8 to 12.
  </Typography>

  <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
    Measurable Impact
  </Typography>

  <Box
    sx={{
      backgroundColor: '#f5f7fa',
      p: 3,
      borderRadius: 2,
      my: 3
    }}
  >
    <Typography><strong>₹85,000</strong> raised through crowdfunding</Typography>
    <Typography><strong>11</strong> support staff members insured</Typography>
    <Typography>
      Insurance provided via Aarogya Vardaan’s partner <strong>Clinikk</strong>
    </Typography>
    <Typography>
      Enrolment prioritised older staff members
    </Typography>
  </Box>

  <Typography paragraph>
    These funds were channelled directly into medical insurance premiums, keeping the focus
    on long-term protection rather than short-term relief.
  </Typography>

  <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
    What Comes Next
  </Typography>

  <Typography paragraph>
    This effort is ongoing. Our goal is to extend insurance coverage to all 40 support staff members
    at the school and to continue enrolling staff as funds are raised.
  </Typography>

  <Typography paragraph>
    What began as a conversation has become infrastructure. And it is still growing.
  </Typography>
</Container>
      
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

export default CrowdfundingPage;
