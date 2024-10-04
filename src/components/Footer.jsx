import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, bgcolor: 'background.paper', textAlign: 'center' }}>
      <Typography variant="body1">Contact us at: example@example.com</Typography>
    </Box>
  );
};

export default Footer;
