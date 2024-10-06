import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import authService from '../services/authService';
import Grid from '@mui/material/Grid';
import image8 from '../assets/image8.png'; 

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(username, email, password);
      console.log('Registration response:', response);
      if (response) {
        navigate('/login');
      } else {
        setError('Registration failed');
      }
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <div>
      <Navbar />
      <Grid container spacing={4} justifyContent="center" columnSpacing={{ xs: 1, sm: 2, md: 6 }} mt={3}>
      <Grid item md={4}>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 5 }}>
      <Box component="img" src= {image8} alt="Logo" sx={{ height: 450, marginRight: 400, borderRadius: '50%'}} />
      </Box>
      </Grid>
      <Grid item xs={12} sm={8} md={8} component={Box} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Box component="form" sx={{ mt: 8, mx: 'auto', width: 300 }} onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign Up
        </Button>
      </Box>
      </Grid>
      </Grid>
    </div>
  );
};

export default SignupPage;
