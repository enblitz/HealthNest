import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
// import { toast } from 'react-toastify';
import "./Signin.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form mt">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Enter Your E-mail Id'
          required
        />
        <label htmlFor="password">Password:</label>
        <div className="password-container"> {/* Wrap input and icon */}
          <input
            type={showPassword ? 'text' : 'password'} // Toggle input type
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Enter Your Password'
            required
          />
          <span className="password-toggle" style={{ color: 'black'}} onClick={handleShowPassword}>
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
      <p className='mt-10'>
        Don't have an account? <Link to="/signup">Create an account</Link>
      </p>
    </div>
  );
};

export default Login;