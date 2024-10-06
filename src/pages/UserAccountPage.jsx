import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Container, Typography, Alert } from '@mui/material';
import authService from '../services/authService'; // Your auth service

const UserAccountPage = () => {
  const [userData, setUserData] = useState({ username: '', email: '' });
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch user info from backend
    const fetchUserData = async () => {
      try {
        const data = await authService.getUserProfile(); 
        console.log("username",data.username);
        setUserData({ username: data.username, email: data.email });
      } catch (error) {
        setErrorMessage('Failed to load user data.');
      }
    };
    fetchUserData();
  }, []);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirmation password do not match.');
      return;
    }

    try {
      // Call your backend API to update the password
      const response = await authService.changePassword(currentPassword, newPassword);
      if (response.success) {
        setSuccessMessage('Password updated successfully.');
      } else {
        setErrorMessage(response.message || 'Error updating password.');
      }
    } catch (error) {
      setErrorMessage('Failed to update password.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{fontWeight:'bold'}}>
        Account Settings
      </Typography>

      <Box>
        <TextField
          label="Username"
          fullWidth
          margin="normal"
          value={userData.username}
          InputProps={{ readOnly: true }}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={userData.email}
          InputProps={{ readOnly: true }}
        />
      </Box>

      <Box component="form" onSubmit={handlePasswordChange}>
        <TextField
          type="password"
          label="Current Password"
          fullWidth
          margin="normal"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <TextField
          type="password"
          label="New Password"
          fullWidth
          margin="normal"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          type="password"
          label="Confirm New Password"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
          Update Password
        </Button>
      </Box>
    </Container>
  );
};

export default UserAccountPage;
