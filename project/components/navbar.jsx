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

// import React, { useState } from 'react';
// import { Link , useNavigate} from "react-router-dom";
// import './navbar.css';
// import Demo from './Demo';
// const Navbar = () => {

// const navigate = useNavigate();
//   const [showDemo, setShowDemo] = useState(false);
//   let user = JSON.parse(localStorage.getItem('user-info'))
//   console.warn(user)

//   const userInfoString = localStorage.getItem('user-info');
//   let specify = "";
//   let userToken ="";
//   let names = "";
// try {
//   const userInfo = JSON.parse(userInfoString);
//   // console.log('Parsed userInfo:', userInfo);
//   userToken = userInfo.emailc;
//   // console.log('User token:', userToken);

//   names = userToken.split('@')[0];
//   specify = "admin@gmail.com";
//   if (userToken == specify) {
//     // setShowDemo(true);
//     // window.location.href = "/Demo";
//     // window.location.replace("/Demo");

//   }

// } catch (error) {
//   console.error('Error parsing userInfo:', error);
// }

//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [name, setName] = useState("sam");
//   const [email, setEmail] = useState("joe@example.com");
//   const [phonenumber, setPhone] = useState("+91 9865960774");
//   const [password, setPassword] = useState("");
  
//   // const [originalName, setOriginalName] = useState(name);
//   // const [originalEmail, setOriginalEmail] = useState(email);


//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//     setShowDropdown(false);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSave = () => {
//     if (password === "123") {
//       console.log("Profile saved successfully!");
//       togglePopup();
//     } else {
//       alert("Incorrect password. Please try again.");
//     }
//   };


//   const handleLogout = () => {
//     window.location.href = '/Home';
//   };
  
//   const handleEditProfile = () => {
//     togglePopup();
//   };
  
  
//   function logOut()
//   {
//     localStorage.clear();
//     // window.location.replace("/Home");
//     navigate('/Home');
//   }

//   useEffect(() => {
//     if (userToken === specify && localStorage.getItem('user-info')) {
//       setShowDemo(true);
//       navigate('/Demo');
//     }
//   }, [navigate, specify, userToken]);

//   return (
//     <div className='navbox'>
//       <div className="navbar">
//         <li>
//           <Link to="/">EventNest</Link>
//         </li>
//         {
//           specify == userToken && localStorage.getItem('user-info') ?
//           <>
//           {/*<li>
//           <Link to="/Demo" className='fea'>Events</Link>
//         </li>
//         <li>
//           <Link to="/Home" className='sol'>Home</Link>
//         </li>*/}
//           </>
//           :
//           specify != userToken && localStorage.getItem('user-info')?
//           <>
//           <li>
//           <Link to="/event" className='fea'>users</Link>
//         </li>
//         <li>
//           <Link to="/Home" className='sol'>Home</Link>
//         </li>
//           </>
//           :
//           <>
//           {/*<li>
//           <Link to="/event" className='fea'>Features</Link>
//         </li>*/}
//         <li>
//           <Link to="/Home" className='sol'>Home</Link>
//         </li>
//           <li>
//           <Link to="/" className='log'>Login</Link>
//         </li>
//         <li>
//           <Link to="/Signup">Signup</Link>
//         </li>
//           </>
//         }

        

//         {localStorage.getItem('user-info') && userToken == specify?
//         <li className="dropdown" onClick={toggleDropdown}>
//         <button className="dropbtn">
//         {specify ? names : <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-10437388-8611278.png" alt="Profile Icon" height='30px'/>}
//         </button>
//           {showDropdown && (
//             <div className="dropdown-content">
//               <button className="prob" onClick={logOut}>Logout</button>
//             </div>
            
//           )}
//           </li>
//           :null}

//           {localStorage.getItem('user-info') && userToken != specify?
//         <li className="dropdown" onClick={toggleDropdown}>
//         <button className="dropbtn">
//         {specify ? names : <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/profile-10437388-8611278.png" alt="Profile Icon" height='30px'/>}
//         </button>
//           {showDropdown && (
//             <div className="dropdown-content">
//               <button className="prob" onClick={logOut}>Logout</button>
//             </div>
//           )}
//           </li>
//           :null}
//       </div>

//       {showPopup && (
//         <div className="popup">
//           <h2>Edit Profile</h2>
//           <form>
//   <label>
//     Name:
//     <input type="text" value={name} onChange={handleNameChange} />
//   </label>
//   <label>
//     Email:
//     <input type="email" value={email} onChange={handleEmailChange} />
//   </label>
//   <label>
//     Phone Number:
//     <input type="email" value={phonenumber} onChange={handlePhoneChange} />
//   </label>
//   <label>
//     Password:
//     <input type="password" value={password} onChange={handlePasswordChange} required/>
//   </label>
// </form>

//           <div className="popup-buttons">
//           <button type="button" className='save' onClick={handleSave}>Save</button>
//           <button type="button" className='close' onClick={togglePopup}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  let specify = "";
  let names = "";
  let userToken = "";

  try {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    userToken = userInfo.emailc;
  
    names = userToken.split('@')[0];
    specify = "admin@gmail.com";

  } catch (error) {
    console.error('Error parsing userInfo:', error);
  }
  
  useEffect(() => {
    if (userToken === specify && localStorage.getItem('user-info')) {
      setShowDemo(true);
      navigate('/Admin');
    }
  }, [navigate, specify, userToken]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  return (
    <div className="topnav">
  <div className="left-align">
    <Link to="/" className="active">EventNest</Link>
  </div>

  <div className="right-align">
    {userToken && userToken !== specify && (
      <>
        <Link to="/User">Events</Link>
        <Link to="/Home">Home</Link>
      </>
    )}

    {userToken ? (
      <div className="split" onClick={toggleDropdown}>
        <button className="dropbtn">Hi {names}</button>
        {showDropdown && (
          <div className="dropdown-content">
            <button className="prob" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    ) : (
      <>
        <Link to="/" className="log">Login</Link>
        <Link to="/Signup">Signup</Link>
      </>
    )}
  </div>
</div>

  );
};

export default Navbar;
