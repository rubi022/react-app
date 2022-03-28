import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from "./components/LandingPage";
import VerifyEmail from "./components/VerifyEmail";
import { useCallback, useEffect, useState } from "react";
import { getWithExpiry } from "./helper/utils";

function App() {
  const [user, setUser] = useState();
  const value = getWithExpiry("user-info");
  console.log({ value });
  const loadUser = useCallback(() => {
    setUser(value);
  }, []);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="App">
      <Navbar setUser={setUser} user={user} />
      <Routes>
        <Route exact path="/" element={<LandingPage user={user} />} />
        <Route path="register" element={<Register user={user} />} />
        <Route path="login" element={<Login user={user} setUser={setUser} />} />
        <Route
          path="email-verification"
          element={<VerifyEmail user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
