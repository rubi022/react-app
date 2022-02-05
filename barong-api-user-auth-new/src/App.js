import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

            </ul>
            <form className="d-flex">

              {/* <a class="nav-link" href="#">Login</a> */}

              {/* <Routes>
                <Route path="register" class="nav-link" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Routes> */}
              <Link className="nav-link" to="/register">Register</Link>
              <Link className="nav-link" to="/login">Login</Link>

            </form>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="register" className="nav-link" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
