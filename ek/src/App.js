import './App.css';
import LoginHeader from './components/commons/LoginHeader';
import LandingPageHeader from './components/commons/LandingPageHeader';
import Footer from './components/commons/Footer';
import MyStatement from './components/myaccount/MyStatement';
import Login from './components/login/Login';
import React, { useEffect, useContext } from 'react';
import BookAFlight from './components/book/BookAFlight';
import { BrowserRouter as Router, Route, useLocation} from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory, matchPath  } from 'react-router';
import EKHeader from './components/commons/EKHeader';
import EKHero from './components/commons/EKHero';
import EKOperationalUpdate from './components/commons/EKOperationalUpdate';
import { createBrowserHistory } from 'history';
import Title from './components/book/Title';

function App(params) {  
  const isAuthenticated = params.isAuthenticated || localStorage.getItem ('loggedIn') === "true";  
  const location = useLocation();
  //const history = useHistory();
  const headerNavigationList = [{
    ItemText: 'BOOK', Level2: [{
      ItemText: "Book", Level3: {
        Title: 'Book Flights', Link: "/Book", 
          Items: [
            [{Title: 'Search for a Flight', Link: '/Book'}, {Title: 'Flight Schedules', Link: '/Book'}, {Title: 'Featured Fares', Link: '/Book'}, {Title: 'Special Offers', Link: '/Book'}, {Title: 'Best Fare Finder', Link: '/Book'}],
            [{Title: 'Planning Your Trip', Link: '/Book'}, {Title: 'Book a hotel', Link: '/Book'}, {Title: 'Tours and activities', Link: '/Book'}, {Title: 'Dubai Parks and Resorts', Link: '/Book'}]
          ]
        }
      }, {
      ItemText: "About booking online", Level3: {
        Title: 'The Emirates App', Link: "/Book", 
          Items: [
            [{Title: 'Emirates Best Price guarantee', Link: '/Book'}, {Title: 'Seat selection', Link: '/Book'}, {Title: 'Hold my fare', Link: '/Book'}],
            [{Title: 'Mobile boarding pass', Link: '/Book'}, {Title: 'The Emirates App', Link: '/Book'}]
          ]
        }
      }
    ]},
    {ItemText: 'MANAGE', Level2: 
      [{ItemText: "Manage"}, {ItemText: "Before You Fly"}, {ItemText: "Baggage"}, {ItemText: "Visa and Support"}]},
    {ItemText: 'EXPERIENCE', Level2: 
      [{ItemText: "Inflight Experience"}, {ItemText: "The Emirates Experience"}, {ItemText: "Family Travel"}, {ItemText: "Fly Better"}, {ItemText: "About Us"}]},
    {ItemText: 'WHERE WE FLY', Level2: 
      [{ItemText: "Our Destinations"}, {ItemText: "Our Travel Partner"}]},
    {ItemText: 'LOYALTY', Level2: 
      [{ItemText: "Emirates Skywards"}, {ItemText: "Business Rewards"}]},
    {ItemText: 'HELP', Level2: 
      [{ItemText: "Help and Contacts"}, {ItemText: "Covid-19 Travel Supports"}, {ItemText: "Your Support"}]}
  ];

  

  const isLoginPath = location.pathname == "/Login";
  const isAccountPath = location.pathname == "/Account";
  const header = !isLoginPath || isAuthenticated ? <EKHeader headerNavigationList={headerNavigationList}/> : <LoginHeader />;  

  return (    
    <>
      {!isLoginPath && !isAccountPath ? <EKOperationalUpdate /> : ''}
      {header}      
      <main id="maincontent">
        {!isLoginPath && !isAccountPath ? <EKHero /> : ''}        
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
      <Footer />
    </>    
  );
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(App);
