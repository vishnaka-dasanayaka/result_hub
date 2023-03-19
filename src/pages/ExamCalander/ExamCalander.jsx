import React from 'react'
import ExamCalanderBody from '../../components/ExamCalanderBody/ExamCalanderBody'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/Navigation/NavBar'

export default function ExamCalander() {
  return (
    <div>
      <NavBar/>
      <ExamCalanderBody/>
      <Footer/>
    </div>
  )
}
