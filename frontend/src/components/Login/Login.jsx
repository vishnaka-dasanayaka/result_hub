import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");
  const navigate = useNavigate();

  async function login(event){
    event.preventDefault();
    try 
    {
      await axios.post("http://localhost:3002/user/login",{
        email: email,
        password:password,
      }).then((res) => {
        console.log(res)
        const data = res.data;

        if(data.status === true)
        {
          alert("Login successfull");
          navigate('./admin');
        }
        else
        {
          alert("Login failed");
        }
      },
      (fail) => {
        console.error(fail);
      });  
    } 
    catch (error) 
    {
      alert(error);
    }
  }

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
            <input type="text" className='inputField' id='email' placeholder='Enter your e-mail address'
             value={email} onChange={(event) => {setEmail(event.target.value)}} />
        </div>

        <div className="inputBox">
            <label htmlFor="">Password</label>
            <input type="text" className='inputField' id='password' placeholder='Enter your password'
             value={password} onChange={(event) => {setPassword(event.target.value)}} />
        </div>

        <button type='submit' className="registerButton" onClick={login}>LOGIN AS ADMIN</button>
      </form>
    </div>
    </div>
  )
}

export default Login
