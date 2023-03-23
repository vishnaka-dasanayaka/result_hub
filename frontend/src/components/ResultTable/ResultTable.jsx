import React from 'react'
import Search from '../Search/Search'
import './resulTable.css'

export default function ResultTable() {
  return (
    <div className=''>
      <div className="searchSection">
        <div className="searchBar">
          <div className="searchBarText">Examination : </div>
          <div className="searchBarInput"><Search/></div>
        </div>

        <div className="searchButton">
          <button>VIEW</button>
        </div>
    
        <div className="resultTable">
          
        </div>
    </div>
    </div>
  )
}
