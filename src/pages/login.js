import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    // const [credentials, setCredentials] = useState({ email: "", password: "" })
    // let history = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:5000/auth/login", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ email: credentials.email, password: credentials.password })
    //     });
    //     const json = await response.json()
    //     console.log(json);
    //     if (json.success) {
    //         // Save the auth token and redirect
    //         localStorage.setItem('token', json.authtoken);
    //         history("/");

    //     }
    //     else {
    //         alert("Invalid credentials");
    //     }
    // }

    // const onChange = (e) => {
    //     setCredentials({ ...credentials, [e.target.name]: e.target.value })
    // }

    return (
        <>
        {/* // <div>
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-3">
        //             <label htmlFor="email" className="form-label">Email address</label>
        //             <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
        //             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //         </div>
        //         <div className="mb-3">
        //             <label htmlFor="password" className="form-label">Password</label>
        //             <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
        //         </div>

        //         <button type="submit" className="btn btn-primary">Submit</button>
        //     </form>
        // </div> */}
 <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#"><img src="images/logo.png" alt="" height="50px"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 2rem;" href="firstmy.html"><i
                                class="fa fa-home" aria-hidden="true"></i> Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 2rem;" href="firstmy.html"><i
                                class="fa fa-child" aria-hidden="true"></i> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 2rem;" href="firstmy.html"><i
                                class="fa fa-money" aria-hidden="true"></i> Donate</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 2rem;" href="firstmy.html"><i
                                class="fa fa-phone" aria-hidden="true"></i> Contact</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 1.5rem;" href="firstmy.html"><i 
                            class="fa fa-child" aria-hidden="true"></i> Meet our kids</a>
                    </li>
                </ul>
            </div>
            <div class="button">
                <button class="btn btn-outline-secondary" type="button"><a href="admin.html">Admin</a></button>
                <button class="btn btn-outline-secondary" type="button"><a href="login.html"><i class="fa fa-sign-in" aria-hidden="true"></i> login</button></a>
            </div>
        </nav>
    </div>

    <div class="container-fluid">

        <img class="login" src="images/login.jpg" alt="" width="100%">
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
            <!-- Pills navs -->

            <!-- Pills content -->
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

                        <!-- Email input -->
                        <div class="form-outline mb-4">
                            <input type="email" id="loginName" class="form-control" />
                            <label class="form-label" for="loginName" style="color:#fff ;">Email or username</label>
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-4">
                            <input type="password" id="loginPassword" class="form-control" />
                            <label class="form-label" for="loginPassword" style="color:#fff ;">Password</label>
                        </div>

                        <!-- 2 column grid layout -->
                        <div class="row mb-4">
                            <div class="col-md-6 d-flex justify-content-center">
                                <!-- Checkbox -->
                                <div class="form-check mb-3 mb-md-0">
                                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label class="form-check-label" for="loginCheck" style="color:#fff ;"> Remember me
                                    </label>
                                </div>
                            </div>

                            <div class="col-md-6 d-flex justify-content-center">
                                <!-- Simple link -->
                                <a href="" style="color:#fff ;">Forgot password?</a>
                            </div>
                        </div>

                        <!-- Submit button -->
                        <button type="submit" class="btn btn-primary btn-block mb-4"
                            style="background-color: #343a40;border-color: #343a40;">Enter</button>

                        <!-- Register buttons -->
                        <div class="text-center">
                            <p style="color:#fff ;">Not a member? <a href="sign.html">sign-up</a></p>
                        </div>
                    </form>
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
                            <button type="button" class="btn btn-lg btn-light"><a href="register.html">Be a Member</button></a>
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
