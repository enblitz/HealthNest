import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signin.css"

const SignUp = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="signup-form mt">
      <h2>Signup</h2>
      <form className='signup-main'>
        <div>
        <label htmlFor="userType"> I am a : </label> 
        <select id="userType" required>
          <option value="">Select</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        </div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={username} onChange={e => setName(e.target.value)} placeholder='Enter Your Name' required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Your E-mail Id' required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Your Password' required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Enter Confirm Password' required />
        <button type="submit">Signup</button>
      </form>
      <p className='mt-10'>
        Already have an account? <Link to="/Signin">Login</Link>
      </p>
    </div>
  )
};

export default SignUp;