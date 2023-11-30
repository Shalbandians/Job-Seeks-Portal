import React, { useEffect, useState } from 'react';
import {   viewUser } from '../../services/user-Service';
import { Table } from 'reactstrap';
import { getCurrentUserDetail } from '../auth';
import { useNavigate } from "react-router-dom";
import { doLogout } from '../auth';

function DashBoard() {
  const navigate = useNavigate();

  const [style, setStyle] = useState("sb-nav-fixed");
  const [user,setUser]=useState(undefined)
  const [data, setData] = useState([]);

  const changeStyle = () => {
    if (style === "sb-nav-fixed") {
      setStyle("sb-nav-fixed sb-sidenav-toggled");
    } else {
      setStyle("sb-nav-fixed");
    }
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
              <div className="container-fluid px-4">
                <ol className="breadcrumb mb-4"></ol>
                <div className="row">
             
                  <br />
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

                                          Users

                                    </div>
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
          </div>
        </div>
      </body>
    </div>
  );
}

export default DashBoard;