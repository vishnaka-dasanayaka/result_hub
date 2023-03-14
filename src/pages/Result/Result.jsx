import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Navigation/NavBar'
import ResultTable from '../../components/ResultTable/ResultTable'
import './result.css'

export default function Result() {
  return (
    <div>
      <NavBar/>
      
      <ResultTable/>

      <Footer/>
    </div>
  )
}
