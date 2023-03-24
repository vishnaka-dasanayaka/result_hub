import React from 'react';
import "./navbar.css";

export default function NavBar() {
  return (
    <div>
        <div className="navBar">

            <div className="navBarLogoBox">
                <img src="/images/logo.png" alt="" className="navBarLogo" />
            </div>

            <div className="navBarTopicBox">
                <h1 className="navBarTopic">ADMIN</h1>
            </div>

            <div className="navBarButtonBox">
                <button className="navBarButton">Log Out</button>
            </div>
        </div>
    </div>
  )
}
