import React, { useRef } from 'react'
// import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import '../Header/Header.css'

import Logo from "../../Assets/Images/Logo.jpg"


const Header = () => {

  const menuRef = useRef(null);

  const nav_links = [
    {
      path: 'home',
      display: 'Home'
    },
    {
      path: 'about',
      display: 'About'
    },
    {
      path: 'service',
      display: 'Service'
    },
    {
      path: 'doctors',
      display: 'Doctors'
    },
    {
      path: 'contact',
      display: 'Contact'
    }
  ]

  const menuToggle = () => menuRef.current.classList.toggle('active-menu');


  return <header className='header sticky-header'>
    <div className="nav__wrapper">
      <div className="logo">
        <img src={Logo} alt="" width={230} />
      </div>
      <div className="navigation" ref={menuRef} onClick={menuToggle}>
        <ul className="menu">
          {
            nav_links.map((item, index) => (<li className="nav_item nav_link" key={index}>
              <NavLink to={item.path} className={(navClass) => navClass.isActive ? "nav_active" : ""} style={{ textDecoration: 'none', color: 'var(--primary-color)' }} >{item.display}</NavLink>
            </li>))
          }
        </ul>
      </div>
      {/* <div className="user_icon" onBlur={closeProfileActions}>
        <img src={userIcon} alt="" onClick={toggleProfileActions} />
        <div className={`profile-actions ${profileActionsVisible ? 'show_profileActions' : ''}`} ref={profileActionRef}>
        {currentUser ? (
          <div>
          <span onClick={logout}>Logout</span>
          <div onClick={myprofile}>My Profile</div>
          {currentUser.email === 'admin@gmail.com' && <div onClick={dashboard}>Dashboard</div>}
          </div>
        ) : (
          <div className='d-flex align-items-center justify-content-center flex-column'>
          <Link to='/myprofile' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>My Profile</Link>
          <Link to='/signup' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>SignUp</Link>
          <Link to='/login' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Login</Link>
          <Link to='/dashboard' style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>Dashboard</Link>
          </div>
        )}
      </div> */}
      {/* <div className="mobile_menu">
        <span className="menu_icon" onClick={menuToggle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 7.375H20.25" stroke="#515151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75 13H15.75" stroke="#515151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.75061 18H20.25" stroke="#515151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </span>
      </div> */}
    </div>
  </header>
}

export default Header