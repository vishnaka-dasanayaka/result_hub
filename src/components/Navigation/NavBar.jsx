import React from 'react';
import "./navbar.css";
import { useMediaQuery } from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 811px)'
  })

  const isTabletOrMobile = useMediaQuery({
      query: '(max-width: 810px) and (min-width: 711px)'
  })

  const isPorttrait = useMediaQuery({
      query: '(max-width: 710px)'
  })

return (
<div>
    {isDesktopOrLaptop && 
      <div>
        <div className="navBar-l">
          <img src="/images/logo.png" alt="" className="logo-l" />

          <div className="navBarMiddle-l">
            <a href="#" className="navBarItem-l">Home</a>
            <a href="#" className="navBarItem-l">Exam Calender</a>
            <a href="#" className="navBarItem-l">About Us</a>
          </div>

          <div className="navBarRight-l">
            <button className="navBarButton-l">Log In</button>
            <button className="navBarButton-l">Register</button>
          </div>
        </div>
      </div>
    }
    {isTabletOrMobile && 
      <div>
        <div className="navBar-l">
          <img src="/images/logo.png" alt="" className="logo-t" />

          <div className="navBarMiddle-l">
            <a href="#" className="navBarItem-t">Home</a>
            <a href="#" className="navBarItem-t">Exam Calender</a>
            <a href="#" className="navBarItem-t">About Us</a>
          </div>

          <div className="navBarRight-l">
            <button className="navBarButton-t">Log In</button>
            <button className="navBarButton-t">Register</button>
          </div>
        </div>
      </div>
    }
    {isPorttrait && 
    <div>
      <div className="navBar-l">
        <img src="/images/logo.png" alt="" className="logo-s" />
        <div className="toggleMenuIcon">
          <MenuIcon className='menuIcon'/>
        </div>
      </div>
  </div>}
</div>
)
}
