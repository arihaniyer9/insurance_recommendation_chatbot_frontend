import React, { useState } from 'react';
import { Container, Typography, MenuItem, Select, InputLabel, FormControl, ImageList, ImageListItem, Box } from '@mui/material';
import Navbar from '../components/Navbar';

const videoData = {
    "Health Insurance": [
      { id: 1, url: 'https://www.youtube.com/embed/fFnxH3EAIlo' },
      { id: 2, url: 'https://www.youtube.com/embed/GdIxMsyAM_c' },
      { id: 3, url: 'https://www.youtube.com/embed/e6zv2YcRRGs' },
      { id: 4, url: 'https://www.youtube.com/embed/wlbQvVAKYDgA' },
      { id: 5,url: 'https://www.youtube.com/embed/EW6ioe_IPkE' },
      { id: 6,url: 'https://www.youtube.com/embed/Rie2MvV5nCk' },
      { id: 7, url: 'https://www.youtube.com/embed/vJuWv_rTfCQ' },
      { id: 8,  url: 'https://www.youtube.com/embed/dpzIswbCsf0' }
      // Add more videos as needed
    ]
  };


  const InfoModule = () => {
    const [selectedTopic, setSelectedTopic] = useState('Health Insurance');
  
    const handleTopicChange = (event) => {
      setSelectedTopic(event.target.value);
    };
  
    return (
      <div>
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom align="center">
            Explore Insurance Videos
          </Typography>
  
          {/* Dropdown to select topics */}
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel>Select Topic</InputLabel>
            <Select value={selectedTopic} onChange={handleTopicChange}>
              {Object.keys(videoData).map((topic) => (
                <MenuItem key={topic} value={topic}>
                  {topic}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
  
          {/* Use ImageList for a structured grid presentation */}
          <ImageList sx={{ width: '100%', height: 'auto' }} cols={3} gap={20}>
            {videoData[selectedTopic].map((video) => (
              <ImageListItem key={video.id}>
                <Box sx={{ 
                  border: '2px solid black', // Optional: adds a border around the video
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}>
                  <iframe
                    height="380"
                    width="100%"
                    src={video.url}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Video ${video.id}`} // Add title for accessibility
                  />
                </Box>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </div>
    );
  };
  
  export default InfoModule;