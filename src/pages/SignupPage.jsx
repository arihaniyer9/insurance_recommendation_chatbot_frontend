// import React from 'react';
// import Navbar from '../components/Navbar';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import SampleImage1 from '../assets/SampleImage1.png';

// const SignupPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <Box component="form" sx={{ mt: 8, mx: 'auto', width: 300 }}>
//         <TextField margin="normal" required fullWidth label="Email Address" autoFocus />
//         <TextField margin="normal" required fullWidth label="Password" type="password" />
//         <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//           Sign Up
//         </Button>
//       </Box>
//     </div>
//   );
// };

// export default SignupPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import authService from '../services/authService';

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
        navigate('/dashboard');
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
    </div>
  );
};

export default SignupPage;
