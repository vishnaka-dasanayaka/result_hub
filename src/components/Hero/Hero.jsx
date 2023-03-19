import React from 'react'
import { useMediaQuery } from 'react-responsive';
import "./hero.css";

export default function Hero() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1120px)'
  })

  const isTabletOrMobile = useMediaQuery({
      query: '(max-width: 1119px) and (min-width: 711px)'
  })

  const isPorttrait = useMediaQuery({
      query: '(max-width: 710px)'
  })

  return (
    <div>
    {isDesktopOrLaptop && 
      <div className='heroSection'>

        <div className="heroText">

          <h1 className='heroTopic'>
              <span className="initialLetter">R</span>ESULT
              <span className="initialLetter">  H</span>UB 
          </h1>

          <h2 className='heroTopicDescription'>Grab Your Results</h2>

          <p className='heroCommand'>
              <span className="link"><a href="https://www.google.com/">Log In </a></span>
                  or
              <span className="link"><a href="https://www.google.com/"> Register </a></span>
              to <span className="blue">VIEW RESULTS</span>
          </p>

          <p className="heroPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto et blanditiis laboriosam magnam voluptatibus nobis asperiores sed vel labore doloremque ad id laborum soluta, doloribus tenetur ipsam. Commodi, blanditiis quibusdam!
          </p>
        </div>

        <div className="heroImage">
          <img className='heroPic' src="/images/home.jpg" alt="" />
      </div>
    </div>}

    {isTabletOrMobile && 
    <div>
      <div className="hero-t">
        <h1>hello</h1>
      </div>
    </div>}
    {isPorttrait && 
    <div>
      
    </div>}
    </div>
  )
}
