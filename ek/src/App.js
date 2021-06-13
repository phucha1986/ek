import './App.css';
import Header from './components/commons/Header';
import AuthenticatedHeader from './components/commons/AuthenticatedHeader';
import Footer from './components/commons/Footer';
import MyStatement from './components/myaccount/MyStatement';
import Login from './components/login/Login';
import React, { useState } from 'react';
import store from './store.js';


function App() {
  
  const [storeState, setStoreState] = useState(store.getState()); 
  store.subscribe(() => setStoreState(store.getState()));
  const isAuthenticated = storeState.isAuthenticated;
  let header = isAuthenticated ? <AuthenticatedHeader /> : <Header />;
  let mainContent = isAuthenticated ? <MyStatement /> : <Login />;

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
