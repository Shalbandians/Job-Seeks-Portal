
import React, { useEffect, useState } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { getCurrentUserDetail } from '../auth';
import {
  CardBody,
  
  Card,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

import { toast } from 'react-toastify';

import { inviteresp, myinvite, summary } from '../../services/user-Service';
import { doLogout } from '../auth';
import { useNavigate } from "react-router-dom";

function UserDashBoard() {
  const navigate = useNavigate();

  const [status, setStatus] = useState();
  const [user, setUser] = useState(undefined);
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('dashboardData');
 });
  const [style, setStyle] = useState('sb-nav-fixed');

  const changeStyle = () => {
    if (style === 'sb-nav-fixed') {
      setStyle('sb-nav-fixed sb-sidenav-toggled');
    } else {
      setStyle('sb-nav-fixed');
    }
  };

  useEffect(() => {
    setUser(getCurrentUserDetail());
  }, []);

  useEffect(() => {
    if (user) {
      const id = user.id;
      myinvite({ id })
        .then((resp) => {
          setData(resp);
          localStorage.setItem('dashboardData', JSON.stringify(resp)); // Store data in local storage
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  const handleReject = (itemId) => {
    setData((prevData) =>
      prevData.map((dataItem) =>
        dataItem.id === itemId ? { ...dataItem, visible: true } : dataItem
      )
    );
    setStatus(false);
  };

  const handleAccept = (itemId) => {
    setData((prevData) =>
      prevData.map((dataItem) =>
        dataItem.id === itemId ? { ...dataItem, visible: true } : dataItem
      )
    );
    setStatus(true);
  };

  const handleFormData = (itemId) => {
    const selectedItem = data.find((item) => item.id === itemId);
    const formData = {
      status: status,
      userId: user ? user.id : null,
      jobId: selectedItem ? selectedItem.id : null,
    };

    inviteresp(formData)
      .then((resp) => {
        toast(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logout=()=>{
    doLogout(()=>{
     navigate('/')
    })
  }
  return (
    <div>
      <body className={style}>
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
              <div className="container-fluid px-4">
                <ol className="breadcrumb mb-4"></ol>

                <div className="card mb-4">
                  <div
                    className="card-header"
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginBottom: "20px",
                      fontSize: "30px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Invite
                  </div>
                  <div className="card-body">
                    <div className="card-body">
                      <>
                        {data &&
                          data.map((item) => (
                            <Card className="my-2" key={item.id}>
                              <CardBody>
                                <CardTitle tag="h5">{item.id}</CardTitle>

                                <CardTitle tag="h5">{item.title}</CardTitle>
                                <CardText>
                                  <h5>Description:</h5>
                                  {item.description}
                                </CardText>

                                {!item.visible && (
                                  <Button
                                    style={{ backgroundColor: "red" }}
                                    onClick={() => {
                                      handleReject(item.id);
                                      handleFormData(item.id);
                                    }}
                                  >
                                    Reject
                                  </Button>
                                )}

                                {!item.visible && (
                                  <Button
                                    style={{ backgroundColor: "green", marginLeft:"5px" }}
                                    onClick={() => {
                                      handleAccept(item.id);
                                      handleFormData(item.id);
                                    }}
                                  >
                                    Confirm
                                  </Button>
                                )}
                              </CardBody>
                            </Card>
                          ))}
                      </>
                    </div>
                  </div>
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
  );
}

export default UserDashBoard;














