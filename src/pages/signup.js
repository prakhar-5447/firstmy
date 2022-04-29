import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({ owner: "", orgName: "", email: "", password: "", contact: "", address: "" })
    let history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            history("../admin");
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ owner: credentials.owner, orgName: credentials.orgName, email: credentials.email, password: credentials.password, contact: credentials.contact, address: credentials.address, })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history("../admin");
        } else {
            alert("Invalid credentials");
        }

    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const redirecttologin = () => {
        history("../login");
    }

    return (
        <>
             <div className="container mt-4 d-flex flex-column justify-content-center">
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

                    <button disabled={credentials.email.length === 0 || credentials.password < 5 || credentials.orgName.length < 3 || credentials.owner.length < 3 || credentials.contact.length < 5} type="submit" className="btn btn-primary">SignUp</button>
                </form>
                <p>Already have a accoumt<button className='navigate' onClick={redirecttologin}>Login</button></p>
            </div>
        </>
    )
}

export default Login
