import React from 'react';
import "./footer.css";
import { useMediaQuery } from 'react-responsive';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FaxIcon from '@mui/icons-material/Fax';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
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
        <div className="footer-l">
          <div className="footerBox-l">
            <h2 className="footerBoxTitle-l">Contact Us</h2>

            <table>
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><HomeIcon/></td>
                <td className='tableDat-l'>47/2, Hapugala, Galle</td>
              </tr>
              
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><AlternateEmailIcon/></td>
                <td className='tableDat-l'>resulthub@gmail.com</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><FaxIcon/></td>
                <td className='tableDat-l'>+94 81 2 222 222</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><LocalPhoneIcon/></td>
                <td className='tableDat-l'>+94 81 3 333 333</td>
              </tr>
            </table>
          </div>

          <div className="footerBox-l">
            <h2 className="footerBoxTitle-l">Follow Us</h2>

            <table>
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><FacebookIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>
              
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><InstagramIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><PinterestIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><TwitterIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>
            </table>
          </div>

          <div className="footerBox-l">
            <h2 className="footerBoxTitle-l">Home</h2>
            <h2 className="footerBoxTitle-l">Exam Calander</h2>
            <h2 className="footerBoxTitle-l">About Us</h2>
            <h2 className="footerBoxTitle-l">View Result</h2>
            <h2 className="footerBoxTitle-l">Login as Admin</h2>
          </div>

        </div>
      </div>
    }
    {isTabletOrMobile && 
    <div>
      <div className="footer-l">
          <div className="footerBox-t">
            <h2 className="footerBoxTitle-l">Contact Us</h2>

            <table>
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><HomeIcon/></td>
                <td className='tableDat-l'>47/2, Hapugala, Galle</td>
              </tr>
              
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><AlternateEmailIcon/></td>
                <td className='tableDat-l'>resulthub@gmail.com</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><FaxIcon/></td>
                <td className='tableDat-l'>+94 81 2 222 222</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><LocalPhoneIcon/></td>
                <td className='tableDat-l'>+94 81 3 333 333</td>
              </tr>
            </table>
          </div>

          <div className="footerBox-t">
            <h2 className="footerBoxTitle-l">Follow Us</h2>

            <table>
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><FacebookIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>
              
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><InstagramIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><PinterestIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><TwitterIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>
            </table>
          </div>
        </div>  
    </div>}
    {isPorttrait && 
    <div>
      <div className="footer-s">
          <div className="footerBox-s">
            <h2 className="footerBoxTitle-l">Contact Us</h2>

            <table>
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><HomeIcon/></td>
                <td className='tableDat-l'>47/2, Hapugala, Galle</td>
              </tr>
              
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><AlternateEmailIcon/></td>
                <td className='tableDat-l'>resulthub@gmail.com</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><FaxIcon/></td>
                <td className='tableDat-l'>+94 81 2 222 222</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><LocalPhoneIcon/></td>
                <td className='tableDat-l'>+94 81 3 333 333</td>
              </tr>
            </table>
          </div>

          <div className="footerBox-s">
            <h2 className="footerBoxTitle-l">Follow Us</h2>

            <table>
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><FacebookIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>
              
              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><InstagramIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><PinterestIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>

              <tr className='tableRow-l'>
                <td className='tableDataIcon-l tableDat-l'><TwitterIcon/></td>
                <td className='tableDat-l'>@result_hub_company</td>
              </tr>
            </table>
          </div>

          <div className="footerBox-s">
            <h2 className="footerBoxTitle-l">Home</h2>
            <h2 className="footerBoxTitle-l">Exam Calander</h2>
            <h2 className="footerBoxTitle-l">About Us</h2>
            <h2 className="footerBoxTitle-l">View Results</h2>
            <h2 className="footerBoxTitle-l">Login as Admin</h2>
          </div>

        </div>
    </div>}
</div>
)
}
