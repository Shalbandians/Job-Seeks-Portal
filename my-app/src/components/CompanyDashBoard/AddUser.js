import React, { useState, useEffect} from 'react'
import { Adduser } from '../../services/user-Service';
import { toast } from 'react-toastify';
import { doLogout } from '../auth';
import{
 Form,
 Row,
 Col,
 FormGroup, 
 Label,
 Table,
 Input,
 Button,
 Dropdown,
 DropdownToggle,
 DropdownMenu,
 DropdownItem
} from 'reactstrap';
import { FiPlus } from 'react-icons/fi'
import {   viewUser } from '../../services/user-Service';
import { useNavigate } from "react-router-dom";

import { getCurrentUserDetail } from '../auth';
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
 const [user,setUser]=useState(undefined)
 const [data, setData] = useState([])
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [savedData, setSavedData] = useState([]);
 const [dropdownOpen, setDropdownOpen] = useState(false);
  const [role, setRole] = useState('');
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDropdownSelect = (role) => {
    setRole(role);
  };

 const handleSubmit = (e) => {
   e.preventDefault();
   const user = getCurrentUserDetail();
   const userId = user.id;

   const formData = {
     firstName: firstName,
     lastName: lastName,
     email: email,
     password: password,
     role: role,  
     userId: userId 
   };

   setSavedData([...savedData, formData]);
   Adduser(formData)
     .then((resp) => {
       
       toast(resp);

       setFirstName('');
       setLastName('');
       setPassword('');
       setEmail('');
     })
     .catch((error) => {
       console.log(error);
     });
 };


 const handleRemove = (index) => {
    const updatedData = savedData.filter((data, i) => i !== index);
    setSavedData(updatedData);
}; 


useEffect(() => {
  setUser(getCurrentUserDetail());
}, []) ;
useEffect(() => {
  if (user) {
    const id = user.id;
    viewUser({ id })
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
    <nav className="sb-topnav navbar navbar-dark bg-dark">
          <a className="navbar-brand ps-3" href="/user/CompanyDashboard">Jobs</a>
          <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={changeStyle} href="#!">
            <i className="fas fa-bars"></i>
          </button>
          <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group"></div>
          </form>
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
            <a class="nav-link"  onClick={logout}         >LogOut</a>
             
            </li>
          </ul>
        </nav>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">Core</div>
                  <a className="nav-link" href="/user/CompanyDashboard">
                    <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                  </a>

                  <div className="sb-sidenav-menu-heading">Job Details</div>
                  <a className="nav-link" href=  " /user/AddUser">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                    Add User
                  </a>
                   <a className="nav-link" href=  "/user /postjob">
                    <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                    Post Job
                  </a>
                  <a className="nav-link" href="/user/viewjob">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                    ViewJob
                  </a>
                  <a className="nav-link" href="/user/CompanyDashboard/sendinvite">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                    Invite
                  </a>
                  <a className="nav-link" href="/user/CompanyDashboard/user">
                    <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                   Users
                  </a>
                </div>
              </div>
              <div className="sb-sidenav-footer">
                <a className="dropdown-item" /* href="/login" */ onClick={logout}>Logout</a>
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
<input type="hidden" name="email" value={email} />

                  <Row style={{ marginTop: "15px" }}>
                    <Col md={3}>
                      <FormGroup>
                        <Input
                          style={{ width: "200px" }}
                          id="firstName"
                          name="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                          type="text"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Input
                          id="lastName"
                          style={{ width: "200px" }}
                          name="lastName"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          type="text"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup>
                        <Input
                          style={{ width: "200px" }}
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row style={{ marginTop: "15px" }}>
                    <Col md={3}>
                      <FormGroup>
                        <Input
                          id="password"
                          style={{ width: "200px" }}
                          name="Password"
                          placeholder="Password"
                          type="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </FormGroup>
                    </Col>

                    <Col md={3}>
                      <FormGroup>
                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                          <DropdownToggle caret>
                            {role ? role : 'role'}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={() => handleDropdownSelect('HR')}>HR</DropdownItem>
                            <DropdownItem onClick={() => handleDropdownSelect('Technical')}>Technical</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </FormGroup>
                    </Col>
                    <Col md={3}>
                      <FormGroup check>
                        <Button style={{ backgroundColor: 'blue' }}>
                          <FiPlus style={{ marginRight: '5px', height: "30px", width: "25px" }} />
                          Add
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
</div>
<br/>
                                 <div className="card-body mx-5" >
                                 <Table className="table table-hover" responsive bordered>
       <thead>
         <tr>
         
           <th scope="col">Email</th>

           <th scope="col">Role Name</th>

         </tr>
       </thead>
       <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                            <td>{item.email}</td>
                            <td>{item.roleName}</td>

                           
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