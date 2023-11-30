import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { getCurrentUserDetail } from './auth';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const SignUpForm = () => {
  const { jobId } = useParams();
  const currentUser = getCurrentUserDetail();
   const [email, setEmail] = useState(currentUser?.email || '');
 
  const [file, setFile] = useState(null); 
  const [userData,setUserData]=useState({
    city:"",
    contact:"",
  
  })
  
  

  
  const handleSubmit = (e) => {
    e.preventDefault();
  
     const formData = new FormData();
  
    formData.append('userData', userData);
    formData.append('file', file);
     
    axios.post(`/home/job/apply/${jobId}`, formData)
      .then((resp) => {
        if (resp === 'User already exists with the same email id!') {
          toast.error(resp);
          

        } else {
          toast.success('You are registered successfully!');
          setEmail('');
          setContact('');
          setCity('');
          setCV(null);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('An error occurred while submitting the form.');
      });
  };
  

  return (
    <div className="signup-body" style={{ padding: '80px' }}>
      <Form style={{ backgroundColor: 'blue' }} onSubmit={handleSubmit}>
        <Row className="my-3 mx-2">
          <Col md={6}>
            <FormGroup className="my-4 mx-3">
              <Input
                id="Email"
                name="Email"
                placeholder="Enter Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="my-4 mx-3">
              <Input
                id="City"
                name="City"
                placeholder="Enter City"
                type="text"
                value={userData.city}
                onChange={(e) => setUserData(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="my-3 mx-2">
          <Col md={6}>
            <FormGroup className="my-4 mx-3">
              <Input
                id="contact"
                name="contact"
                placeholder="Enter Contact"
                type="text"
                value={userData.contact}
                onChange={(e) => setUserData(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="my-4 mx-3">
              <Input
                id="file"
                name="zip"
                placeholder="Upload file Here"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <div className="my-4 mx-3" style={{ textAlign: 'center' }}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpForm; 


