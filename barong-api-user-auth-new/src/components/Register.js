
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate();



    const signUp = async () => {

        let item = { email, password }



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
        console.warn("result", result)
        localStorage.setItem("user-info", JSON.stringify(result))
        navigate('/email-verification');

    }


    return (

        <div className="col-sm-4 offset-sm-4 resgister-div">
            <div className="card card-sign">
                <div className="btn-group">
                    <Link to="/register" className="btn btn-group-top-reg active" aria-current="page">SIGN UP </Link>
                    <Link to="/login" className="btn btn-group-top-log">SIGN IN</Link>

                </div>
                <br />


                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                <br />

                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                <br />
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="Confirm Password" />
                <br />


                <button onClick={signUp} className="btn btn-sign">Sign Up</button>
            </div>


        </div>

    )
};

export default Register;
