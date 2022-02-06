import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';


const Login = () => {


    //  const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    // const navigate = useNavigate();
    // const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // history.push("/add")
            // navigate('/product');
        }
    }, [navigate]);
    async function login() {
        console.warn(email, password)
        let item = { email, password }
        let result = await fetch("https://cp.btfd.cc/api/v2/barong/identity/sessions",

            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(item)
            });
        result = await result.json()
        console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        // navigate('/product');


    }
    return (

        <div className="col-sm-4 offset-sm-4 resgister-div">
            <div className="card card-sign">
                <div className="btn-group">
                    <Link to="/register" className="btn btn-group-top-reg active" aria-current="page">SIGN UP</Link>
                    <Link to="/login" className="btn btn-group-top-log ">SIGN IN</Link>

                </div>
                <br />



                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                <br />

                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                <br />

                <button onClick={login} className="btn btn-sign">Login</button>


            </div>

        </div>
    )
};

export default Login;
