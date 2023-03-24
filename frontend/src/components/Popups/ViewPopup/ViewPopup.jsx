import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

function ViewPopup(props) {
  return (props.viewTrigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <br/>
        <div className="form">
            <div className="header">VIEW RESULT</div>
            <div className="mainInputs">
                <h4 className='topic'>Index Number : </h4>
                <input type="text" className="input" />
            </div>
            <br />
            <div className="addButtonBox">
                <button className='addButton'>VIEW</button>
            </div>

            <h4 className='topic'>Results</h4>
            
            <table className="resultTable">
                <tr>
                    <td className='tableDetail'>Combined Mathematics</td>
                    <td className='tableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='tableDetail'>Chemistry</td>
                    <td className='tableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='tableDetail'>Physics</td>
                    <td className='tableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='tableDetail'>General English</td>
                    <td className='tableDetail'><input type="text" /></td>
                </tr>

                <tr>
                    <td className='tableDetail'>Common Test</td>
                    <td className='tableDetail'><input type="text" /></td>
                </tr>
            </table>
            
        </div>
        <button className="close-btn" onClick={() => {props.setViewTrigger(false)}}><CloseIcon/></button>
        { props.children }
      </div>
    </div>
  ): ""
}

export default ViewPopup
