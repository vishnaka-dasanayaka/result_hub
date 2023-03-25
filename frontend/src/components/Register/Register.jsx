import "./register.css";
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import axios from "axios";
import { useState } from "react";

function Register(){

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event){
    event.preventDefault();
    try {
      await axios.post('http://localhost:3002/user/register',{
        firstname: fname,
        lastname: lname,
        email: email,
        password:password,
      });
      alert("User Registration successfully");
    } catch (error) {
      alert(error);
    }
  }


  return (
    <div className='formContainer'>
        <div className="homeIconBox">
            <a className='homeIconLink' href="http://localhost:3001/"><HomeIcon className='homeIcon'/></a>
        </div>
      <form className='registerForm'>
        <h3 className='registerTopic'>Register Form</h3>

        <div className="inputBox">
            <label htmlFor="">First Name</label>
            <input type="text" className='inputField' id="fname" placeholder='Enter your first name'
             value={fname} onChange={(event) => {setFName(event.target.value);}} />
        </div>


        <div className="inputBox">
            <label htmlFor="">Last Name</label>
            <input type="text" className='inputField' id="lname" placeholder='Enter your last name'
             value={lname} onChange={(event) => {setLName(event.target.value);}} />
        </div>

        <div className="inputBox">
            <label htmlFor="">E-mail</label>
            <input type="email" className='inputField' id="email" placeholder='Enter your e-mail address'
             value={email} onChange={(event) => {setEmail(event.target.value);}} />
        </div>

        <div className="inputBox">
            <label htmlFor="">Password</label>
            <input type="password" className='inputField' id="password" placeholder='Enter your password'
             value={password} onChange={(event) => {setPassword(event.target.value);}} />
        </div>

        <button type="submit" className="registerButton" onClick={save}>REGISTER ME</button>

        <div className="alertBox">
            <p className='alert'>Already have an account ? </p>
            <a className='alertLink' href="http://localhost:3001/login">Log In</a>
        </div> 

      </form>
    </div>
  )
}

export default Register;

