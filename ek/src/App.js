import './App.css';
import Header from './components/commons/Header';
import AuthenticatedHeader from './components/commons/AuthenticatedHeader';
import Footer from './components/commons/Footer';
import LoginTitle from './components/login/LoginHeader';
import Login from './components/login/Login';
import React, { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let header = isAuthenticated ? <AuthenticatedHeader /> : <Header />;
  return (
    <div className="ek">  
      {header}      
      <main id="maincontent">
        <LoginTitle />
        <Login setIsAuthenticated={setIsAuthenticated}/>        
      </main>
      <Footer isAuthenticated={isAuthenticated} />
    </div>
  );
}

export default App;
