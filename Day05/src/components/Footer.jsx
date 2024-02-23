import React from "react";
import './Footer.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const Footer = () =>{
    const [letter, setLetter] = useState('');
    const handleLetterChange = (event) => {
        setLetter(event.target.value);
      }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("NewsLetter:" , letter);
        // alert("You have subscribed BookMyStay's Newsletter");
        // alert("Thanks for Subscribing BookMyStay's Newsletter!!!");
    }
    return(
        <div className="foot">
        <div id="icon">
        <p id="social">&nbsp;&nbsp;&nbsp;&nbsp;Follow us on</p>
        <a href="#1"><img id="iconimg" src="https://img.happyeasygo.com/hstatic/imgs/facebook-logo-button.svg" width={30}/></a>
        <a href="##"><img id="iconimg1" src="https://img.happyeasygo.com/hstatic/imgs/twitter-logo-button.svg"/></a>
        <a href="###"><img id="iconimg2" src="https://img.happyeasygo.com/hstatic/imgs/instagram-logo.svg"/></a>
        </div>
        <div className="company">
            <p className="boldl">Quick links</p>
            <Link to='/About' style={{textDecoration: 'none'}}><p className="clink"></p></Link>
            <Link to='/Contact'style={{textDecoration: 'none'}}><p className="clink">Contact Us</p></Link>
            </div>
        <div className="company1">
            <p className="boldl">Features</p>
            <Link to='/event' style={{textDecoration: 'none'}}><p className="clink">Event ticketing</p></Link>
            <Link to='/Contact'style={{textDecoration: 'none'}}><p className="clink"></p></Link>
            </div>
            <div className="vertical"></div>
        <div className="notify">
            <p id="class">Want to receive exclusive event management offers?<br></br>Subscribe to our <span style={{color:'rgb(11, 166, 201)'}}>newsletter.</span></p>
            <div>
            <form onSubmit={handleSubmit}>
            <input className="email" type="email" title="Email" placeholder="Email" style={{color:"white"}} onChange={handleLetterChange}required></input>
            <button id="button">Subscribe</button>
            </form>
            </div>
            </div>
            <div className="end">
            <p>Copyright<FontAwesomeIcon style={{padding:'0px 5px 0px 5px'}}/> &copy; 2024 EventNest. All rights reserved</p>
            </div>
            </div>
    );
}

export default Footer ;