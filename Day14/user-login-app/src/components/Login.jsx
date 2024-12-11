import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
const Login = ({regLogin}) => {
    const [email, setEmail] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();

    const handlelogin = (e) =>{
        e.preventDefault();
        if(email == regLogin.email && password == regLogin.password){
            alert("Login Success");
            navigate("/dashboard");

        }else{
            alert("Invalid credentials");
        }
    };
  return (
    <div>
          <form>
        
        <div className="form-group">
          <label for="Email1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email1"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label for="Password1">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      
    </div>
  )
}

export default Login
