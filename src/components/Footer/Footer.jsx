import React from 'react'
//import "./footer.css"
export default function Footer() {
  return (
    <div className='footer'>

        <div className="container">
            <div className="footerLeft">

                <span className="footerTopic">Contact Us</span>

                <table className="footerTable">
                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' >43/2, Hapugala,Galle</td>
                    </tr>

                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' >43/2, Hapugala,Galle</td>
                    </tr>

                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' >43/2, Hapugala,Galle</td>
                    </tr>

                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' >43/2, Hapugala,Galle</td>
                    </tr>

                </table>

            </div>
        </div>

        <div className="container">
            <div className="footerCenter">

                <span className="footerTopic">Follow Us</span>

                <table className="footerTable">
                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' ><button footerCenterButton>@resulthub</button></td>
                    </tr>

                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' ><button footerCenterButton>@resulthub</button></td>
                    </tr>

                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' ><button footerCenterButton>@resulthub</button></td>
                    </tr>

                    <tr>
                        <td className='footerTableData' ><img className='footerIcon' src="/images/logo.png" alt="" /></td>
                        <td className='footerTableData' ><button footerCenterButton>@resulthub</button></td>
                    </tr>

                </table>

            </div>
        </div>

        <div className="container">
            <div className="footerRight">
                <li className="footerTopic list">Home</li>
                <li className="footerTopic list">Exam Calander</li>
                <li className="footerTopic list">About Us</li>
                <li className="footerTopic list">Log In</li>
                <li className="footerTopic list">Register</li>
            </div>
        </div>

    </div>
  )
}
