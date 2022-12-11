import './App.css';
import LoginHeader from './components/commons/LoginHeader';
import Footer from './components/commons/Footer';
import MyStatement from './components/myaccount/MyStatement';
import Login from './components/login/Login';
import React from 'react';
import BookAFlight from './components/book/BookAFlight';
import { Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import EKHeader from './components/commons/EKHeader';
import EKHero from './components/commons/EKHero';
import EKOperationalUpdate from './components/commons/EKOperationalUpdate';
import { headerNavigationList } from './data/navigation';

function App(params) {
  const location = useLocation();
  const isLoginPath = location.pathname === "/Login";
  const isAccountPath = location.pathname === "/Account";
  const header = !isLoginPath || params.isAuthenticated ? <EKHeader headerNavigationList={headerNavigationList} /> : <LoginHeader />;

  return (
    <>      
      {params.isAuthenticated ?
        (<>
          {!isLoginPath && !isAccountPath ? <EKOperationalUpdate /> : ''}
          {header} &&
          <main id="maincontent">
            {!isLoginPath && !isAccountPath ? <EKHero /> : ''}
            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/Account">
              <MyStatement />
            </Route>
            <Route path="/Book">
              <BookAFlight />
            </Route>
            <Route exact path="/">
              <BookAFlight />
            </Route>
          </main>
          <Footer />
        </>) : <Login />
      }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated || localStorage.getItem('loggedIn') === "true"
  }
}

export default connect(mapStateToProps)(App);
