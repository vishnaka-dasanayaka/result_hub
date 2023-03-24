import React from 'react';
import "./createpopup.css";
import CloseIcon from '@mui/icons-material/Close';


function CreatePopup(props) {
  return (props.createTrigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <br/>
        <div className="form">
            <div className="header">ADD RESULT</div>
            <div className="mainInputs">
                <h4 className='topic'>Index Number : </h4>
                <input type="text" className="input" />
            </div>

            <div className="mainInputs">
                <h4 className='topic'>Exam Name : </h4>
                <input type="text" className="input" />
            </div>

            <h4 className='topic'>Enter Results</h4>
            
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

            <div className="addButtonBox">
                <button className='addButton'>ADD</button>
            </div>
            
        </div>
        <button className="close-btn" onClick={() => {props.setCreateTrigger(false)}}><CloseIcon/></button>
        { props.children }
      </div>
    </div>
  ) : ""
}

export default CreatePopup
