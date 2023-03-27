import React, {useState} from 'react';
import axios from 'axios';
import './resulTable.css'

export default function ResultTable() {

  const [input, setInput] = useState({
    indexNumber: ''
});

const [results, setResults] = useState(null);


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
    const indexNumber = input.indexNumber;
    

    axios.get('http://localhost:3002/read?indexNo=' + indexNumber)
        .then((res) => {
          console.log(res);
          setResults(res.data);
          
        })
        .catch((err) => console.log(err));
}

  return (
    <div className=''>
      <br />

      <div className="resultPage">

        <div className="headSectionBox">
          <label htmlFor="" className="headText">Enter Your Index Number </label>

          <input
              className="headInput"
              onChange={handleChange} name="indexNumber"
              value={input.indexNumber} autoComplete="off"
              type="text"
              placeholder='Enter your index number'
            />

        <button onClick={handleClick} className='showButton'>SHOW RESULTS</button>
        </div>

        <div className="showResultTableBox">
          {results && <table className="showResultTable">
            <thead>
              <tr>
                <td>SUBJECT</td>
                <td>RESULT</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Combined Mathematics</td>
                <td><label htmlFor="">{results.mathResult}</label></td>
              </tr>

              <tr>
                <td>Chemistry</td>
                <td><label htmlFor="">{results.chemResult}</label></td>
              </tr>

              <tr>
                <td>Physics</td>
                <td><label htmlFor="">{results.phyResult}</label></td>
              </tr>

              <tr>
                <td>General English</td>
                <td><label htmlFor="">{results.engResult}</label></td>
              </tr>

              <tr>
                <td>Common Test</td>
                <td><label htmlFor="">{results.testResult}</label></td>
              </tr>
            </tbody>
          </table>}
        </div>

      </div>

      <br />
    </div>
  )
}
