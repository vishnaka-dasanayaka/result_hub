import "./register.css";
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';

function Register(){

  return (
    <div className='formContainer'>
        <div className="homeIconBox">
            <a className='homeIconLink' href="http://localhost:3001/"><HomeIcon className='homeIcon'/></a>
        </div>
      <form className='registerForm'>
        <h3 className='registerTopic'>Register Form</h3>

        <div className="inputBox">
            <label htmlFor="">First Name</label>
            <input type="text" className='inputField' placeholder='Enter your first name'/>
        </div>


        <div className="inputBox">
            <label htmlFor="">Last Name</label>
            <input type="text" className='inputField' placeholder='Enter your last name'/>
        </div>

        <div className="inputBox">
            <label htmlFor="">E-mail</label>
            <input type="text" className='inputField' placeholder='Enter your e-mail address'/>
        </div>

        <div className="inputBox">
            <label htmlFor="">Password</label>
            <input type="text" className='inputField' placeholder='Enter your password'/>
        </div>

        <button type="submit" className="registerButton">REGISTER ME</button>

        <div className="alertBox">
            <p className='alert'>Already have an account ? </p>
            <a className='alertLink' href="http://localhost:3001/login">Log In</a>
        </div> 

      </form>
    </div>
  )
}

export default Register;

