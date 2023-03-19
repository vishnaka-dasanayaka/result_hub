import React from 'react'
import "./hero.css"

export default function Hero() {
  return (
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

    </div>
  )
}
