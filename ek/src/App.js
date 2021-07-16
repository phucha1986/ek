import './App.css';
import Header from './components/commons/Header';
import AuthenticatedHeader from './components/commons/AuthenticatedHeader';
import Footer from './components/commons/Footer';
import MyStatement from './components/myaccount/MyStatement';
import Login from './components/login/Login';
import React from 'react';
import BookAFlight from './components/book/BookAFlight';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
//import { useHistory, withRouter } from 'react-router-dom';

function App(params) {  
  const isAuthenticated = params.isAuthenticated || localStorage.getItem ('loggedIn') === "true";
  const header = isAuthenticated ? <AuthenticatedHeader /> : <Header />;    

  return (    
    <Router>          
      {header}      
      <main id="maincontent">
        <Route>
          {!isAuthenticated ? <Login /> : <Redirect to="/MyStatement" />}
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

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
