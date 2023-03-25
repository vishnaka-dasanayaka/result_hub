import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

function Login() {
  return (
    <div>
      <div className='formContainer'>
        <div className="homeIconBox">
            <a className='homeIconLink' href="http://localhost:3001/"><HomeIcon className='homeIcon'/></a>
        </div>
      <form className='registerForm' action="">
        <h3 className='registerTopic'>Login</h3>

        <div className="inputBox">
            <label htmlFor="">E-mail</label>
            <input type="text" className='inputField' placeholder='Enter your e-mail address'/>
        </div>

        <div className="inputBox">
            <label htmlFor="">Password</label>
            <input type="text" className='inputField' placeholder='Enter your password'/>
        </div>

        <button className="registerButton">LOGIN AS ADMIN</button>
      </form>
    </div>
    </div>
  )
}

export default Login
