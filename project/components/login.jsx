import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const [loading, setLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!email || !password) {
    //         setError("Please fill in all fields");
    //         return;
    //     }
    //     setLoading(true); // Show loader
    //     // Simulate async operation (delayed redirection)
    //     setTimeout(() => {
    //         window.location.href = "/Home";
    //     }, 1000); // 5 seconds delay
    // };

    async function login() {
        // console.warn(email, password);
        let item = { email, password };
        let result = await fetch("http://localhost:8429/api/v1/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));

        if(result.message != null)
        {
            window.location.href = "/Home";
        }
    }
    return (
        <>
            {/*<div className={`page ${loading ? 'blur-background' : ''}`}>
                {loading && (
                    <div className="loader-overlay">
                        <div className="loader">
                            Loading...
                        </div>
                </div>
                )}
                </div>*/}
                <div className="login-cont">
                    <h1 id='logo'>EventNest</h1>
                    <div className="up"></div>
                    <form>
                        <div>
                            <input id='email' type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                            <div>
                                <input id='password' type="password" title='Password' placeholder="Password" value={password} onChange={handlePasswordChange} required />
                            </div>
                        </div>
                        {error && <p className="error">{error}</p>}
                        </form>
                        <button id='login' type="submit" onClick={login}>Sign in</button>
                    <p id='fp'><a href="/#">Forgot Password?</a></p>
                    <p id='signup'>Don't have an EventNest account? <Link to='/Signup'>Sign up</Link></p>
                </div>
        </>
    );
};

export default Login;
