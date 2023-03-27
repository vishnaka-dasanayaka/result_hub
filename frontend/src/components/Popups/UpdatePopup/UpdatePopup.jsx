import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import "./updatepopup.css";
import axios from 'axios';

function UpdatePopup(props) {

    const [input, setInput] = useState({
        indexNumber: "",
      });
    
      const [results, setResults] = useState(null);

      const [updatedResults, setUpdate] = useState(null);
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setInput((prevInput) => {
          return {
            ...prevInput,
            [name]: value,
          };
        });
      }
    
      function handleClick(event) {
        event.preventDefault();
        const indexNumber = input.indexNumber;
    
        axios
          .get("http://localhost:3002/read?indexNo=" + indexNumber)
          .then((res) => {
            console.log(res);
            setResults(res.data);
          })
          .catch((err) => console.log(err));

          setUpdate(results);
      }

      const updateChange = (e) => {
        const {name, value} = e.target;

        setUpdate((prev) => {
            return {
                ...prev,
                [name]:value,
            };
        });
      };

      const updateResult = () => {
          console.log(updatedResults);
        
        axios
        .put(`/update/${results._id}`, updatedResults)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        
        alert("done");
        window.location.reload();
      }

  return (props.updateTrigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <br/>
        <div className="form">
            <div className="header">UPDATE RESULT</div>
            <div className="mainInputs">
                <h4 className='topic'>Index Number : </h4>
                <input
              className="input"
              onChange={handleChange}
              name="indexNumber"
              value={input.indexNumber}
              autoComplete="off"
              type="text"
            />
            </div>
            <br />
             
            
            <button onClick={handleClick} className="addButton">
              VIEW
            </button>

            <h4 className='topic'>Results</h4>
            
            {results && <table className="updateTable">
                <tr>
                    <td className='updateTableDetail'>Subject</td>
                    <td className='updateTableDetail'>Existing</td>
                    <td className='updateTableDetail'>Updated</td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Combined Mathematics</td>
                    <td className='updateTableDetail'><label className="newLabel" htmlFor="">{results.mathResult}</label></td>
                    <td className='updateTableDetail'><input name='res1' value={results.res1} onChange={updateChange} type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Chemistry</td>
                    <td className='updateTableDetail'><label className="newLabel" htmlFor="">{results.chemResult}</label></td>
                    <td className='updateTableDetail'><input name='res2' value={results.res2} onChange={updateChange} type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Physics</td>
                    <td className='updateTableDetail'><label className="newLabel" htmlFor="">{results.phyResult}</label></td>
                    <td className='updateTableDetail'><input name='res3' value={results.res3} onChange={updateChange} type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>General English</td>
                    <td className='updateTableDetail'><label className="newLabel" htmlFor="">{results.engResult}</label></td>
                    <td className='updateTableDetail'><input name='res4' value={results.res4} onChange={updateChange} type="text" /></td>
                </tr>

                <tr>
                    <td className='updateTableDetail'>Common Test</td>
                    <td className='updateTableDetail'><label className="newLabel" htmlFor="">{results.testResult}</label></td>
                    <td className='updateTableDetail'><input name='res5' value={results.res5} onChange={updateChange} type="text" /></td>
                </tr>
            </table> }
            <br />
            <div className="addButtonBox">
            <button onClick={updateResult} className="addButton">
              UPDATE
            </button>
            </div>
            
        </div>
        <button className="close-btn" onClick={() => {props.setUpdateTrigger(false)}}><CloseIcon/></button>
        { props.children }
      </div>
    </div>
  ):""
}

export default UpdatePopup
