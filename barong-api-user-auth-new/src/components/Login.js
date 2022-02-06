import { Link } from "react-router-dom";


const Login = () => {
    return (

        <div className="col-sm-4 offset-sm-4 resgister-div">
            <div className="card card-sign">
                <div className="btn-group">
                    <Link to="/register" className="btn btn-group-top-reg active" aria-current="page">SIGN UP</Link>
                    <Link to="/login" className="btn btn-group-top-log ">SIGN IN</Link>

                </div>
                <br />




                <input type="email" className="form-control" placeholder="Email" />
                <br />

                <input type="password" className="form-control" placeholder="Password" />
                <br />

                <button className="btn btn-sign">Login</button>
            </div>

        </div>
    )
};

export default Login;
