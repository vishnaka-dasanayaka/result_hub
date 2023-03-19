import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "./testing.css"

export default function Testing() {
    
        const isDesktopOrLaptop = useMediaQuery({
            query: '(min-width: 1224px)'
        })

        const isBigScreen = useMediaQuery({
            query: '(min-width: 1824px)'
        })

        const isTabletOrMobile = useMediaQuery({
            query: '(max-width: 810px)'
        })

        const isPorttrait = useMediaQuery({
            query: '(orientation: portrait)'
        })

        const isRetina = useMediaQuery({
            query: '(min-resolution: 2dppx)'
        })
    
    return (
        <div>
            <h1>Device Test</h1>
            {isDesktopOrLaptop && <p>You are a Desktop or Laptop</p>}
            {isBigScreen && <p>You are in a huge screen</p>}
            {isTabletOrMobile && <p>You are a Tablet or Mobile</p>}
            {isPorttrait && <p>You are in portrait</p>}
            {isRetina && <p>You are in retina</p>}
        </div>

    
  )
}
