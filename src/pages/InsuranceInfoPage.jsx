import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, Typography, CardContent, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

// Define different sets of videos based on topics
const videoData = {
  "Health Insurance": [
    { id: 1, title: 'Health Insurance Basics', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 2, title: 'Health Insurance Explained', url: 'https://www.youtube.com/embed/xTlNMmZKwpA' }
  ],
  "Life Insurance": [
    { id: 3, title: 'Life Insurance 101', url: 'https://www.youtube.com/embed/6zXDo4dL7SU' },
    { id: 4, title: 'Why You Need Life Insurance', url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ' }
  ],
  "Car Insurance": [
    { id: 5, title: 'Car Insurance Overview', url: 'https://www.youtube.com/embed/6zXDo4dL7SU' },
    { id: 6, title: 'Understanding Car Insurance', url: 'https://www.youtube.com/embed/xTlNMmZKwpA' }
  ]
  // Add more topics and video URLs as needed
};

const InsuranceInfoPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('Health Insurance'); // Default topic

  // Function to handle topic change from dropdown
  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Explore Insurance Videos
      </Typography>

      {/* Dropdown to select topics */}
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Select Topic</InputLabel>
        <Select
          value={selectedTopic}
          onChange={handleTopicChange}
        >
          {Object.keys(videoData).map((topic) => (
            <MenuItem key={topic} value={topic}>
              {topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Conditionally render videos based on selected topic */}
      <Grid container spacing={4}>
        {videoData[selectedTopic].map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="iframe"
                height="200"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {video.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InsuranceInfoPage;
