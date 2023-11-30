 import React, { useState } from 'react';
import { login } from '../services/user-Service';
import { toast } from 'react-toastify';
import { doLogin } from './auth';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import { RiRotateLockFill } from 'react-icons/ri';
import { FaUserCircle,FaRegUserCircle } from "react-icons/fa";
const LoginForm = () => {
  const navigate = useNavigate();
 const id=createContext()
  const [loginDetail, setLoginDetail] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({ ...loginDetail, [field]: actualValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(loginDetail)
      .then((data) => {
       doLogin(data, () => {
            if (data.roleId === 1) {
            navigate('/user/userdashboard');
          }else  if(data.roleId === 2) {
            navigate('user/companydashboard');
          
          } 
          
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div className='bodyform'>
      <div className="login-form"
       style={{ borderRadius:"25px"}}>
        <div style={{ fontSize:"100px" , textAlign:'center', color:'white', marginTop:"-10px"}}>       <FaUserCircle />
</div >
      
        <h2>Login</h2>
         <form onSubmit={handleSubmit}>
          <div className="form-group">
             

            <label htmlFor="email">Email:</label>
            <br />
            <div className="form-group" style={{ position: 'relative' }}>
            <input
              type="email"
              id="email"
              style={{
                paddingLeft: '40px',
              }}
              placeholder='Enter Email Address'
              value={loginDetail.email}
              onChange={(e) => handleChange(e, 'email')}
              required
            />
            <FaRegUserCircle
              style={{
                fontSize:"20px",
                color:"#712856",
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <br />
            <div className="form-group" style={{ position: 'relative' }}>
            <input
              type="password"
              id="password"
              style={{
                paddingLeft: '40px',
              }}
              placeholder='Enter Password'
              value={loginDetail.password}
              onChange={(e) => handleChange(e, 'password')}
              required
            />
              <RiRotateLockFill
              style={{
                fontSize:"25px",
                color:"#712856",
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
              }}
            />
          </div>
          </div>
          <button type="submit" style={{ borderRadius:'5px' ,backgroundColor:"#712856"}}>Login</button>
        <br/>
        <p style={{ display:'flex', color: "white" , }}>    <a className="nav-link" href=  " /signup" style={{ color: "white" , marginLeft:"15px"}}>
        Create Account
                  </a> 
                  </p>
        </form> 
      
      </div>
    </div>
  );
};

export default LoginForm; 










