import "./register.css";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const newUser = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password
    };

    axios.post("http://localhost:3002/user", newUser);
    alert("User Succesfully added to the database");
    /*axios.post("http://localhost:3002/result", newResult)
    .then((response) => {
        if (response.status == 200) {
            console.log(response.data);
        }
    })
    .catch((e) => {
        console.log(e.response.data.message);
    });*/
  }

  return (
    <div className="formContainer">
      <div className="homeIconBox">
        <a className="homeIconLink" href="http://localhost:3001/">
          <HomeIcon className="homeIcon" />
        </a>
      </div>
      <form className="registerForm">
        <h3 className="registerTopic">Register Form</h3>

        <div className="inputBox">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="inputField"
            placeholder="Enter your first name"
            onChange={handleChange}
            name='firstName'
            value={input.firstName}
            autoComplete='off'
          />
        </div>

        <div className="inputBox">
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="inputField"
            placeholder="Enter your last name"
            onChange={handleChange}
            name='lastName'
            value={input.lastName}
            autoComplete='off'
          />
        </div>

        <div className="inputBox">
          <label htmlFor="">E-mail</label>
          <input
            type="email"
            className="inputField"
            placeholder="Enter your email"
            onChange={handleChange}
            name='email'
            value={input.email}
            autoComplete='off'
          />
        </div>

        <div className="inputBox">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="inputField"
            placeholder="Enter your password"
            onChange={handleChange}
            name='password'
            value={input.password}
            autoComplete='off'
          />
        </div>
        <button type="submit" className="registerButton" onClick={handleClick}>
          REGISTER ME
        </button>

        <div className="alertBox">
          <p className="alert">Already have an account ? </p>
          <a className="alertLink" href="http://localhost:3001/login">
            Log In
          </a>
        </div>
      </form>
    </div>
  );
}

export default Register;
