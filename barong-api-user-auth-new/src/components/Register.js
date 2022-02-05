
import React, { useState } from "react";
// import { useHistory } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();



    const signUp = async () => {

        let item = { username, email, password }

        console.warn(item)


        // let result = await fetch("http://localhost:5000/users",
        let result = await fetch("https://cp.btfd.cc/api/v2/barong/identity/users",

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

            <h3> Register Page</h3>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Username" />
            <br />

            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
            <br />

            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            <br />

            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>

    )
};

export default Register;
