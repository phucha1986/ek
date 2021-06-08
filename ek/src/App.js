import './App.css';
import Header from './components/commons/Header';
import AuthenticatedHeader from './components/commons/AuthenticatedHeader';
import Footer from './components/commons/Footer';
import MyStatement from './components/myaccount/MyStatement';
import Login from './components/login/Login';
import React, { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let header = isAuthenticated ? <AuthenticatedHeader /> : <Header />;
  let mainContent = isAuthenticated ? <MyStatement /> : <Login setIsAuthenticated={setIsAuthenticated}/>;
  

  return (
    <>
      {header}      
      <main id="maincontent">        
        {mainContent}    
      </main>
      <Footer isAuthenticated={isAuthenticated} />
    </>
  );
}

export default App;
