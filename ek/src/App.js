import logo from './logo.svg';
import './App.css';
import Header from './components/commons/Header';
import Footer from './components/commons/Footer';
import LoginHeader from './components/login/LoginHeader';
import Login from './components/login/Login';
function App() {
  return (
    <div className="ek">
      <Header />
      <main id="maincontent">
        <LoginHeader />
        <Login />        
      </main>
      <Footer />
    </div>
  );
}

export default App;
