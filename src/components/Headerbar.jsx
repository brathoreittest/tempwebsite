import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { Button } from 'react-bootstrap';

export default function Headerbar() {
    
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const onSuccess = (res) => {
    console.log('Login successful!', res);
    setIsAuthenticated(true);
  };
  const signOut = () => {
    googleLogout();
    setIsAuthenticated(false);
   // console.log('Signed Out! and testData Value : - ', testData);
  };


  const onFailure = (res) => {
    console.log('Login failed!', res);
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">DailyBots Store</Navbar.Brand>
          <Navbar.Text>
            {!isAuthenticated ? (
    <GoogleOAuthProvider clientId="749073175652-b43dsufjsb4jgbmcn01a771vfgr21o6i.apps.googleusercontent.com">
      <GoogleLogin
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </GoogleOAuthProvider>
  ) : (
    <>
      <h6>Welcome, Guest</h6>
      <Button bsStyle="primary" onClick={signOut}>Sign Out</Button>
    </>
  )}

          </Navbar.Text>
      </Container>
    </Navbar>
  );
}