import React from "react";
import './Home.css';
import Navbar from './navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Home = () =>{
    return(
        <>
        <div className="containerh">
        <Navbar/>
        <div className="content">
        <div className="img"></div>
        <div className="imgbox"><h3 className="padin">In-person events</h3><h3>team-building events</h3><h3>Product Launches</h3><h3>Hybrid events</h3></div>
        <div className="conh">
            <h3>ALL-IN-ONE EVENT MANAGEMENT SOFTWARE</h3>
        </div>
        <div className="con2">
            <h1 className="d">Designed for today's events </h1>
            <h1 className="a">and prepared for</h1>
            <h1 className="t">tomorrow's challenges</h1>
        </div>
        <div className="eve">
        
            <h3>Everything you need to craft impactful event</h3>
            <h3 className="e">experiences all while staying technologically</h3> 
            <h3 className="r">relevant, now and always.</h3>
        </div>
        <button className="signuph"><Link className="signups" to='/Signup'>SIGN UP FOR FREE</Link></button>
        <div className="head"><h1>The simplest way to host all your events</h1></div>
            <div className="box">
            <div className="boximg2"><h2>Product Launches</h2><h3>Experience innovation from the comfort of your screen</h3><Link className = "butttonlink" to='/event'><button>Learn More</button></Link><div className="vid2"></div></div>
            <div className="boximg1"><h2>Conferences & Seminars</h2><h3>Keep it all together at the venue</h3><Link className = "butttonlink" to='/event'><button>Learn More</button></Link><div className="vid1"></div></div>
                <div className="boximg3"><h2>Team-Building Activities</h2><h3>Enhance teamwork through interactive experiences</h3><Link className = "butttonlink" to='/event'><button>Learn More</button></Link><div className="vid3"></div></div>
            </div>
            </div>
            <Footer/>
        </div>
        </>
    );
};

export default Home;