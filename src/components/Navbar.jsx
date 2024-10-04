import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeRounded from '@mui/icons-material/HomeOutlined';
import LocalHospitalRounded from '@mui/icons-material/LocalHospitalOutlined';
import PublicRounded from '@mui/icons-material/PublicOutlined';
import GroupRounded from '@mui/icons-material/GroupOutlined';
import SettingsRounded from '@mui/icons-material/SettingsOutlined';
import LoginRounded from '@mui/icons-material/LoginOutlined';
import Box from '@mui/material/Box';
import authService from '../services/authService';

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Insurance Recommendation System
        </Typography>
        <IconButton color="inherit" onClick={() => navigate('/')}>
          <HomeRounded />
        </IconButton>
        <IconButton color="inherit" onClick={() => navigate('/chat')}>
          <LocalHospitalRounded />
        </IconButton>
        <IconButton color="inherit" onClick={() => navigate('/info')}>
          <PublicRounded />
        </IconButton>
        <IconButton color="inherit" onClick={() => navigate('/')}>
          <GroupRounded />
        </IconButton>
        <IconButton color="inherit" onClick={() => navigate('/acct')}>
          <SettingsRounded />
        </IconButton>


        
        <Box sx={{ flexGrow: 0.05 }} />

        {currentUser ? (
          <>
            <Typography variant="h6" style={{ marginRight: '1rem' }}>
              {currentUser.username}
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" startIcon={<LoginRounded />} onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
