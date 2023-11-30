 import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LogIn';

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from 'react-toastify';
import { BrowserRouter,Routes, Route } from 'react-router-dom';



import PostJob from "./components/CompanyDashBoard/PostJob.js"
import Viewjob from "./components/CompanyDashBoard/ViewJob.js"
import AddUser from "./components/CompanyDashBoard/AddUser.js"

import UserDashBoard from './components/UserDashBoard/UserDashBoard';
import CreateInterview from './components/UserDashBoard/CreateInterview';
import AddQuestion from './components/UserDashBoard/AddQuestion';
import AddRound from './components/UserDashBoard/AddRound'
import Round from './components/UserDashBoard/Round'
import Question from './components/UserDashBoard/Question'
import AddSkill from './components/UserDashBoard/AddSkill'
import ViewQuestion from './components/UserDashBoard/ViewQuestion'
import ViewRound from './components/UserDashBoard/ViewRound'
import ViewSkill from './components/UserDashBoard/ViewSkills'
import Invite from './components/CompanyDashBoard/Invite'
import SendInvite from './components/CompanyDashBoard/SendInvite'
import MyInvite from './components/UserDashBoard/MyInvite'
import CompanyUser from './components/CompanyDashBoard/CompanyUser'
import Feedback from './components/UserDashBoard/Feedback'
import FeedBackRequest from './components/UserDashBoard/FeedBackRequest'
import ResponseFeedback from './components/UserDashBoard/ResponseFeedback'
import ViewFeedback from './components/UserDashBoard/ViewFeedback'
import CompanySignup from './components/CompanySignup'
import Company from './components/CompanyDashBoard/Company'

import PrivateRoutes from './components/PrivateRoutes'
function App() {
  return (
    <div className="App">
      <header className="App-header">
 
        <BrowserRouter className="hh">
        <ToastContainer />
        <Routes>
       
        <Route path="/" element= {<LoginForm/>}/>
        <Route path="/companysignup" element= {<CompanySignup/>}/>

        <Route path="/signup" element= {<RegistrationForm/>}/>




        <Route path="/feedback/response/:id" element={<ResponseFeedback />} />





            <Route path="/user" element={<PrivateRoutes/>}>
            <Route path='userdashboard' element={<UserDashBoard/>}/>
            <Route path='userdashboard/createinterview' element={<CreateInterview/>}/>
        <Route path="userdashboard/invite" element={<MyInvite />} />
        <Route path="userdashboard/skill" element={<AddSkill />} />
        <Route path="userdashboard/viewskill" element={<ViewSkill />} />
        <Route path="userdashboard/addquestion" element={<Question />} />
        <Route path='userdashboard/addquestion/:id' element={<AddQuestion />} />
        <Route path="userdashboard/viewquestion/:id" element={<ViewQuestion />} />
        <Route path='userdashboard/addround/' element={<AddRound/>}/>
    
            <Route path='userdashboard/addround/:id' element={<Round/>}/>
              <Route path="userdashboard/viewround/:id" element={<ViewRound />} />
            <Route path="userdashboard/feedback" element={<Feedback />} />
            <Route path="userdashboard/feedback/:id" element={<FeedBackRequest />} />
            <Route path="userdashboard/viewfeedback/:id" element={<ViewFeedback />} />

            <Route path="CompanyDashboard" element= {<Company/>}/>
            <Route path="CompanyDashboard/invite/:id" element= {<Invite/>}/>
        <Route path="CompanyDashboard/sendinvite" element= {<SendInvite/>}/>
        <Route path="CompanyDashboard/user" element= {<CompanyUser/>}/>
        <Route path="AddUser" element= {<AddUser/>}/>
        <Route path="viewjob" element= {<Viewjob/>}/>
        <Route path='postjob' element={< PostJob/>}/> 
        <Route path="CompanyDashboard/invite/:id" element= {<Invite/>}/>
        <Route path="CompanyDashboard/sendinvite" element= {<SendInvite/>}/>
        <Route path="CompanyDashboard/user" element= {<CompanyUser/>}/>


</Route>
        </Routes>
    </BrowserRouter>
        
      </header>
    </div>
  );
}

export default App;
 



