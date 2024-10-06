import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeRounded from '@mui/icons-material/HomeOutlined';
import LocalHospitalRounded from '@mui/icons-material/LocalHospitalOutlined';
import MedicalServicesRoundedIcon from '@mui/icons-material/MedicalServicesRounded';
import HealthAndSafetyRoundedIcon from '@mui/icons-material/HealthAndSafetyRounded';
import SettingsRounded from '@mui/icons-material/SettingsOutlined';
import LoginRounded from '@mui/icons-material/LoginOutlined';
import Box from '@mui/material/Box';
import authService from '../services/authService';
import image8 from '../assets/image8.png';

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();
  console.log(currentUser);

  useEffect(() => {
    const googleTranslateScript = document.querySelector(
      'script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]'
    );

    if (!googleTranslateScript) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'hi,kn,ta,te,ml,mr,gu',
        },
        'google_translate_element'
      );
    };
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', boxShadow: 'none', borderBottom: '1px solid #E0E0E0' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }} onClick={() => navigate('/')}>
          <Box component="img" src={image8} alt="Logo" sx={{ height: 40, marginRight: 2, borderRadius: '50%' }} />
          <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold', letterSpacing: 1, fontFamily: 'Boogaloo' }} onClick={() => navigate('/')}>
            AAROGYA VARDAAN
          </Typography>
        </Box>

        <IconButton style={{ color: 'black', fontSize: 'large', mx: 3 }} onClick={() => navigate('/')}>
          <HomeRounded fontSize="large" />
        </IconButton>
        <IconButton style={{ color: 'black', fontSize: 'large', mx: 3 }} onClick={() => navigate('/chat')}>
          <LocalHospitalRounded fontSize="large" />
        </IconButton>
        <IconButton style={{ color: 'black', fontSize: 'large', mx: 3 }} onClick={() => navigate('/community')}>
          <MedicalServicesRoundedIcon fontSize="large" />
        </IconButton>
        <IconButton style={{ color: 'black', fontSize: 'large', mx: 3 }} onClick={() => navigate('/info')}>
          <HealthAndSafetyRoundedIcon fontSize="large" />
        </IconButton>
        <IconButton style={{ color: 'black', fontSize: 'large', mx: 3 }} onClick={() => navigate('/acct')}>
          <SettingsRounded fontSize="large" />
        </IconButton>

        {/* Corrected Google Translate Button */}
        <div id="google_translate_element" style={{ marginRight: '20px' }}></div>

        {/* Log In/Logout Buttons */}
        {currentUser ? (
          <>
            <Typography variant="h6" style={{ marginRight: '1rem' }}>
              {currentUser.username}
            </Typography>
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginLeft: 2,
                paddingLeft: 3,
                paddingRight: 3,
                textTransform: 'none',
                fontFamily: 'Boogaloo',
              }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginLeft: 2,
                paddingLeft: 3,
                paddingRight: 3,
                textTransform: 'none',
                fontFamily: 'Boogaloo',
              }}
              startIcon={<LoginRounded />}
              onClick={() => navigate('/login')}
            >
              Login
            </Button>
            <Button
              sx={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginLeft: 2,
                paddingLeft: 3,
                paddingRight: 3,
                textTransform: 'none',
                fontFamily: 'Boogaloo',
              }}
              onClick={() => navigate('/signup')}
            >
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;