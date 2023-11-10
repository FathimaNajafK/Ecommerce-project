import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ForgetPassword from './components/Forgot';
import Home from './components/Home';
import Dashboard from './Dashboard';


import {Routes,Route,useNavigate} from 'react-router-dom'

function App() {
 
  const navigate = useNavigate()

  return (
    
    <div classname="App">
      <Routes>
      <Route element={<SignIn/>} path='/signin'/>
      <Route element={<SignUp/>} path='/signup'/>
      <Route element={<ForgetPassword/>} path='/forgot'/>
      <Route element={<Dashboard/>} path='/home'/>
      {/* <Route element={<pos/>} path='/pos'/> */}
      </Routes>
    </div>
  );
}

export default App;
