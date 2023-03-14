import React from 'react'
import "./navbar.css"

export default function NavBar() {
  return (
    <div className='navBarBox'>

      <div className="navBarLeft">

        <div className="resultHubLogo">
            <img src="/images/logo.png" alt="Web Site Logo" className="logo" />
        </div>

      </div>

      <div className="navBarCenter">

        <div className="navBarLinks">

            <span className="navBarLink">Home</span>
            <span className="navBarLink">Exam Calander</span>
            <span className="navBarLink">About Us</span>

        </div>

      </div>

      <div className="navBarRight">

        <div className="navBarButtons">

            <button className="navBarButton">Log In</button>
            <button className="navBarButton">Register</button>

        </div>

      </div>

    </div>
  )
}
