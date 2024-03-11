import React, { useState } from 'react';
import Navbar from './navbar';
import Login from './login';

const ParentComponent = () => {
  const [email, setEmail] = useState(""); 

  const handleLogin = (email) => {
    setEmail(email);
  };

  return (
    <div>
      <Navbar email={email} />
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default ParentComponent;
