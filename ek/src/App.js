import './App.css';
import Header from './components/commons/Header';
import AuthenticatedHeader from './components/commons/AuthenticatedHeader';
import Footer from './components/commons/Footer';
import MyStatement from './components/myaccount/MyStatement';
import Login from './components/login/Login';
import React, { useState } from 'react';
import store from './store.js';
import BookAFlight from './components/book/BookAFlight';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


function App() {
  
  const [storeState, setStoreState] = useState(store.getState()); 
  store.subscribe(() => setStoreState(store.getState()));
  const isAuthenticated = storeState.isAuthenticated;
  let header = isAuthenticated ? <AuthenticatedHeader /> : <Header />;
  //let mainContent = isAuthenticated ? <MyStatement /> : ;

  return (
    <Router>          
      {header}      
      <main id="maincontent">
        <Route>
          {!isAuthenticated ? <Login /> : ''}
        </Route>
        <Route path="/MyStatement">
          <MyStatement />
        </Route>
        <Route path="/BookAFlight">
          <BookAFlight/>
        </Route>
      </main>
      <Footer isAuthenticated={isAuthenticated} />
    </Router>
  );
}

export default App;
