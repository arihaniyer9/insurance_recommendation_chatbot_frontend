import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardComponent from '../components/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SampleImage1 from '../assets/SampleImage1.png';
import SampleImage2 from '../assets/SampleImage1.png';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Tally embeds when component mounts
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const cards = [
    { image: SampleImage1 },
    { image: SampleImage2 },
    { image: 'image3.jpg' },
  ];

  return (
    <div>
      <Navbar />

      {/* First Section - Cards and Headline */}
      <Box sx={{ p: 2 }}>
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardComponent image={card.image} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Container maxWidth="sm">
        <Typography variant="h2" align="center" sx={{ my: 4 }}>
          Headline
        </Typography>
      </Container>

      <Box sx={{ p: 2 }}>
        <Grid container spacing={3}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardComponent image={card.image} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Second Section - "What We Do" */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h4" gutterBottom align="left">
          What we do:
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Awareness
            </Typography>
            <Typography>
              Convince househelps about the importance and benefit of health insurance through awareness sessions.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Insurance
            </Typography>
            <Typography>
              Recommend optimal health insurance based on income, residential, and health needs.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Community Support
            </Typography>
            <Typography>
              Support to buy insurance, connect to hospitals, and non-governmental organizations.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={SampleImage1}
              alt="Sample"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              35+ caregivers helped
            </Typography>
            <Typography variant="h6" gutterBottom>
              INR 85000 fundraised
            </Typography>
            <Typography variant="h6" gutterBottom>
              200+ caregivers made aware
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={SampleImage2}
              alt="Sample"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Tally Form Section */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h4" gutterBottom align="center">
          Get in Touch
        </Typography>
        <Box sx={{ 
          width: '100%',
          my: 4,
          borderRadius: 2,
          overflow: 'hidden'
        }}>
          <iframe 
            data-tally-src="https://tally.so/embed/wvz5aQ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="500" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0" 
            title="Aarogya Vardaan"
            style={{ border: 'none' }}
          />
        </Box>
      </Container>

      {/* Third Section - Arrow Icon and Testimonials */}
      <Container maxWidth="lg" sx={{ mt: 6, mb: 6, textAlign: 'center' }}>
        {/* Downward Arrow Icon */}
        <ArrowDownwardIcon sx={{ fontSize: '3rem', mb: 4 }} />

        {/* Testimonials Section */}
        <Typography variant="h4" gutterBottom align="left">
          Testimonials
        </Typography>

        {/* First Testimonial (Left Aligned) */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" align="left">
              Health insurance has been the most beneficial plan I have invested in. It helped me get medicines for COVID.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="right">
              By Vasuki Rajeswan
            </Typography>
          </Grid>
        </Grid>

        {/* Second Testimonial (Right Aligned) */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="left">
              By Harish Kumar
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" align="right">
              I was able to take care of my parents' medical bills, all thanks to the health insurance. It has been a true lifesaver.
            </Typography>
          </Grid>
        </Grid>

        {/* Third Testimonial (Left Aligned) */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} sm={8}>
            <Typography variant="body1" align="left">
              Thanks to the insurance, I have been able to access healthcare at a very low cost for my entire family.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" align="right">
              By Anjali Singh
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </div>
  );
};

export default LandingPage;
