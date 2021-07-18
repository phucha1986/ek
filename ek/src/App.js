import './App.css';
import LoginHeader from './components/commons/LoginHeader';
import LandingPageHeader from './components/commons/LandingPageHeader';
import Footer from './components/commons/Footer';
import MyStatement from './components/myaccount/MyStatement';
import Login from './components/login/Login';
import React, { useEffect } from 'react';
import BookAFlight from './components/book/BookAFlight';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

function App(params) {  
  const isAuthenticated = params.isAuthenticated || localStorage.getItem ('loggedIn') === "true";
  const header = isAuthenticated ? <LandingPageHeader /> : <LoginHeader />;
  const history = useHistory();

  // useEffect(() => {
  //   if(params.isAuthenticated)
  //   {
  //     history.push("/MyStatement");
  //   }else{
  //     history.push("/Login");
  //   }
  // }, [params.isAuthenticated]);

  return (    
    <Router>          
      {header}      
      <main id="maincontent">
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/MyStatement">
          <MyStatement />
        </Route>
        <Route>
          <BookAFlight/>
        </Route>
      </main>
      <Footer isAuthenticated={isAuthenticated} />
    </Router>    
  );
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
