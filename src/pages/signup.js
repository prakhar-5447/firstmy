import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    // const [credentials, setCredentials] = useState({ owner: "", orgName: "", email: "", password: "", contact: "", address: "" })
    // let history = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch("http://localhost:5000/auth/signup", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ owner: credentials.owner, orgName: credentials.orgName, email: credentials.email, password: credentials.password, contact: credentials.contact, address: credentials.address, })
    //     });
    //     const json = await response.json()
    //     console.log(json);
    //     if (json.authtoken !== "") {
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
        {/* <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="orgName" className="form-label">orgName</label>
                    <input type="text" className="form-control" value={credentials.orgName} onChange={onChange} id="orgName" name="orgName" aria-describedby="orgNameHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="owner" className="form-label">owner</label>
                    <input type="text" className="form-control" value={credentials.owner} onChange={onChange} name="owner" id="owner" aria-describedby='ownerHelp' />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" suggested="current-password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="contact" className="form-label">contact</label>
                    <input type="text" className="form-control" value={credentials.contact} onChange={onChange} id="contact" name="contact" aria-describedby="contactHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">address</label>
                    <input type="text" className="form-control" value={credentials.address} onChange={onChange} name="address" id="address" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> */}
       
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
                        <a class="nav-link active" style="color: #fff; font-size: 1.5rem;" href="firstmy.html"><i
                                class="fa fa-home" aria-hidden="true"></i> Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 1.5rem;" href="firstmy.html"><i 
                            class="fa fa-address-book-o" aria-hidden="true"></i> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 1.5rem;" href="firstmy.html"><i
                                class="fa fa-money" aria-hidden="true"></i> Donate</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" style="color: #fff; font-size: 1.5rem;" href="firstmy.html"><i
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
                <button class="btn btn-outline-secondary" type="button"><a href="login.html"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</a></button>
            </div>
        </nav>
    </div>

    <section id="sign-up">
           <div class="container-fluid">
               <img class="sign-img" src="/images/sign.jpg" alt="" width="100%">
           </div>
            <button class="btn btn-secondary btn-dark btn-lg bt">Sign</button>
           <form class="sign" action="">
               <label for="">Enter your Name</label>
               <input type="text"><br><br>
               <label for="">Enter your Email</label>
               <input type="email"><br><br>
               <label for="">Enter your password</label>
               <input type="password" name="" id=""><br><br>
               <label for="">Repeat password</label>
               <input type="password">
           </form>
           <button class="btn btn-lg btn-dark btn-secondary sign-form"><a href="firstmy.html">ENTER</a></button>
    <span class="member"><p>Already a member?<a href="login.html">Login</a></p></span>
        </section>
        
        <footer id="sign-foot">
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="lorem">
                            <h1>Let's Talk</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta pariatur nihil veniam fuga
                                culpa ab eius in animi molestiae, dolorum qui corporis distinctio quo minus fugit
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
