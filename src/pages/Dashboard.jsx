import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const cards = [
    { title: 'Chat with Assistant', description: 'Get insurance recommendations', path: '/chat' },
    { title: 'Feature 2', description: 'Description 2', path: '/feature2' },
    { title: 'Feature 3', description: 'Description 3', path: '/feature3' },
    { title: 'Feature 4', description: 'Description 4', path: '/feature4' },
  ];

  return (
    <div>
      <Navbar />
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Link to={card.path} style={{ textDecoration: 'none' }}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Dashboard;
