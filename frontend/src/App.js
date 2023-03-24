import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Axios from "axios";
import About from "./pages/About/About";
import ExamCalander from "./pages/ExamCalander/ExamCalander";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin/Admin";

function App() {

  const [data,setData] = useState("");

  const getData = async() => {
    const response = await Axios.get("http://localhost:3002/getData");
    setData(response.data);
  }

  useEffect(() => {
    getData()
  },[]);

  return (
    
    /*<div>{data}</div>  */
    <BrowserRouter>
    
      <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="examcalander" element={<ExamCalander />} />
          <Route path="result" element={<Result />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);