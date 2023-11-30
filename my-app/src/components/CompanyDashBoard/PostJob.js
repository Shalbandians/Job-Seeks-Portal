 import React, { useEffect, useState} from 'react'
import { postjob,ViewJob } from '../../services/user-Service';
import { toast } from 'react-toastify';
import { doLogout } from '../auth';
import { useNavigate } from "react-router-dom";

import{
 Form,
 Row,
 Col,
 FormGroup, 
 Label,
 Table,
 Input,
 Button
} from 'reactstrap';
import { FiPlus } from 'react-icons/fi'
 import { getCurrentUserDetail } from '../auth';
 
function PostJob() {
  const navigate = useNavigate();
  const [user, setUser] = useState(undefined);
  const [data, setData] = useState([]);
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


const[post,setPost]=useState({
  title: '',
    description: '',
    salary: '',
    address: '',
    
})

 
useEffect(() => {
  setUser(getCurrentUserDetail());
}, []) ;
useEffect(() => {
  if (user) {
    const id = user.id;
    ViewJob({ id })
      .then((resp) => {
          setData(resp);

      })
      .catch((error) => {
        console.log(error);
      });
  }
}, [user]);




 const handleSubmit = (e) => {
   e.preventDefault();
  post["userId"] =user.id ;   
      postjob(post)
     .then((resp) => {
       toast(resp);

        setPost({
        title: '',
    description: '',
    salary: '',
    address: '',
    
       }) 
     })
     .catch((error) => {
       console.log(error);
       
     });   
 };

const handleChange=(event)=>{
  setPost({...post, [event.target.name]:event.target.value})
}


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
            <a class="nav-link" /* href="/" */ onClick={logout}         >LogOut</a>
             
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
                            <Form  onSubmit={handleSubmit} className='card-body mx-5 px-2 ' style={{ backgroundColor:'#FBFBFB',   textAlign:"center", }} >
  <Row style={{marginTop:"15px"}} >
    <Col md={3}>
    <FormGroup  > 
     
    </FormGroup>
      <FormGroup  >

        <Input
        style={{ width:"200px"}}
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
          
          placeholder="Enter Title"
          type="text"
          required
        />
      </FormGroup>
      
    </Col>
    <Col md={3}>
      <FormGroup>
    
        <Input
          id="description"
          style={{ width:"200px" }}
          name="description"
          placeholder="Enter Description "
          value={post.description}
          onChange={handleChange}
          type="textarea"
          required
        />
      </FormGroup>
    </Col>
    <Col md={3}>
      <FormGroup>
        
        <Input
        style={{ width:"200px"}}
          id="salary"
          name="salary"
          placeholder=" Enter Salary"
          type="text"
          value={post.salary}
          onChange={handleChange}
          required
        />
      </FormGroup>
    </Col>
  </Row>
  
  <Row style={{marginTop:"15px"}}>
  
    <Col md={3}>
      <FormGroup>
       
        <Input
          id="address"
          style={{ width:"200px",}}
          name="address"
          placeholder=" Enter Address"
          type="text"
          value={post.address}
          onChange={handleChange}
          required
        />
      </FormGroup>
    </Col>
    
    
  <Col md={3}>
  <FormGroup check>
  <Button 
  
  type='submit' style={{ backgroundColor: 'blue' }}>
      <FiPlus style={{ marginRight: '5px',height: "30px", width:"25px"}} />
      PostJob
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
  
           <th scope="col">Tilte</th>
           <th scope="col">Salary</th>
           <th scope="col">Address</th>
           <th scope="col">Description</th>

         </tr>
       </thead>
       <tbody>
                        {data.map((item) => (
                          <tr key={item.id}>
                          

                            <td>{item.title}</td>
                            <td>{item.salary}</td>
                            <td>{item.address}</td>

                            <td>{item.description}</td>
                            
                            
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

export default PostJob
 


