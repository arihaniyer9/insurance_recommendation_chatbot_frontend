// import React from 'react';
// import Navbar from '../components/Navbar';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import SampleImage1 from '../assets/SampleImage1.png';

// const LoginPage = () => {
//   return (
//     <div>
//       <Navbar />
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'SampleImage1',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) => t.palette.grey[50],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Box} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//           <Box component="form" sx={{ mt: 1, mx: 4, width: '100%', maxWidth: 400 }}>
//             <TextField margin="normal" required fullWidth label="Email Address" autoFocus />
//             <TextField margin="normal" required fullWidth label="Password" type="password" />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//               Login
//             </Button>
//             <Button fullWidth variant="text">
//               Sign Up
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import authService from '../services/authService';
import SampleImage1 from '../assets/SampleImage1.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.login(username, email, password);
      if (response.access) {
        navigate('/dashboard');
      } else {
        setError('Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Navbar />
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${SampleImage1})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.grey[50],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Box} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Box component="form" sx={{ mt: 1, mx: 4, width: '100%', maxWidth: 400 }} onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoFocus
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
              Login
            </Button>
            <Button fullWidth variant="text" onClick={() => navigate('/signup')}>
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;