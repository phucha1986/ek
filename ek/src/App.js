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
import { useHistory, matchPath  } from 'react-router';
import EKHeader from './components/commons/EKHeader';
import EKHero from './components/commons/EKHero';
import EKOperationalUpdate from './components/commons/EKOperationalUpdate';

function App(params) {  
  const isAuthenticated = params.isAuthenticated || localStorage.getItem ('loggedIn') === "true";
  const headerNavigationList = ['BOOK', 'MANAGE', 'EXPERIENCE', 'WHERE WE FLY', 'LOYALTY', 'HELP'];
  const header = !matchPath(window.location.pathname, "/Login") || isAuthenticated ? <EKHeader headerNavigationList={headerNavigationList}/> : <LoginHeader />;

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
      <EKOperationalUpdate />
      {header}      
      <main id="maincontent">
        <EKHero />
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Account">
          <MyStatement />
        </Route>
        <Route path="/Book">
          <BookAFlight/>
        </Route>
        <Route exact path="/">
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
