import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "./updatepopup.css";

function UpdatePopup(props) {
  return (props.updateTrigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <br/>
        <div className="form">
            <div className="header">UPDATE RESULT</div>
            <div className="mainInputs">
                <h4 className='topic'>Index Number : </h4>
                <input type="text" className="input" />
            </div>
            <br />
             
            <h4 className='topic'>Results</h4>
            
            <table className="updateTable">
                <tr>
                    <td className='updateTableDetail'>Subject</td>
                    <td className='updateTableDetail'>Existing</td>
                    <td className='updateTableDetail'>Updated</td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Combined Mathematics</td>
                    <td className='updateTableDetail'><input type="text" /></td>
                    <td className='updateTableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Chemistry</td>
                    <td className='updateTableDetail'><input type="text" /></td>
                    <td className='updateTableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Physics</td>
                    <td className='updateTableDetail'><input type="text" /></td>
                    <td className='updateTableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>General English</td>
                    <td className='updateTableDetail'><input type="text" /></td>
                    <td className='updateTableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Common Test</td>
                    <td className='updateTableDetail'><input type="text" /></td>
                    <td className='updateTableDetail'><input type="text" /></td>
                </tr>
            </table>
            <br />
            <div className="addButtonBox">
                <button className='addButton'>UPDATE</button>
            </div>
            
        </div>
        <button className="close-btn" onClick={() => {props.setUpdateTrigger(false)}}><CloseIcon/></button>
        { props.children }
      </div>
    </div>
  ):""
}

export default UpdatePopup
