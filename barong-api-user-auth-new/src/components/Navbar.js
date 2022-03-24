import { Link } from "react-router-dom";

const Navbar = () => {
  const userDetails = JSON.parse(localStorage.getItem("user-info"));
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                BASE <span className="badge bg-secondary">app</span>{" "}
              </a>
            </li>
          </ul>
          {!userDetails && (
            <form className="d-flex right-nav-item">
              <Link className="nav-link" to="/login">
                LOG IN
              </Link>
              <Link
                className="nav-link btn btn-register-nav btn-sm"
                to="/register"
              >
                REGISTER
              </Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
