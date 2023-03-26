import React, {useState} from 'react';
import "./createpopup.css";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";


function CreatePopup(props) {

    const [input, setInput] = useState({
        indexNumber: '',
        examName: '',
        mathResult: '',
        chemResult: '',
        phyResult: '',
        engResult: '',
        testResult: ''
    });

    function handleChange(event){
        const {name,value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        const newResult = {
            indexNumber: input.indexNumber,
            examName: input.examName,
            mathResult: input.mathResult,
            chemResult: input.chemResult,
            phyResult: input.phyResult,
            engResult: input.engResult,
            testResult: input.testResult
        }

        axios.post('http://localhost:3002/result', newResult);
        alert("Succesfully added to the database");
        /*axios.post("http://localhost:3002/result", newResult)
        .then((response) => {
            if (response.status == 200) {
                console.log(response.data);
            }
        })
        .catch((e) => {
            console.log(e.response.data.message);
        });*/
    }

  return (props.createTrigger)?(
    <div className='popup'>
      <div className="popup-inner">
        <br/>
        <div className="form">
            <div className="header">ADD RESULT</div>
            <div className="mainInputs">
                <h4 className='topic'>Index Number : </h4>
                <input onChange={handleChange} name='indexNumber' value={input.indexNumber} autoComplete='off' placeholder='index number' type="text" className="input" />
            </div>

            <div className="mainInputs">
                <h4 className='topic'>Exam Name : </h4>
                <input onChange={handleChange} name='examName' value={input.examName} autoComplete='off' placeholder='exam name' type="text" className="input" />
            </div>

            <h4 className='topic'>Enter Results</h4>
            
            <table className="resultTable">
                <tr>
                    <td className='tableDetail'>Combined Mathematics</td>
                    <td className='tableDetail'>
                        <input onChange={handleChange} name='mathResult' value={input.mathResult} autoComplete='off' type="text" />
                    </td>
                </tr>

                <tr>
                    <td className='tableDetail'>Chemistry</td>
                    <td className='tableDetail'>
                        <input onChange={handleChange} name='chemResult' value={input.chemResult} autoComplete='off' type="text" />
                    </td>
                </tr>

                <tr>
                    <td className='tableDetail'>Physics</td>
                    <td className='tableDetail'>
                        <input onChange={handleChange} name='phyResult' value={input.phyResult} autoComplete='off' type="text" />
                    </td>
                </tr>

                <tr>
                    <td className='tableDetail'>General English</td>
                    <td className='tableDetail'>
                        <input onChange={handleChange} name='engResult' value={input.engResult} autoComplete='off' type="text" />
                    </td>
                </tr>

                <tr>
                    <td className='tableDetail'>Common Test</td>
                    <td className='tableDetail'>
                        <input onChange={handleChange} name='testResult' value={input.testResult} autoComplete='off' type="text" />
                    </td>
                </tr>
            </table>

            <div className="addButtonBox">
                <button onClick={handleClick} className='addButton'>ADD</button>
            </div>
            
        </div>
        <button className="close-btn" onClick={() => {props.setCreateTrigger(false)}}><CloseIcon/></button>
        { props.children }
      </div>
    </div>
  ) : ""
}

export default CreatePopup
