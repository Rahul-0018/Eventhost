import React from "react";
import { Link } from 'react-router-dom';
import './sign.css';
const signup = () =>{
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
            <input id='email' type="text" title='Mobile No' placeholder="Mobile No"  required/>
            </div>
            <div>
                    <input id='password' type="password" title='Password' placeholder="Password"  required/>
                    </div>
                <div>
                <input id='password' type="password" title='Confirm Password' placeholder="Confirm Password"  required/>
                </div>
                </div>
                </form>
                <div className="checkbox-container">
                <input type="checkbox" id="terms-checkbox" required />
                <label id="accept">I agree to the Terms of Service and Privacy Policy.</label>
                </div>
                <button id='login' type="submit"><Link className = "bl" to='/'>Sign up</Link></button>
                <p id='signin'>Have a EventNest account? <Link to='/Login'>SIGN IN</Link></p>
                </div>
                </div>
                </>
    );
};

export default signup;