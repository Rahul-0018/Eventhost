// import React from 'react';
// import {  Link } from "react-router-dom";
// import './navbar.css';
// const navbar = () =>{
//   return (
// <div className='navbox'>
// <div className="navbar">
// <li>
//       <Link to="/">EventNest</Link>
//     </li>
//     <li>
//       <Link to="/" className='fea'>Features</Link>
//     </li>
//     <li>
//       <Link to="/" className='sol'>Solutions</Link>
//       </li>
//       <li>
//       <Link to="/Login">SIGN IN</Link>
//       </li>
//       </div>
// </div>
//   );
// }
// export default navbar;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("sam");
  const [email, setEmail] = useState("joe@example.com");
  const [phonenumber, setPhone] = useState("+91 9865960774");
  const [password, setPassword] = useState("");
  // const [originalName, setOriginalName] = useState(name);
  // const [originalEmail, setOriginalEmail] = useState(email);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setShowDropdown(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSave = () => {
    if (password === "123") {
      console.log("Profile saved successfully!");
      togglePopup();
    } else {
      alert("Incorrect password. Please try again.");
    }
  };


  const handleLogout = () => {
    window.location.href = '/';
  };

  const handleEditProfile = () => {
    togglePopup();
  };

  return (
    <div className='navbox'>
      <div className="navbar">
        <li>
          <Link to="/">EventNest</Link>
        </li>
        <li>
          <Link to="/event" className='fea'>Features</Link>
        </li>
        <li>
          <Link to="/" className='sol'>Home</Link>
        </li>
        <li className="dropdown" onClick={toggleDropdown}>
        <button className="dropbtn">
        <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-10437388-8611278.png" alt="Profile Icon" height='30px'/>
      </button>
          {showDropdown && (
            <div className="dropdown-content">
              <button className="editb" onClick={handleEditProfile}>Edit Profile</button>
              <button className="prob" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </li>
      </div>

      {showPopup && (
        <div className="popup">
          <h2>Edit Profile</h2>
          <form>
  <label>
    Name:
    <input type="text" value={name} onChange={handleNameChange} />
  </label>
  <label>
    Email:
    <input type="email" value={email} onChange={handleEmailChange} />
  </label>
  <label>
    Phone Number:
    <input type="email" value={phonenumber} onChange={handlePhoneChange} />
  </label>
  <label>
    Password:
    <input type="password" value={password} onChange={handlePasswordChange} required/>
  </label>
</form>

          <div className="popup-buttons">
          <button type="button" className='save' onClick={handleSave}>Save</button>
          <button type="button" className='close' onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
