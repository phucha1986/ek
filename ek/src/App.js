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
    {ItemText: 'MANAGE', Level2: [{
      ItemText: "Manage", Level3: {
        Title: 'Manage your booking', Link: "/Book", 
          Items: [
            [{Title: 'Retrieve your booking', Link: '/Book'}, {Title: 'Cancel your booking', Link: '/Book'}, {Title: 'Choose your seat', Link: '/Book'}, {Title: 'Manage chauffeur-drive', Link: '/Book'}, {Title: 'Change your booking', Link: '/Book'}, {Title: 'Upgrade your flight', Link: '/Book'}, {Title: 'Book accessible travel', Link: '/Book'}],
            [{Title: 'Check in online', Link: '/Book'}],
            [{Title: 'Flight status', Link: '/Book'}]
          ]
        }
      }, {
      ItemText: "Before You Fly", Level3: {Title: 'Before you fly', Link: "/Book"}}, {
      ItemText: "Baggage", Level3: {Title: 'Baggage information', Link: "/Book"}}, {
      ItemText: "Visa and Support", Level3: {Title: 'Find your visa requirements', Link: "/Book"}}]}, 
    {ItemText: 'EXPERIENCE', Level2: [{
      ItemText: "Inflight Experience", Level3: {Title: 'Inflight Experience', Link: "/Book"} }, {
      ItemText: "The Emirates Experience", Level3: {Title: 'The Emirates Experience', Link: "/Book"}}, {
      ItemText: "Family Travel", Level3: {Title: 'Family Travel', Link: "/Book"} }, {
      ItemText: "Fly Better", Level3: {Title: 'Fly Better', Link: "/Book"}}, { 
      ItemText: "About Us", Level3: {Title: 'About Us', Link: "/Book"}}
    ]},
    {ItemText: 'WHERE WE FLY', Level2: [{
      ItemText: "Our Destinations", Level3: {Title: 'Our Destinations', Link: "/Book"}}, {
      ItemText: "Our Travel Partner", Level3: {Title: 'Our Travel Partner', Link: "/Book"}}
    ]},
    {ItemText: 'LOYALTY', Level2: [{
      ItemText: "Emirates Skywards", Level3: {Title: 'Emirates Skywards', Link: "/Book"}}, {
      ItemText: "Business Rewards", Level3: {Title: 'Business Rewards', Link: "/Book"}}
    ]},
    {ItemText: 'HELP', Level2: [{
      ItemText: "Help and Contacts", Level3: {Title: 'Help and Contacts', Link: "/Book"}}, {
      ItemText: "Covid-19 Travel Supports", Level3: {Title: 'Covid-19 Travel Supports', Link: "/Book"}}, {
      ItemText: "Your Support", Level3: {Title: 'Your Support', Link: "/Book"}}
    ]}
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
