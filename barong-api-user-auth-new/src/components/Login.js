import React, { useState } from "react";
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  //  const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();



    const logme = async () => {

        let item = { email, password }

        console.warn(item)


        // let result = await fetch("http://localhost:5000/users", 

        let result = await fetch("https://cp.btfd.cc/api/v2/barong/identity/sessions",

            {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            })

        result = await result.json()
        // console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        // history.push("/login")
        navigate('/login');

    }


    return (

        <div className="col-sm-6 offset-sm-3">

            <h3> Login Page</h3>

            <br />

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
            <br />

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            <br />

            <button onClick={logme} className="btn btn-primary">Login</button>
        </div>

    )
};

export default Login;

