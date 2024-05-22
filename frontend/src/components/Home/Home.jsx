import React from 'react'
import p3 from '../../Assets/Images/p3.jpg'
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${p3})` }} >
        <p> HealthNest : Book Apointments Easily </p>
        <h2 className="mt-2 mb-4 banner-title"><strong> HealthNest </strong> </h2>
      </div>
    </>
  )
}

export default Home