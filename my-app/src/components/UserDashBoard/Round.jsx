import React, { useState , useEffect} from 'react'
import {  addround,  } from '../../services/user-Service';
import { toast } from 'react-toastify';


import { getCurrentUserDetail } from '../auth';
import { doLogout } from '../auth';
import { useNavigate } from "react-router-dom";

import { HiUserGroup } from 'react-icons/hi';
import {Button, Card, CardBody,Container,Form,Input, } from "reactstrap"
import { useRef } from "react";
import {  useParams } from "react-router-dom";


function Company() {
  const navigate = useNavigate();

  const [user, setUser] = useState(undefined);

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
 
const [ note , setNote]=useState('');
 const [roundName, setRoundName] = useState('');
 const [dropdownOpen, setDropdownOpen] = useState(false);
      
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    setUser(getCurrentUserDetail());
  }, []) ;
  const { id } = useParams();
   const handleClick = (e) => {
   e.preventDefault();
    const formData = {
      candidateId: id,
      roundName: roundName,
      note: note,
        
   };

 
 addround(formData).then((resp)=>{
  console.log(resp)

  toast(resp)
  setNote('');
       setRoundName('');

 }).catch((error)=>{
  console.log(error);
  toast.error(error)
 })
}
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
      <Container>
        <div className="wrapper">
          
                <Card className="shadow sm mt-2 border-0">

      <CardBody>
        <Container className="text-center">
        <h3>Round</h3>
        </Container>
        
       
                                  <Form onSubmit={handleClick}>
                            <div className="my-3">
                              <Input
                                type="text"
                                id="roundName"
                                placeholder="Enter Round"
                                name="roundName"
                                value={roundName}
                                onChange={(e) => setRoundName(e.target.value)}
                                required
                                className="rounded-0"
                              />
                            </div>
                            <div className="my-3">
                              <Input
                                type="textarea"
                                id="note"
                                name="note"
                                placeholder="Enter Note"
                                className="rounded-0"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                style={{ height: '300px' }}
                              />

                            </div>

                            <Container className="text-center">
                              <Button className="rounded-0" color="primary" type="submit">
                                Save
                              </Button>
                             
                            </Container>
                          </Form>

      </CardBody>
                </Card>

                
        </div>
        </Container>

</div>
<br/>
                     
               


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