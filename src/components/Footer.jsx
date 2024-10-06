import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Unstable_Grid2';
import image8 from '../assets/image8.png';

const Footer = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', padding: '20px 0' }}>
      <Toolbar>
        <Grid container spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }} mt={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" sx={{ fontFamily: 'Boogaloo', fontWeight: 'bold' }}>
              Contact Us
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Stack alignItems="center" spacing={2}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Aarogya Vardaan</Typography>
              <Box
                component="img"
                src={image8}
                alt="My Icon"
                sx={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <Stack direction = "row" alignItems="left" spacing={2} sx={{ textAlign: 'left' }}>
              <Box mt={2} sx={{ display: 'flex', marginLeft: '10px'}}> {/* New Box for controlling alignment */}
                <Stack direction="row" spacing={3} marginLeft={1}> {/* Adjusted spacing to align with text */}
                  <IconButton color="inherit">
                    <LocalPhoneRoundedIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                  <IconButton color="inherit">
                    <InstagramIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                  <IconButton color="inherit">
                    <EmailRoundedIcon sx={{ fontSize: '2rem' }} />
                  </IconButton>
                </Stack>
              </Box>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Stack alignItems="center" spacing={20} sx={{ textAlign: 'adjust' }}>
              <Box mt={5}>
              <Typography variant="h6" sx={{ marginTop: '35px'}}>
                Aarogya Vardaan is a non-profit that aims to improve health insurance awareness, 
                recommend optimum health insurance plans as per medical, residential, and health needs, 
                and provide a community of support for financial needs of househelps.
              </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;