
import React, { useState, useEffect } from 'react';
import { addskill } from '../../services/user-Service';
import { toast } from 'react-toastify';
import {

  Row,
  Col,
  FormGroup,

  Table,



} from 'reactstrap';
import { FiPlus } from 'react-icons/fi';
import { getCurrentUserDetail } from '../auth';
import { doLogout } from '../auth';
import { useNavigate } from "react-router-dom";

import { HiUserGroup } from 'react-icons/hi';
import { Button, Form, Input } from 'reactstrap';
import { viewskill } from '../../services/user-Service';

function Company() {
  const [user, setUser] = useState(undefined);
  const [data, setData] = useState([]);

  const [style, setStyle] = useState('sb-nav-fixed');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [skillName, setSkillName] = useState('');

  const navigate = useNavigate();




  const changeStyle = () => {
    if (style === "sb-nav-fixed") {
      setStyle("sb-nav-fixed sb-sidenav-toggled")
    } else {
      setStyle("sb-nav-fixed")
    }
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    setUser(getCurrentUserDetail());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      const formData = {
        userId: user.id,
        skillName: skillName,
      };

      addskill(formData)
        .then((resp) => {
          toast(resp);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      toast('Skills Not Found')
    }
  };

  useEffect(() => {
    if (user) {
      const id = user.id;
      viewskill({ id })
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
                  textAlign: "center"
                }}>
                  <Form onSubmit={handleSubmit} className='card-body mx-5 px-2' style={{ backgroundColor: '#FBFBFB', textAlign: "center" }}>


                    <Row style={{ marginTop: "15px", marginInline: "105px" }}>
                      <Col md={3}>
                        <FormGroup style={{ marginRight: "15px" }}>
                          <Input
                            style={{ width: "200px" }}
                            id="skillName"
                            name="skillName"
                            value={skillName}
                            onChange={(e) => setSkillName(e.target.value)}

                            type="text"
                            required
                          />
                        </FormGroup>
                      </Col>

                      <Col >
                        <FormGroup >
                          <Button style={{ backgroundColor: 'green' }} onSubmit={handleSubmit}>
                            <FiPlus style={{ marginRight: '5px', height: "30px", width: "25px" }} />
                            Save
                          </Button>

                        </FormGroup>
                      </Col>
                    </Row>


                  </Form>



                </div>
                <br />
                <div class="card mb-4">
                  <div class="card-header" style={{
                    textAlign: 'center',
                    color: 'white',
                    marginBottom: '20px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    color: "black"
                  }}>

                    Skills

                  </div>
                  <div class="card-body">

                    <div className="card-body">


                      <Table className="table table-hover" responsive bordered>
                        <thead>
                          <tr>
                            <th scope="col">Id</th>

                            <th scope="col">Skill Name</th>

                          </tr>
                        </thead>


                        <tbody>
                          {data && data.length > 0 ? (
                            data.map((item) => (
                              <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.skillName}</td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="2">No skills found.</td>
                            </tr>
                          )}
                        </tbody>


                      </Table>

                    </div>

                  </div>
                </div>
                <br />



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