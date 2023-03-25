import React from 'react'
import Search from '../Search/Search'
import './resulTable.css'

export default function ResultTable() {
  return (
    <div className=''>
      <br />

      <div className="resultPage">

        <div className="headSectionBox">
          <label htmlFor="" className="headText">Enter Your Index Number </label>
          <input type="text" placeholder='Enter your index number' className="headInput" />
          <button className="showButton">SHOW RESULTS</button>
        </div>

        <div className="showResultTableBox">
          <table className="showResultTable">
            <thead>
              <tr>
                <td>SUBJECT</td>
                <td>RESULT</td>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Combined Mathematics</td>
                <td></td>
              </tr>

              <tr>
                <td>Chemistry</td>
                <td></td>
              </tr>

              <tr>
                <td>Physics</td>
                <td></td>
              </tr>

              <tr>
                <td>General English</td>
                <td></td>
              </tr>

              <tr>
                <td>Common Test</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

      <br />
    </div>
  )
}
