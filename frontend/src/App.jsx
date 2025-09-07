 

// import { useContext } from 'react';
import Admin from './pages/Admin' 
// import { adminContext } from './Wrapper';
import Login from './pages/Login';
import Index from './pages/Index'; 
import MainRouter from './routes/MainRouter';

const App = () => {

  // const [loginStatus, setLoginStatus] = useContext(adminContext);
  return (
    <div>
      <MainRouter/> 
 
      {/* <Admin/> */}
     {/* { loginStatus ? <Admin/> : <Login/>}  */}
      {/* {loginStatus==false? <Index/>: <Admin/>} */}
    {/* <Index/> */}
     
      
    </div>
  )
}

export default App