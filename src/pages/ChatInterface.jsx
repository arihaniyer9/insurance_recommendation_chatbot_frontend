// import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Container from '@mui/material/Container';
// import authService from '../services/authService';
// import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';
// import { findAllByDisplayValue } from '@testing-library/react';

// const ChatInterface = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [submitted, setSubmitted] = useState(false); // Indicates if the chat has started
//   const [isLoading, setIsLoading] = useState(true); // To manage the loading state
//   const [language, setLanguage] = useState('en-US'); // Language state for both TTS and STT
//   const [isSpeaking, setIsSpeaking] = useState(false); // Tracks if TTS is ongoing
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Fetch chat history when the component mounts
//   useEffect(() => {
//     const token = authService.getCurrentUser(); // Get the token from authService
//     if (token) {
//       setIsAuthenticated(true); // If token exists, set authenticated to true
//     } else {
//       setIsAuthenticated(false); // No token, user is not authenticated
//     }
//     const fetchChatHistory = async () => {
//       try {
//         const token = authService.getCurrentUser(); // Get the access token
//         if (!token) {
//           console.error('No token found');
//           return;
//         }

//         const response = await fetch('https://insurance-recommedation-chatbot-backend.onrender.com/api/chat/', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}` // Pass the token in the Authorization header
//           }
//         });

//         const data = await response.json();
//         if (response.ok) {
//           // If chat history exists, set it and show the chat interface
//           if (data.chat_history.length > 1) { // Check if the user has more than just the system prompt
//             setMessages(data.chat_history.map(msg => ({
//               text: msg.content,
//               sender: msg.role === 'user' ? 'user' : 'bot'
//             })));
//             setSubmitted(true);  // Show chat window directly for existing users
//           }
//         } else {
//           console.error('Error loading chat history:', data.error);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       } finally {
//         setIsLoading(false); // Stop loading after attempting to fetch chat history
//       }
//     };
//   if (isAuthenticated){
//     fetchChatHistory();
//   }// Fetch chat history on component mount
//   }, [isAuthenticated]);  // Empty dependency array ensures this runs only once on mount

//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     if (!input) return;
//     getInsuranceRecommendation(input);
//     setInput('');
//   };

//   const getInsuranceRecommendation = async (input) => {
//     try {
//       const token = authService.getCurrentUser(); // Get the access token
//       if (!token) {
//         console.error('No token found');
//         return;
//       }

//       const response = await fetch('https://insurance-recommedation-chatbot-backend.onrender.com/api/chat/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` // Pass the token in the Authorization header
//         },
//         body: JSON.stringify({
//           message: input,
//           chat_history: messages.map(msg => ({
//             role: msg.sender === 'user' ? 'user' : 'assistant',
//             content: msg.text
//           }))
//         })
        
//       });

//       const data = await response.json();
//       if (response.ok) {
//         console.log(data.response);
//         const botMessage = { text: data.response, sender: 'bot' };
//         setMessages([...messages, { text: input, sender: 'user' }, botMessage]);
//         textToSpeech(botMessage.text); // Call TTS for the bot's response
//       } else {
//         console.error('Error sending message:', data.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const textToSpeech = (text) => {
//     const speechSynthesis = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
    
//     if (isSpeaking) {
//       // If already speaking, stop the speech synthesis
//       speechSynthesis.cancel();
//       setIsSpeaking(false);
//       return;
//     }

//     if (language === 'kn-IN') {
//         utterance.lang = 'kn-IN';  // Kannada TTS
//     } else if (language === 'hi-IN') {
//         utterance.lang = 'hi-IN';  // Hindi TTS
//     } else {
//         utterance.lang = 'en-US';  // Default to English
//     }
    
//     utterance.rate = 0.9;  // Adjust the rate if needed (slower for complex scripts)
//     speechSynthesis.speak(utterance);

//         // Track when TTS is ongoing and when it stops
//     utterance.onstart = () => setIsSpeaking(true);
//     utterance.onend = () => setIsSpeaking(false);
// };


//   // Speech-to-Text (STT) function
//   const startSpeechRecognition = () => {
//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//     const recognition = new SpeechRecognition();
//     recognition.lang = language; // Set the recognition language based on the selected language
//     recognition.onstart = () => console.log('Voice recognition started...');
//     recognition.onspeechend = () => recognition.stop();
//     recognition.onerror = (err) => console.error('Speech recognition error:', err);
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript;
//       setInput(transcript); // Set the recognized speech as input
//     };
//     recognition.start();
//   };
// const toggleTextToSpeech = () => {
//     if (isSpeaking) {
//       window.speechSynthesis.cancel(); // Stop TTS if already speaking
//       setIsSpeaking(false);
//     } else {
//       const lastMessage = messages.length > 0 ? messages[messages.length - 1].text : '';
//       if (lastMessage) textToSpeech(lastMessage); // Start TTS for the last message
//     }
//   };

//   const handleInitialMessage = async () => {
//     setSubmitted(true); // Show chat window
//     // Toggle TTS when clicking the button

//     // Send the system message as the initial user input
//     const input = "Start insurance recommendation";
    
//     try {
//       const token = authService.getCurrentUser(); // Get the access token
//       if (!token) {
//         console.error('No token found');
//         return;
//       }

//       const response = await fetch('https://insurance-recommedation-chatbot-backend.onrender.com/api/chat/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}` // Pass the token in the Authorization header
//         },
//         body: JSON.stringify({
//           message: input,
//           chat_history: [] // Empty since it's the start of the conversation
//         })
//       });

//       const data = await response.json();
//       if (response.ok) {
//         const botMessage = { text: data.response, sender: 'bot' };
//         setMessages([{ text: data.response, sender: 'bot' }]);  // Start with bot response
//         textToSpeech(botMessage.text); // Call TTS for the bot's response
//       } else {
//         console.error('Error starting chat:', data.error);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//    // Helper function to render the table if table-like data is found
//    const renderTable = (text) => {
//     // Detect if the text contains table data based on a pattern (this can be adjusted)
//     if (text.includes('| Insurance Plan |')) {
//       const rows = text.trim().split('\n');
//       const headers = rows[1].split('|').filter(Boolean).map(header => header.trim());
//       const dataRows = rows.slice(2).map(row => row.split('|').filter(Boolean).map(cell => cell.trim()));

//       return (
//         <table style={{ width: '100%', border: '1px solid black', marginTop: '10px' }}>
//           <thead>
//             <tr>
//               {headers.map((header, idx) => (
//                 <th key={idx} style={{ border: '1px solid black', padding: '5px' }}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {dataRows.map((row, idx) => (
//               <tr key={idx}>
//                 {row.map((cell, cellIdx) => (
//                   <td key={cellIdx} style={{ border: '1px solid black', padding: '5px' }}>{cell}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     }

//     return null;
//   };


//   if (isLoading) {
//     return <div>Loading...</div>; 
//   }

//     return (
//     <div>
//       <Navbar />
//       <Container>
//         <Box sx={{ my: 4 }}>
//           <Typography
//             variant="h4"
//             sx={{ color: 'black', fontWeight: 'bold', letterSpacing: 1, fontFamily: 'Boogaloo' }}
//           >
//             AAROGYA SAHAAY
//           </Typography>
//           <Box sx={{ mb: 2 }}>
//             <label>Choose Language: </label>
//             <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//               <option value="en-US">English</option>
//               <option value="hi-IN">Hindi</option>
//               <option value="kn-IN">Kannada</option>
//             </select>
//           </Box>

//           {isAuthenticated ? (
//             <>
//               {!submitted && (
//                 <Box>
//                   <Typography variant="h6" gutterBottom>
//                     Welcome! Do you want to get an insurance recommendation?
//                   </Typography>
//                   <Button variant="contained" color="primary" onClick={handleInitialMessage}>
//                     Start Chat
//                   </Button>
//                 </Box>
//               )}

//               {submitted && (
//                 <Paper elevation={3} sx={{ p: 2, height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                   {/* Chat container */}
//                   <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2, paddingRight: 1 }}>
//                     {messages.map((msg, index) => (
//                       <Box
//                         key={index}
//                         sx={{
//                           display: 'flex',
//                           justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
//                           mb: 1
//                         }}
//                       >
//                         <Paper
//                           elevation={2}
//                           sx={{
//                             p: 1.5,
//                             maxWidth: '75%',
//                             backgroundColor: msg.sender === 'user' ? '#e0f7fa' : '#fce4ec',
//                             borderRadius: '16px',
//                             borderBottomRightRadius: msg.sender === 'user' ? '0' : '16px',
//                             borderBottomLeftRadius: msg.sender === 'user' ? '16px' : '0'
//                           }}
//                         >
//                           <Typography variant="body1" component="div">
//                             {msg.text}
//                           </Typography>
//                         </Paper>
//                       </Box>
//                     ))}
//                   </Box>

//                   {/* User prompt container */}
//                   <Box component="form" onSubmit={handleMessageSubmit} sx={{ display: 'flex', gap: 1 }}>
//                     <TextField
//                       variant="outlined"
//                       fullWidth
//                       placeholder="Type your message..."
//                       value={input}
//                       onChange={(e) => setInput(e.target.value)}
//                       sx={{ flexGrow: 1 }}
//                     />
//                     <Button type="submit" variant="contained" color="primary">
//                       Send
//                     </Button>
//                     <Button variant="contained" color="secondary" onClick={startSpeechRecognition}>
//                       🎤 Speak
//                     </Button>
//                   </Box>
//                   {/* TTS Toggle Button */}
//                   <Box sx={{ mt: 2 }}>
//                     <Button
//                       variant="contained"
//                       color="success"
//                       onClick={toggleTextToSpeech}
//                     >
//                       {isSpeaking ? 'Stop TTS' : 'Start TTS'}
//                     </Button>
//                   </Box>
//                 </Paper>
//               )}
//             </>
//           ) : (
//             <Alert severity="warning" sx={{ mt: 2 }}>
//               Please log in to access the chatbot. You will be redirected to the login page.
//             </Alert>
//           )}
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default ChatInterface;
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
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ChatIcon from '@mui/icons-material/Chat';
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import TranslateIcon from '@mui/icons-material/Translate';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState('en-US');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = authService.getCurrentUser();
    if (token) {
      setIsAuthenticated(true);
      fetchChatHistory(token);
    } else {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  const fetchChatHistory = async (token) => {
    try {
      const response = await fetch('https://insurance-recommedation-chatbot-backend.onrender.com/api/chat/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok && data.chat_history.length > 1) {
        setMessages(data.chat_history.map(msg => ({
          text: msg.content,
          sender: msg.role === 'user' ? 'user' : 'bot'
        })));
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // ... (keep all your existing handler functions like handleMessageSubmit, getInsuranceRecommendation, etc.)

  if (isLoading) {
    return (
      <div>
        <Navbar />
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
          <CircularProgress size={60} thickness={4} sx={{ color: '#4a90e2' }} />
        </Container>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div>
        <Navbar />
        <Container maxWidth="md" sx={{ mt: 6 }}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="200"
              image="https://source.unsplash.com/random/800x400/?health,insurance"
              alt="Health Insurance"
            />
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  fontWeight: 'bold', 
                  color: '#2c3e50',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <HealthAndSafetyIcon fontSize="large" /> Welcome to Aarogya Sahaay
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', mb: 3 }}>
                Our AI-powered chatbot provides personalized health insurance recommendations 
                based on your needs and preferences. Get started by signing in!
              </Typography>
              
              <Grid container spacing={3} sx={{ mb: 3 }}>
                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ p: 2, height: '100%', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <ChatIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Smart Chat</Typography>
                    </Box>
                    <Typography>Get instant answers to your insurance questions</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ p: 2, height: '100%', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <VoiceChatIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Voice Support</Typography>
                    </Box>
                    <Typography>Speak naturally in multiple languages</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Paper elevation={2} sx={{ p: 2, height: '100%', borderRadius: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <TranslateIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6">Multilingual</Typography>
                    </Box>
                    <Typography>Available in English, Hindi, and Kannada</Typography>
                  </Paper>
                </Grid>
              </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4 }}>
                <Button 
                  variant="contained" 
                  size="large" 
                  onClick={() => navigate('/login')}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem',
                    background: 'linear-gradient(45deg, #4a90e2 30%, #63a4ff 90%)',
                    boxShadow: '0 3px 5px 2px rgba(74, 144, 226, .3)'
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  onClick={() => navigate('/register')}
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1.1rem',
                    borderColor: '#4a90e2',
                    color: '#4a90e2'
                  }}
                >
                  Register
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            sx={{ 
              color: 'black', 
              fontWeight: 'bold', 
              letterSpacing: 1, 
              fontFamily: 'Boogaloo',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <HealthAndSafetyIcon fontSize="large" /> AAROGYA SAHAAY
          </Typography>
          
          <Box sx={{ 
            mb: 2, 
            display: 'flex', 
            alignItems: 'center',
            backgroundColor: '#f5f9ff',
            p: 1.5,
            borderRadius: 2,
            width: 'fit-content'
          }}>
            <TranslateIcon color="primary" sx={{ mr: 1 }} />
            <Typography variant="subtitle1" sx={{ mr: 1 }}>Language:</Typography>
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '4px',
                border: '1px solid #4a90e2',
                backgroundColor: 'white',
                fontSize: '0.9rem'
              }}
            >
              <option value="en-US">English</option>
              <option value="hi-IN">Hindi</option>
              <option value="kn-IN">Kannada</option>
            </select>
          </Box>

          {!submitted ? (
            <Box sx={{ 
              textAlign: 'center', 
              mt: 8,
              p: 4,
              backgroundColor: '#f8f9fa',
              borderRadius: 3,
              boxShadow: 1
            }}>
              <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                Ready to find your perfect health insurance plan?
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                onClick={handleInitialMessage}
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(45deg, #4a90e2 30%, #63a4ff 90%)',
                  boxShadow: '0 3px 5px 2px rgba(74, 144, 226, .3)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #3a7bc8 30%, #5290e6 90%)'
                  }
                }}
              >
                Start Chat Now
              </Button>
            </Box>
          ) : (
            <Paper elevation={3} sx={{ 
              p: 2, 
              height: '70vh', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              borderRadius: 3
            }}>
              {/* Chat messages */}
              <Box sx={{ 
                flexGrow: 1, 
                overflowY: 'auto', 
                mb: 2, 
                p: 2,
                background: 'linear-gradient(to bottom, #f8f9fa, #e9f2ff)',
                borderRadius: 2
              }}>
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      mb: 2
                    }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        maxWidth: '75%',
                        backgroundColor: msg.sender === 'user' ? '#e0f7fa' : '#f5f0ff',
                        borderRadius: '16px',
                        borderBottomRightRadius: msg.sender === 'user' ? '0' : '16px',
                        borderBottomLeftRadius: msg.sender === 'user' ? '16px' : '0',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    >
                      <Typography variant="body1" component="div">
                        {msg.text}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>

              {/* Input area */}
              <Box component="form" onSubmit={handleMessageSubmit} sx={{ 
                display: 'flex', 
                gap: 1,
                p: 1,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: '0 -2px 5px rgba(0,0,0,0.05)'
              }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  sx={{ 
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '20px',
                    }
                  }}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  color="primary"
                  sx={{ 
                    borderRadius: '20px',
                    px: 3,
                    minWidth: '100px'
                  }}
                >
                  Send
                </Button>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  onClick={startSpeechRecognition}
                  sx={{ 
                    borderRadius: '20px',
                    minWidth: '50px'
                  }}
                >
                  🎤
                </Button>
              </Box>
              
              {/* TTS button */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                mt: 1
              }}>
                <Button
                  variant="contained"
                  color={isSpeaking ? "error" : "success"}
                  onClick={toggleTextToSpeech}
                  sx={{
                    borderRadius: '20px',
                    px: 4,
                    textTransform: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  {isSpeaking ? 'Stop Voice' : 'Hear Last Message'}
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
