import './App.css';
import { useLocation, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home';
import Contact from './components/ContactUs/Contactus';
import SignIn from "./components/Login/SignIn";
import SignUp from './components/Login/SignUp';
import Doctors from "./components/Doctor/search";
import About from "./components/About/About"

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/signin';
  const isSignupPage = location.pathname === '/signup';
  const isDetailPage = location.pathname.includes('/Detail'); // Check if current path includes '/Detail'

  return (
    <div className="App">
      {!isLoginPage && !isSignupPage && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!isLoginPage && !isDetailPage && !isSignupPage && <Footer />}
    </div>
  );
}

export default App;
