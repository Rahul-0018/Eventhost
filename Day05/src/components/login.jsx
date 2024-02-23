import React from "react";
import { Link } from 'react-router-dom';
import './login.css';
const login = () =>{
    return(
        <>
        <div className="page">
            <div className="login-cont">
            <h1 id='logo'>EventNest</h1>
            <div className="up"></div>
            <form>
            <div>
            <input id='email' type="email" placeholder="Email" required/>
            <div>
                <input id='password' type="password" title='Password' placeholder="Password"  required/>
                </div>
                
                </div>
                </form>
                <button id='login' type="submit"><Link className="bl" to='/'>Sign in</Link></button>
                <p id='fp'><a href="/#">Forgot Password?</a></p>
                <p id='signup'>Don't have a EventNest account? <Link to='/Signup'>Sign up</Link></p>
                </div>
                </div>
                </>
                );
            };
            
export default login;