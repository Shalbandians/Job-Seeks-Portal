import React, { useState, useEffect} from 'react'
import {  summary} from '../../services/user-Service';
import { toast } from 'react-toastify';

import { getCurrentUserDetail } from '../auth';
import { Interview } from '../../services/user-Service';
import{
 Form,
 Row,
 Col,
 FormGroup, 

 Table,
 Input,
 Button,
 
} from 'reactstrap';
import { FiPlus } from 'react-icons/fi'
import { HiUserGroup } from 'react-icons/hi';
import { doLogout } from '../auth';
import { useNavigate } from "react-router-dom";

function Company() {
  const navigate = useNavigate();

  const[style,setStyle]=useState("sb-nav-fixed")
  const changeStyle=()=>
  {
     if(style==="sb-nav-fixed" )
 {
     setStyle("sb-nav-fixed sb-sidenav-toggled")
 } else{
     setStyle("sb-nav-fixed")
 }
 } ;

 const [data, setData] = useState([]);
const [date, setDate]= useState('')
 const [title, setTitle] = useState('');
 const [companyName, setCompanyName] = useState('');
 const [savedData, setSavedData] = useState([]);
 const [user, setUser] = useState(undefined);

 useEffect(() => {
  setUser(getCurrentUserDetail());
}, []) ; 
 

 const handleSubmit = (e) => {
   e.preventDefault();
   const formData = {
   userId:user.id,
    date: date,
    title: title,  
    companyName: companyName,
        
   };

   setSavedData([...savedData, formData]);
   Interview(formData)
     .then((resp) => {
     
       toast(resp);

       
       setDate('');
       setTitle('');
       setCompanyName('');
     })
     .catch((error) => {
       console.log(error);
       console.log("Error log");
     });
 };


 
useEffect(() => {
  setUser(getCurrentUserDetail());
}, []);

useEffect(() => {
  if (user) {
    const id = user.id;
    summary({ id })
      .then((resp) => {
          setData(resp);
      

      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [user]);

  
const logout=()=>{
  doLogout(()=>{
   navigate('/')
  })
}

  return (
    <div>


    <body class={style}>
    <nav class="sb-topnav navbar navbar-dark bg-dark">
                    <a class="navbar-brand ps-3" href="/user/userdashboard">Jobs</a>
                    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={changeStyle} href="#!"><i class="fas fa-bars"></i></button>
                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div class="input-group">

                        </div>
                    </form>
                    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li class="nav-item dropdown">
                        <a class="nav-link" /* href="/" */ onClick={logout}>LogOut</a>


                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div class="sb-sidenav-menu">
                                <div class="nav">
                                    <div class="sb-sidenav-menu-heading">Core</div>
                                    <a class="nav-link" href="/user/userdashboard">
                                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                        Dashboard
                                    </a>
                                    <div class="sb-sidenav-menu-heading">Managment</div>
                                    
                                     <a
              className="nav-link collapsed"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false" 
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <HiUserGroup />
              </div>
              Interview              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
                                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="/user/userdashboard/createinterview">Create Interviews</a>
                                            <a class="nav-link" href="/user/userdashboard/addquestion">Add Question</a>
                                            <a className="nav-link" href="/user/userdashboard/addround">
                     Add Round
                      </a>
                      <a className="nav-link" href="/user/userdashboard/invite">
                   My Invite
                      </a>
                                  </nav>
                                    </div>
                                    <div className="sb-sidenav-menu-heading">Job Details</div>
                  <a className="nav-link" href=  "/user/userdashboard/skill">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                   Skills
                  </a>
                  <a className="nav-link" href="/user/userdashboard/viewskill">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                  View Skill
                  </a>
                  <a className="nav-link" href="/user/userdashboard/feedback">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                  Feedback
                  </a>
                                  
                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                    
            <a class="dropdown-item"onClick={logout}>Logout</a>
                            </div>
                        </nav>
                    </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <ol class="breadcrumb mb-4">
                      </ol>
                                 
                       
                                    
      


                       
                       
                          
                                     <div class="card-body " style={{
                                  
                                     display: 'flex',
                                   }}>
      

 <Form onSubmit={handleSubmit} className='card-body mx-5 px-2' style={{ backgroundColor: '#FBFBFB', textAlign: "center" }}>


                  <Row style={{ marginTop: "15px" }}>
                    <Col md={3}>
                      <FormGroup>
                        <Input
                          style={{ width: "200px" }}
                          id="date"
                          name="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        
                          type="date"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Input
                          id="title"
                          style={{ width: "200px" }}
                          name="title"
                          placeholder="Enter here Title "
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          type="text"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                       <FormGroup>
                        <Input
                          id="Company Name"
                          style={{ width: "200px" }}
                          name="Company Name"
                          placeholder="Company Name"
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          required
                        />
                      </FormGroup> 
                    </Col> 
                    <Col md={3}>
                      <FormGroup check>
                        <Button style={{ backgroundColor: 'green' }}>
                          <FiPlus style={{ marginRight: '5px', height: "30px", width: "25px" }} />
                          Save
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>

                 
                </Form> 
            
</div>
<br/>
                                 <div className="card-body mx-5" >
                   <Table className="table table-hover"  responsive bordered>
                    <thead>
                      <tr>
                        <th scope="col">Sr</th>
                        <th scope="col">Title</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Date</th>
                      
 
                        

                        
                      </tr>
                    </thead>
                   
                       <tbody>
                        {data &&data.map((item) => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.companyName}</td>
                            <td>{item.date}</td>
                           
                          </tr> 
                        ))}
                      </tbody>
                  </Table> 
                </div> 
               


                    </div>
                </main>
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                      
                    </div>
                </footer>
            </div>
        </div> 
       
    </body>



    </div>
  )
}

export default Company