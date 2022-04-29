import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import "../style/admin.css"


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            history("../admin");
        }
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history("../admin");
        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const redirecttosignup = () => {
        history("../signup");
    }

    return (
        <>
            <div className='container mt-4 d-flex flex-column justify-content-center'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                    </div>
                    <button disabled={credentials.email.length ===0 || credentials.password <5} type="submit" className="btn btn-primary">Login</button>
                </form>
                <p>Create a new account<button className='navigate' onClick={redirecttosignup}>SignUp</button></p>
            </div>
        </>
    )
    {/* <div className=" d-flex align-items-center justify-content-center">
        <div className="login-id">
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true" style={{ backgroundColor: "#343a40" }}>Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-register" data-mdb-toggle="pill" href="register.html" role="tab"
                        aria-controls="pills-register" aria-selected="false"
                        style={{ backgroundColor: "#343a40" }}>Register</a>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form className="d-flex justify-content-center text-center flex-column">
                        <p>Sign in with:</p>
                        <div className="text-center d-flex mb-3" style={{ color: "#000 " }}>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-facebook-official" aria-hidden="true" style={{ color: "#000 " }}></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-google" aria-hidden="true" style={{ color: "#000 " }}></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-twitter" aria-hidden="true" style={{ color: "#000 " }}></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fa fa-github" aria-hidden="true" style={{ color: "#000 " }}></i>
                            </button>
                        </div>

                        <p className="text-center" style={{ color: "#fff " }}>or:</p>

                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" />
                            <label className="form-label" htmlFor="loginName" style={{ color: "#000 " }}>Email or username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" htmlFor="loginPassword" style={{ color: "#000 " }}>Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                                    <label className="form-check-label" htmlFor="loginCheck" style={{ color: "#000 " }}> Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="" style={{ color: "#000 " }}>Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4"
                            style={{ backgroundColor: "#343a40", borderColor: "#343a40" }}>Enter</button>

                        <div className="text-center">
                            <p style={{ color: "#000 " }}>Not a member? <a href="sign.html">sign-up</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> */}
    {/* <footer id="foot">

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="lorem">
                        <h1>Let's Talk</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta pariatur nihil veniam
                            fuga culpa ab eius in animi molestiae, dolorum qui corporis distinctio quo minus fugit
                            perferendis quis autem delectus!</p>
                        <button type="button" className="btn btn-lg btn-light"><a href="register.html">Be a Member</a></button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="social">
                        <h1>Contact Us:</h1>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <i className="fa fa-facebook-official" aria-hidden="true"></i>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <p>Email : firstcry@gmail.com</p>
                        <p>Phone no. : 6265915363</p>
                        <p>© Copyright TinDog</p>
                    </div>
                </div>
            </div>
        </div>
    </footer> */}
}
export default Login;
