import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn';
import './App.css';
import Forgotpassword from './pages/Forgotpassword';
import Services from './pages/Services';
import Document from './pages/Document'
import  Users from './pages/Users'
import Departments from './pages/Departments'
import Automations from './pages/Automations'
import OnboardingLayoutRoute from './layout/OnboardingLayout';
import DashboardLayoutRoute from './layout/DashboardLayoutRoute';

export const isloggedIn = true

function App() {
  
  return (
    <div className="App">
      <>
        <Router>
     
          <Routes>
            <Route element={<OnboardingLayoutRoute/>}>
            <Route path='/sign-in' element={<SignIn/>}/>
              <Route path='/forgot-password' element={<Forgotpassword/>}/>
            </Route>
         
         <Route element={<DashboardLayoutRoute/>}>
            <Route path='/services' element={<Services />}/>
            <Route path='/documents' element={<Document/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/departments' element={<Departments />}/>
            <Route path='/automations' element={<Automations />}/>
            <Route path='/' element={<Dashboard />} />
          </Route>
           
          </Routes>
       
        </Router>
      </>
    </div>
  );
}

export default App;
