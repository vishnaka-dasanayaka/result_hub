import React from "react";
import  ReactDOM  from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import ExamCalander from "./pages/ExamCalander/ExamCalander";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";
import Admin from "./pages/Admin/Admin";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {

  return (
    
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="examcalander" element={<ExamCalander />} />
          <Route path="result" element={<Result />} />
          <Route path="admin" element={<Admin />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);