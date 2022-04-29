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
}
export default Login;
