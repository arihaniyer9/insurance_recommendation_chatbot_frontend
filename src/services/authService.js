import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

const register = (username, email, password) => {
  return fetch(API_URL + 'users/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })
  .then(response => {
    // Check if the response is not OK (status is not in the range 200-299)
    if (!response.ok) {
      return response.json().then(data => {
        throw new Error(data.error || 'Registration failed');
      });
    }
    return response.json();
  })
  .then(data => {
    if (data.access) {
      localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
  });
};

const login = (username, email, password) => {
  return fetch(API_URL + 'token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.access) {
      localStorage.setItem('user', JSON.stringify(data));
    }
    return data;
  });
};


const changePassword = async (currentPassword, newPassword) => {
  const token = getCurrentUser();
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    `${API_URL}users/change-password/`, 
    { currentPassword, newPassword },
    config
  );

  return response.data;
};

const getUserProfile = async () => {
  const token = getCurrentUser();  // Use getCurrentUser() to retrieve the token
  if (!token) {
    throw new Error('No authentication token found.');
  }

  if(token){
    console.log("authtoken",token)
  }

  const response = await fetch(`${API_URL}users/profile/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,  // Ensure the token is sent in Authorization header
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to load user data.');
  }

  return response.json();
};



const logout = () => {
  localStorage.removeItem('user');
};

const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user ? user.access : null;  
};

const authService = {
  register,
  login,
  logout,
  getCurrentUser,
  getUserProfile,
  changePassword
};

export default authService;