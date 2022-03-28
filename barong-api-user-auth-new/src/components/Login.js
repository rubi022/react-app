import { Link, Navigate } from "react-router-dom";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { setWithExpiry } from "../helper/utils";
// import React, { useState, useEffect } from "react";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLogged, setKeepLogged] = useState(false);
  if (user) return <Navigate to="/" />;
  // const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();

    let item = { email, password };
    let result = await fetch(
      "https://cp.btfd.cc/api/v2/barong/identity/sessions",

      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    console.log({ result });
    if (result?.errors)
      return toast.error("Authentication failed", {
        position: "top-center",
      });
    console.log("result", result);
    if (keepLogged) setWithExpiry("user-info", result, 86400000);
    //  localStorage.setItem("user-info", JSON.stringify(result));

    setUser(result);
    // navigate('/product');
  }
  return (
    <div className="col-sm-4 offset-sm-4 resgister-div">
      <ToastContainer />
      <div className="card card-sign">
        <div className="btn-group">
          <Link
            to="/register"
            className="btn btn-group-top-reg active"
            aria-current="page"
          >
            SIGN UP
          </Link>
          <Link to="/login" className="btn btn-group-top-log ">
            SIGN IN
          </Link>
        </div>
        <br />

        <form action="" className="login-form" onSubmit={onSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
            required
          />
          <br />
          <input
            checked={keepLogged}
            onChange={(e) => setKeepLogged(e.target.checked)}
            type="checkbox"
          />{" "}
          <span style={{ marginLeft: "10px", color: "#FFF" }}>
            Keep me logged in
          </span>
          <br />
          <br />
          {/* <button onClick={(e) => onSubmit(e)} className="btn btn-sign">
            Login
          </button> */}
          <input type="submit" value="Login" className="btn btn-sign" />
        </form>
      </div>
    </div>
  );
};

export default Login;
