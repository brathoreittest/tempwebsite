import React, { useState } from 'react';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from '@react-oauth/google';
import { Button } from 'react-bootstrap';

export default function Header() {

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
    <div className="container-fluid rounded">
      <div className="row" style={{backgroundColor: '#FAFAFA', height: '50px'}}>
        <div className="col-md-2 text-center d-flex align-items-center justify-content-center">DailyBot Store</div>
        <div className="col-md-7"></div>
        <div className="col-md-3 text-center d-flex align-items-center justify-content-end" >{!isAuthenticated ? (
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
          Welcome, Guest |
            <Button onClick={signOut}>Sign Out</Button>
          </>
        )}
        </div>
      </div>
    </div>

  );
}