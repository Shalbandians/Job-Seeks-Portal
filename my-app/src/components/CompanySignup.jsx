import React, { useState } from 'react';
import { page } from '../services/user-Service';
import { toast } from 'react-toastify';

const RegistrationForm = () => {

  const [data , setData]= useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    })
    const handleChange=(event,property)=>{
      setData({...data, [property]: event.target.value})
    }



 
    const handleSubmit=(e)=>{
      e.preventDefault();
      page(data).then((resp)=>{

        if (resp === "User already exist with same email id!") {
          toast.error(resp);
        } else {
        toast.success("You Are Register Successfully!!")
        setData({
          firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName:""
        });
     } }).catch((error)=>{
        console.log(error)
      })
    }

  return (
    <div className='rbody'>
    

    <div className="registration-form">
      <h2>Company </h2>
      <br/>
      <form onSubmit={handleSubmit}>
       <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <br/>
          <input
            type="text"
            id="firstName"
            className='input'
            placeholder='Enter First Name'      
            value={data.firstName}
            onChange={(e)=>handleChange(e, 'firstName' )}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <br/>
          <input
          className='input'
            type="text"
            id="lastName"
            placeholder='Enter lastName'

            value={data.lastName}
            onChange={(e)=>handleChange(e, 'lastName' )}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br/>
          <input
            type="email"
            id="email"
            className='input'
            placeholder='Enter email'

            value={setData.email}
            onChange={(e)=>handleChange(e,'email')}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password</label>
          <br/>
          <input
          
            type="password"
            id="password"
            className='input'
            placeholder='Enter password'

            value={data.password}
            onChange={(e)=>handleChange(e, 'password')}
            required
          />
         </div>   
         <div className="form-group">
          <label htmlFor="password" >Company Name</label>
          <br/>
          <input
          
            type="companyName"
            id="companyName"
            className='input'
            placeholder='Enter Company Name'

            value={data.companyName}
            onChange={(e)=>handleChange(e, 'companyName')}
          
          />
         </div>   
        <br/>
       
         <button  
        
        type="submit" style={{ fontSize:"20px",backgroundColor:"#712856"}} >Register</button> 
        <br/>
        <p style={{ display:'flex', color: "white" , }}> 
         Already User  <a className="nav-link" href=  " /" style={{ color: "white" , marginLeft:"15px"}}>
                   LogIn
                  </a> 
                  </p>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
