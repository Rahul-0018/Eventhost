import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './sign.css';

const Signup = () =>{

    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
        window.location.href = "/Home";
        }
    })
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function signUp() {
        let item = { name, email, password, confirmPassword };

        let result = await fetch("http://localhost:8429/api/v1/auth/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        });

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));

        if(result.userName != null)
        {
            window.location.href = "/";
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (email && name && password && confirmPassword) {
            signUp();
        } else {
            alert("Please fill all fields!");
        }
    }

    return(
        <div className="page">
            <div className="login-cont">
                <h1 id='logo'>EventNest</h1>
                <div className="up"></div>
                <form>
                    <div>
                        <input id='password' type="text" value={name} onChange={(e) => setName(e.target.value)} title='Name' placeholder="Name" required />
                        <div>
                            <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                        </div>
                        <div>
                            <input id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} title='Password' placeholder="Password" required />
                        </div>
                        <div>
                            <input id='password' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} title='Confirm Password' placeholder="Confirm Password" required />
                        </div>
                    </div>
                </form>
                <div className="checkbox-container">
                    <input type="checkbox" id="terms-checkbox" required />
                    <label id="accept">I agree to the Terms of Service and Privacy Policy.</label>
                </div>
                <button id='login' type="submit" onClick={handleSubmit}>Sign up</button>
                <p id='signin'>Have an EventNest account? <Link to='/'>SIGN IN</Link></p>
            </div>
        </div>
    );
};

export default Signup;
