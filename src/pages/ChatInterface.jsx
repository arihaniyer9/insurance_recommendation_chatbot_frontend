import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import authService from '../services/authService';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { findAllByDisplayValue } from '@testing-library/react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false); // Indicates if the chat has started
  const [isLoading, setIsLoading] = useState(true); // To manage the loading state
  const [language, setLanguage] = useState('en-US'); // Language state for both TTS and STT
  const [isSpeaking, setIsSpeaking] = useState(false); // Tracks if TTS is ongoing
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fetch chat history when the component mounts
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const token = authService.getCurrentUser(); // Get the access token
        if (!token) {
          console.error('No token found');
          return;
        }

        const response = await fetch('http://localhost:8000/api/chat/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Pass the token in the Authorization header
          }
        });

        const data = await response.json();
        if (response.ok) {
          // If chat history exists, set it and show the chat interface
          if (data.chat_history.length > 1) { // Check if the user has more than just the system prompt
            setMessages(data.chat_history.map(msg => ({
              text: msg.content,
              sender: msg.role === 'user' ? 'user' : 'bot'
            })));
            setSubmitted(true);  // Show chat window directly for existing users
          }
        } else {
          console.error('Error loading chat history:', data.error);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false); // Stop loading after attempting to fetch chat history
      }
    };

    fetchChatHistory();  // Fetch chat history on component mount
  }, []);  // Empty dependency array ensures this runs only once on mount

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    getInsuranceRecommendation(input);
    setInput('');
  };

  const getInsuranceRecommendation = async (input) => {
    try {
      const token = authService.getCurrentUser(); // Get the access token
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Pass the token in the Authorization header
        },
        body: JSON.stringify({
          message: input,
          chat_history: messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        })
        
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data.response);
        const botMessage = { text: data.response, sender: 'bot' };
        setMessages([...messages, { text: input, sender: 'user' }, botMessage]);
        textToSpeech(botMessage.text); // Call TTS for the bot's response
      } else {
        console.error('Error sending message:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const textToSpeech = (text) => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (isSpeaking) {
      // If already speaking, stop the speech synthesis
      speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (language === 'kn-IN') {
        utterance.lang = 'kn-IN';  // Kannada TTS
    } else if (language === 'hi-IN') {
        utterance.lang = 'hi-IN';  // Hindi TTS
    } else {
        utterance.lang = 'en-US';  // Default to English
    }
    
    utterance.rate = 0.9;  // Adjust the rate if needed (slower for complex scripts)
    speechSynthesis.speak(utterance);

        // Track when TTS is ongoing and when it stops
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
};


  // Speech-to-Text (STT) function
  const startSpeechRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = language; // Set the recognition language based on the selected language
    recognition.onstart = () => console.log('Voice recognition started...');
    recognition.onspeechend = () => recognition.stop();
    recognition.onerror = (err) => console.error('Speech recognition error:', err);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript); // Set the recognized speech as input
    };
    recognition.start();
  };

  const handleInitialMessage = async () => {
    setSubmitted(true); // Show chat window

    // Send the system message as the initial user input
    const input = "Start insurance recommendation";
    
    try {
      const token = authService.getCurrentUser(); // Get the access token
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await fetch('http://localhost:8000/api/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Pass the token in the Authorization header
        },
        body: JSON.stringify({
          message: input,
          chat_history: [] // Empty since it's the start of the conversation
        })
      });

      const data = await response.json();
      if (response.ok) {
        const botMessage = { text: data.response, sender: 'bot' };
        setMessages([{ text: data.response, sender: 'bot' }]);  // Start with bot response
        textToSpeech(botMessage.text); // Call TTS for the bot's response
      } else {
        console.error('Error starting chat:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

   // Helper function to render the table if table-like data is found
   const renderTable = (text) => {
    // Detect if the text contains table data based on a pattern (this can be adjusted)
    if (text.includes('| Insurance Plan |')) {
      const rows = text.trim().split('\n');
      const headers = rows[1].split('|').filter(Boolean).map(header => header.trim());
      const dataRows = rows.slice(2).map(row => row.split('|').filter(Boolean).map(cell => cell.trim()));

      return (
        <table style={{ width: '100%', border: '1px solid black', marginTop: '10px' }}>
          <thead>
            <tr>
              {headers.map((header, idx) => (
                <th key={idx} style={{ border: '1px solid black', padding: '5px' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataRows.map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, cellIdx) => (
                  <td key={cellIdx} style={{ border: '1px solid black', padding: '5px' }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    return null;
  };


  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom>
          Aarogya Sahaay
          </Typography>
          <Box sx={{ mb: 2 }}>
            <label>Choose Language: </label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en-US">English</option>
              <option value="hi-IN">Hindi</option>
              <option value="kn-IN">Kannada</option>
            </select>
          </Box>
          {!submitted && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Welcome! Do you want to get an insurance recommendation?
              </Typography>
              <Button variant="contained" color="primary" onClick={handleInitialMessage}>
                Start Chat
              </Button>
            </Box>
          )}
          {submitted && (
            <Paper elevation={3} sx={{ p: 2, height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              {/* Chat container */}
              <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2, paddingRight: 1 }}>
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      mb: 1
                    }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 1.5,
                        maxWidth: '75%',
                        backgroundColor: msg.sender === 'user' ? '#e0f7fa' : '#fce4ec',
                        borderRadius: '16px',
                        borderBottomRightRadius: msg.sender === 'user' ? '0' : '16px',
                        borderBottomLeftRadius: msg.sender === 'user' ? '16px' : '0'
                      }}
                    >
                      <Typography variant="body1" component="div">
                        {msg.text}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>
              
              {/* User prompt container */}
              <Box component="form" onSubmit={handleMessageSubmit} sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  sx={{ flexGrow: 1 }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Send
                </Button>
                <Button variant="contained" color="secondary" onClick={startSpeechRecognition}>
                  🎤 Speak
                </Button>
              </Box>
            </Paper>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default ChatInterface;
