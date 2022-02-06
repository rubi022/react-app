import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import VerifyEmail from './components/VerifyEmail';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="email-verification" element={<VerifyEmail />} />

      </Routes>
    </div>
  );
}

export default App;
