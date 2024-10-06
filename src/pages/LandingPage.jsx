import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import  { useState } from 'react';
import CardComponent from '../components/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';
import image11 from '../assets/image11.png';
import image12 from '../assets/image12.png';
import TypingAnimator from 'react-typing-animator';

const LandingPage = () => {
  const cards = [
    { image: image1 },
    { image: image2 }
  ];

  const cards2 = [
    { image: image3 },
    { image: image4 },
    { image: image5 }
  ];
 
const textArray = ['400M dont have insurance.', 'What can we do?'];
  return (
    <div>
      <Navbar />
      {/* Header Section */}
      <Box sx={{ py: 45, backgroundColor: '#08C2FF', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}} > 
        <Container maxWidth="md" sx={{ textAlign: 'center' }}> 
          <TypingAnimator textArray={textArray} cursorColor="#000000" textColor="#000000" fontSize="150px" typingSpeed={250} delaySpeed={1000} height={'175px'} backspace={true} loop={true} style={{ fontFamily: 'Boogaloo, sans-serif', fontSize: '110px', color: 'white', fontWeight: 'bold', textAlign: 'center' }} /> 
          </Container> 
          </Box>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" fontWeight="bold" gutterBottom sx={{ color: 'black', fontWeight: 'bold', letterSpacing: 1, fontFamily: 'Boogaloo' }}>
            Empowering Caregivers: Our Impact in Pictures 
          </Typography>
          <Grid container spacing={4} justifyContent="center">
    
      <Grid item xs={12} sm={6} md={4}>
        <div style={{
          border: '5px solid black', // Black outline
          borderRadius: '8px', // Rounded corners
          overflow: 'hidden', // Prevent overflow if the image is rounded
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
        }}>
          <img 
            src={image1} 
            alt="Image 1" 
            style={{ 
              width: '100%', 
              height: 'auto', // Maintain aspect ratio
              display: 'block' // Remove bottom spacing of images
            }} 
          />
        </div>
      </Grid>

      {/* Image 2 */}
      <Grid item xs={12} sm={6} md={4}>
        <div style={{
          border: '5px solid black', // Black outline
          borderRadius: '8px', // Rounded corners
          overflow: 'hidden', // Prevent overflow if the image is rounded
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
        }}>
          <img 
            src={image2} 
            alt="Image 2" 
            style={{ 
              width: '100%', 
              height: 'auto', // Maintain aspect ratio
              display: 'block' // Remove bottom spacing of images
            }} 
          />
        </div>
      </Grid>
    </Grid>
        </Container>
      

      {/* "What We Do" Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            What We Do
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">Awareness</Typography>
                <Typography>Convince househelps about the importance and benefit of health insurance through awareness sessions.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">Insurance</Typography>
                <Typography>Recommend optimal health insurance based on income, residential, and health needs.</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold">Community Support</Typography>
                <Typography>Support to buy insurance, connect to hospitals and non-governmental organizations.</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Impact Section */}
      <Box sx={{ py: 10, backgroundColor: '#f4f4f4' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
      <div style={{
        border: '5px solid black', // Black outline
        borderRadius: '8px', // Rounded corners
        overflow: 'hidden', // Prevent overflow if the image is rounded
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
      }}>
        <img 
          src={image6} 
          alt="Community Support" 
          style={{ 
            width: '100%', 
            height: 'auto', // Maintain aspect ratio
            display: 'block' // Remove bottom spacing of images
          }} 
        />
      </div>
    </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold">35+ Caregivers Helped</Typography>
              </Paper>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold">INR 85,000 Fundraised</Typography>
              </Paper>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h4" fontWeight="bold">200+ Caregivers Made Aware</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
      <div style={{
        border: '5px solid black', // Black outline
        borderRadius: '8px', // Rounded corners
        overflow: 'hidden', // Prevent overflow if the image is rounded
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
      }}>
        <img 
          src={image7} 
          alt="Community Support" 
          style={{ 
            width: '100%', 
            height: 'auto', // Maintain aspect ratio
            display: 'block' // Remove bottom spacing of images
          }} 
        />
      </div>
    </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h6">Health insurance has been the most beneficial plan I have invested in. It helped me get medicines for COVID.</Typography>
                <Typography variant="subtitle1" align="right">— Vasuki Rajeswan</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h6">I never knew that I could get insurance at such a low cost! More people should definitely know about this.</Typography>
                <Typography variant="subtitle1" align="right">— Kishan Kumar</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper elevation={2} sx={{ p: 4 }}>
                <Typography variant="h6">Any hospitalization events are cost-free for me now! I am not worried about my finances during any health crisis now!</Typography>
                <Typography variant="subtitle1" align="right">— Lallan Singh</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Collaborations Section */}
      <Box sx={{ py: 10, backgroundColor: '#f4f4f4' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Collaborations
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Collaboration 1 */}
          <Grid item xs={12} sm={4}>
            <div style={{
              border: '5px solid black', // Black outline
              borderRadius: '8px', // Rounded corners
              overflow: 'hidden', // Prevent overflow if the image is rounded
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
            }}>
              <img 
                src={image9} 
                alt="Swabhimaan" 
                style={{ 
                  width: '100%', 
                  height: 'auto', // Maintain aspect ratio
                  display: 'block' // Remove bottom spacing of images
                }} 
              />
            </div>
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              Founder Venkat Iyer, connects to 50+ households in need.
            </Typography>
          </Grid>

          {/* Collaboration 2 */}
          <Grid item xs={12} sm={4}>
            <div style={{
              border: '5px solid black', // Black outline
              borderRadius: '8px', // Rounded corners
              overflow: 'hidden', // Prevent overflow if the image is rounded
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
            }}>
              <img 
                src={image10} 
                alt="Clinikk" 
                style={{ 
                  width: '100%', 
                  height: 'auto', // Maintain aspect ratio
                  display: 'block' // Remove bottom spacing of images
                }} 
              />
            </div>
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              Provides INR 5L insurance, unlimited doctor visits, 50% off on all medicines for INR 3500/year.
            </Typography>
          </Grid>

          {/* Collaboration 3 */}
          <Grid item xs={12} sm={4}>
            <div style={{
              border: '5px solid black', // Black outline
              borderRadius: '8px', // Rounded corners
              overflow: 'hidden', // Prevent overflow if the image is rounded
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', // Shadow effect
            }}>
              <img 
                src={image11} 
                alt="Mangena Muthyalu" 
                style={{ 
                  width: '100%', 
                  height: 'auto', // Maintain aspect ratio
                  display: 'block' // Remove bottom spacing of images
                }} 
              />
            </div>
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
              Women tailoring units in Andhra Pradesh provide feedback for the development of an insurance recommender.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>

      <Footer />
    </div>
  );
};

export default LandingPage;