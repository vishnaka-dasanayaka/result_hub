import React from 'react';
import "./body.css";
import AddCardIcon from '@mui/icons-material/AddCard';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DeleteIcon from '@mui/icons-material/Delete';
import StorageIcon from '@mui/icons-material/Storage';
import CreatePopup from '../../Popups/CreatePopup/CreatePopup';
import { useState } from 'react';

export default function Body() {

    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div className="adminBody">

        <div className="textBox">
            <div className="desc">Number of total results on the site</div>
            <div className="count">1245</div>
        </div>

        <div className="iconBox">
            <table className='adminBodyTable'>
                <tr>
                    <td onClick={() => setButtonPopup(true)}><AddCardIcon className="icon"/></td>
                    <td><RemoveRedEyeIcon className="icon"/></td>
                    <td><BrowserUpdatedIcon className="icon"/></td>
                    <td><DeleteIcon className="icon"/></td>
                    <td><StorageIcon className="icon"/></td>
                </tr>
                <tr>
                    <td>
                        <button onClick={() => setButtonPopup(true)} className="iconDesc">Add Result</button>
                    </td>
                    <td>
                        <button className="iconDesc">View Results</button>
                    </td>
                    <td>
                        <button className="iconDesc">Update Result</button>
                    </td>
                    <td>
                        <button className="iconDesc">Delete Result</button>
                    </td>
                    <td>
                        <button className="iconDesc">View Database</button>
                    </td>
                </tr>
            </table>
        </div>
      </div>

      <CreatePopup trigger={buttonPopup} setTrigger={setButtonPopup}></CreatePopup>
    </div>
  )
}
//buttonPopup