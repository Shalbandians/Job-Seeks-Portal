import React, { useState } from 'react'
import { Admin } from '../services/user-Service'
import { toast } from 'react-toastify';
import { Navbar } from 'reactstrap';
import { FiClipboard ,FiFileText} from 'react-icons/fi';
import { AiOutlineEdit } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
function DashBoard() {
    const [style, setStyle] = useState("sb-nav-fixed")
    const changeStyle = () => {
        if (style === "sb-nav-fixed") {
            setStyle("sb-nav-fixed sb-sidenav-toggled")
        } else {
            setStyle("sb-nav-fixed")
        }
    }
    const [companyName, setCompanyName] = useState('');
    const [description, setDescription] = useState('');
    const [savedData, setSavedData] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = {
            companyName: companyName,
            description: description,
            id: 0
        };
        setSavedData([...savedData, formData]);
        Admin(formData).then((resp) => {

            console.log(resp)
            toast(resp)
            setCompanyName('');
            setDescription('');
        }).catch((error) => {
            console.log(error)
            console.log("Error log")
        })
    };
    const handleRemove = (index) => {
        const updatedData = savedData.filter((data, i) => i !== index);
        setSavedData(updatedData);
    };



    return (
        <div>


            <body class={style}>
                <nav class="sb-topnav navbar navbar-dark bg-dark">
                    <a class="navbar-brand ps-3" href="/Dashboard">Jobs</a>
                    <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" onClick={changeStyle} href="#!"><i class="fas fa-bars"></i></button>
                    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                        <div class="input-group">
                            {/* <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button> */}
                        </div>
                    </form>
                    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="">Settings</a></li>
                                <li><a class="dropdown-item" href="">Activity Log</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="/login">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div class="sb-sidenav-menu">
                                <div class="nav">
                                    <div class="sb-sidenav-menu-heading">Core</div>
                                    <a class="nav-link" href="/Dashboard">
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
              Manage Users
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
                                    <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="/AddCompany">Add Company</a>
                                            <a class="nav-link" href="/AddAdministration">Administration</a>
                                            <a className="nav-link" href="/editdetails">
                      Edit Details
                      </a>
                                        </nav>
                                    </div>
                                  
                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                    
            <a class="dropdown-item" href="/login">Logout</a>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <div class="container-fluid px-4">
                               
                                <ol class="breadcrumb mb-4">
                           </ol>

                                <div class="row">
                                
          <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body" style={{ fontSize: '20px', textAlign: 'center', backgroundColor: "#01BFA5" }}>
                <FiClipboard style={{ marginBottom: '10px' }} size={40} />
                <a style={{ textDecoration: 'none' }}>Company</a>
              
            </div>
          </div>
        </div>
                                   {/*  <div class="col-xl-3 col-md-6">
                                        <div class="card bg-primary text-white mb-4">
                                            <div className="card-body" style={{ fontSize: '20px', textAlign: 'center', backgroundColor: "#01BFA5" }}>
                                                <a  style={{ textDecoration: 'none' }}>Company</a>
                                            </div></div></div> */}

                                  {/*   <div class="col-xl-3 col-md-6">
                                        <div class="card bg-primary text-white mb-4">
                                            <div className="card-body" style={{
                                                fontSize: '20px', textAlign: 'center', color:"white",
                                                backgroundColor:
                                                    "#4CB050"
                                            }}>
                                                <a  style={{ textDecoration: 'none' }}>Administration</a>
                                            </div></div></div> */}
                                             <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body" style={{ fontSize: '20px', textAlign: 'center', backgroundColor: "4CB050" }}>
                <FiFileText style={{ marginBottom: '10px' }} size={40} />
                <a style={{ textDecoration: 'none' }}>Administration</a>
              
            </div>
          </div>
        </div>
                  
        <div className="col-xl-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body" style={{ fontSize: '20px', textAlign: 'center', backgroundColor: "#FEC400" }}>
                <AiOutlineEdit style={{ marginBottom: '10px' }} size={40} />
                <a style={{ textDecoration: 'none' }}>Edit</a>
              
            </div>
          </div>
        </div>                         
                                    <br />

                                </div>





                                <div class="card mb-4">
                                    <div class="card-header" style={{
                                        textAlign: 'center',
                                        color: 'white',
                                        marginBottom: '20px',
                                        fontSize: '30px',
                                        fontWeight: 'bold',
                                        color: "black"
                                    }}>

                                        Companies

                                    </div>
                                    <div class="card-body">
                                        <table id="datatablesSimple">
                                            <thead>
                                                <tr>
                                                    <th style={{ padding: '8px' }} >Company Name</th>

                                                    <th style={{ padding: '8px' }}>Description</th>
                                                </tr>

                                            </thead>

                                            <tbody>
                                                {savedData.map((data, index) => (
                                                    <tr key={index}>
                                                        <td style={{ padding: '8px' }}>{data.companyName}</td>

                                                        <td style={{ padding: '8px' }}>{data.description}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
















                                    </div>
                                </div>
                            </div>

                        </main>
                        <footer class="py-4 bg-light mt-auto">
                            <div class="container-fluid px-4">
                                <div class="d-flex align-items-center justify-content-between small">

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

            </body>



        </div>

    )
}

export default DashBoard