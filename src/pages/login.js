import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    let history = useNavigate();

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

            <div class="container-fluid">

                <img class="login" src="images/login.jpg" alt="" width="100%" />
            </div>
            <div class="container-fluid">
                <div class="login-id">
                    <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                aria-controls="pills-login" aria-selected="true" style="background-color: #343a40;">Login</a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="tab-register" data-mdb-toggle="pill" href="register.html" role="tab"
                                aria-controls="pills-register" aria-selected="false"
                                style="background-color: #343a40;">Register</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <form>
                                <div class="text-center mb-3" style="color:#fff ;">
                                    <p>Sign in with:</p>
                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fa fa-facebook-official" aria-hidden="true" style="color:#fff ;"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fa fa-google" aria-hidden="true" style="color:#fff ;"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fa fa-twitter" aria-hidden="true" style="color:#fff ;"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fa fa-github" aria-hidden="true" style="color:#fff ;"></i>
                                    </button>
                                </div>

                                <p class="text-center" style="color:#fff ;">or:</p>

                                <div class="form-outline mb-4">
                                    <input type="email" id="loginName" class="form-control" />
                                    <label class="form-label" for="loginName" style="color:#fff ;">Email or username</label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="password" id="loginPassword" class="form-control" />
                                    <label class="form-label" for="loginPassword" style="color:#fff ;">Password</label>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-md-6 d-flex justify-content-center">
                                        <div class="form-check mb-3 mb-md-0">
                                            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                            <label class="form-check-label" for="loginCheck" style="color:#fff ;"> Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div class="col-md-6 d-flex justify-content-center">
                                        <a href="" style="color:#fff ;">Forgot password?</a>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-primary btn-block mb-4"
                                    style="background-color: #343a40;border-color: #343a40;">Enter</button>

                                <div class="text-center">
                                    <p style="color:#fff ;">Not a member? <a href="sign.html">sign-up</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <footer id="foot">

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="lorem">
                                <h1>Let's Talk</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta pariatur nihil veniam
                                    fuga culpa ab eius in animi molestiae, dolorum qui corporis distinctio quo minus fugit
                                    perferendis quis autem delectus!</p>
                                <button type="button" class="btn btn-lg btn-light"><a href="register.html">Be a Member</a></button>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="social">
                                <h1>Contact Us:</h1>
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <i class="fa fa-facebook-official" aria-hidden="true"></i>
                                <i class="fa fa-instagram" aria-hidden="true"></i>
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                <p>Email : firstcry@gmail.com</p>
                                <p>Phone no. : 6265915363</p>
                                <p>© Copyright TinDog</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Login
