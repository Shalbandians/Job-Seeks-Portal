
import React, { useEffect, useState } from 'react';

import { Table, Row, Col, FormGroup, Input, Button, Form } from 'reactstrap';
import { getCurrentUserDetail } from '../auth';
import { findCandidate, inviteuser } from '../../services/user-Service';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { doLogout } from '../auth';
import { useNavigate } from "react-router-dom";
function DashBoard() {
  const navigate = useNavigate();

  const [style, setStyle] = useState("sb-nav-fixed");

  const [user, setUser] = useState(undefined)
  const [data, setData] = useState([]);
  const [skillName, setSkillName] = useState('')
  const changeStyle = () => {
    if (style === "sb-nav-fixed") {
      setStyle("sb-nav-fixed sb-sidenav-toggled");
    } else {
      setStyle("sb-nav-fixed");
    }
  };
  const { id } = useParams();

  const handleClick = (e, userId) => {
    e.preventDefault();
    const Ids = {
      userId: userId,
      jobId: id,
    }
    inviteuser(Ids).then((resp) => {
      toast(resp)


        ;

    }).catch((error) => {
      console.log(error);
    })



    console.log(Ids);
  };



  const handleSearch = (e) => {
    e.preventDefault();
    const formData = {
      skillName: skillName

    };
    findCandidate(formData).then((resp) => {
      setData(resp)


        ;

    }).catch((error) => {
      console.log(error);
    })
  }

  const logout=()=>{
    doLogout(()=>{
     navigate('/')
    })
  }




  useEffect(() => {
    setUser(getCurrentUserDetail());
  }, []);

  return (
    <div>
      <body className={style}>
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
                <a className="dropdown-item"  onClick={logout}>Logout</a>
              </div>
            </nav>
          </div>

          <div id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <ol className="breadcrumb mb-4"></ol>

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

                    Invite Candidate

                  </div>



                  <Table className="table table-hover" responsive bordered>

                    <thead>
                      <Row style={{ marginLeft: "5px" }}>
                        <Form onSubmit={handleSearch}>
                          <Col md={6}>
                            <FormGroup>
                              <Input
                                placeholder='find candidate by skill'
                                type='text'
                                name='skillName'
                                value={skillName}
                                id='skillName'
                                onChange={(e) => setSkillName(e.target.value)}
                                required />
                            </FormGroup>
                          </Col>
                          <Col md={3}>
                            <FormGroup>
                              <Button >
                                Search
                              </Button>
                            </FormGroup>
                          </Col>
                        </Form>
                      </Row>
                      <tr>



                        <th scope="col">Email</th>

                        <th scope="col">Invite</th>

                      </tr>
                    </thead>
                    <tbody>
                      {data.map((item) => (
                        <tr key={item.id}>

                          <td>{item.email}</td>


                          <td>

                            <Button className="btn"
                              onClick={(e) => handleClick(e, item.id)}
                              style={{ backgroundColor: 'lightblue' }}>
                              Send User
                            </Button>

                          </td>
                        </tr>
                      ))}
                    </tbody>

                  </Table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </div>
  );
}

export default DashBoard;

