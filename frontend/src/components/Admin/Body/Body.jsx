import React from 'react';
import "./body.css";
import AddCardIcon from '@mui/icons-material/AddCard';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import DeleteIcon from '@mui/icons-material/Delete';
import StorageIcon from '@mui/icons-material/Storage';
import CreatePopup from '../../Popups/CreatePopup/CreatePopup';
import { useState } from 'react';
import ViewPopup from '../../Popups/ViewPopup/ViewPopup';
import UpdatePopup from '../../Popups/UpdatePopup/UpdatePopup';
import DeletePopup from '../../Popups/DeletePopup/DeletePopup';

export default function Body() {

    const [createButtonPop, setCreateButtonPopup] = useState(false);
    const [viewButtonPop, setViewButtonPopup] = useState(false);
    const [updateButtonPop, setUpdateButtonPopup] = useState(false);
    const [deleteButtonPop, setDeleteButtonPopup] = useState(false);

  return (
    <div>
      <div className="adminBody">

        <div className="textBox">
            <div className="desc">Number of total results on the site</div>
            <div className="count">10</div>
        </div>

        <div className="iconBox">
            <table className='adminBodyTable'>
                <tr>
                    <td onClick={() => setCreateButtonPopup(true)}><AddCardIcon className="icon"/></td>
                    <td onClick={() => setViewButtonPopup(true)}><RemoveRedEyeIcon className="icon"/></td>
                    <td onClick={() => setUpdateButtonPopup(true)}><BrowserUpdatedIcon className="icon"/></td>
                    <td onClick={() => setDeleteButtonPopup(true)}><DeleteIcon className="icon"/></td>
                    <td><a id='dataBaseLink' href="https://cloud.mongodb.com/v2/641bf5d5f4ccef6463977465#/metrics/replicaSet/641bf60329ef9d63413e6918/explorer/result_hub"><StorageIcon className="icon"/></a></td>
                </tr>
                <tr>
                    <td>
                        <button onClick={() => setCreateButtonPopup(true)} className="iconDesc">Add Result</button>
                    </td>
                    <td>
                        <button onClick={() => setViewButtonPopup(true)} className="iconDesc">View Results</button>
                    </td>
                    <td>
                        <button onClick={() => setUpdateButtonPopup(true)} className="iconDesc">Update Result</button>
                    </td>
                    <td>
                        <button onClick={() => setDeleteButtonPopup(true)} className="iconDesc">Delete Result</button>
                    </td>
                    <td>
                        <a href="https://cloud.mongodb.com/v2/641bf5d5f4ccef6463977465#/metrics/replicaSet/641bf60329ef9d63413e6918/explorer/result_hub">
                        <button className="iconDesc">View Database</button>    
                        </a>
                        
                    </td>
                </tr>
            </table>
        </div>
      </div>

      <CreatePopup createTrigger={createButtonPop} setCreateTrigger={setCreateButtonPopup}></CreatePopup>
      <ViewPopup viewTrigger = {viewButtonPop} setViewTrigger={setViewButtonPopup}></ViewPopup>
      <UpdatePopup updateTrigger = {updateButtonPop} setUpdateTrigger={setUpdateButtonPopup}></UpdatePopup>
      <DeletePopup deleteTrigger = {deleteButtonPop} setDeleteTrigger={setDeleteButtonPopup}></DeletePopup>
    </div>
  )
}