import React, { useState } from "react";
import './App.css';
import './styles.css';
import Header from './components/Header'
import Login from "./components/Auth/Login";
import Register from"./components/Auth/Register";
import { Route, Routes,Router,Switch } from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";

import Home from "./components/homepage/Landing";

function App() {
  
    // const[currentForm, setCurrentForm] = useState('login')

    
    return(
    <div className="App">
         
    
      {/* <Router>
      <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/> } />
        <Route path="/forgot" element={<ForgotPassword/> } />
      <div>
      <Header/> 
      <Route path="/" element={<Home/>}/>
      </div>
      </Router> */}
        
       <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/> } />
        <Route path="/forgot" element={<ForgotPassword/> } />
        
        </Routes>
      <Header/>  
      <Routes>
      <Route path="/" element={<Home/>}/>

    
      </Routes> 
      
    </div>
  );
  
}

export default App;

// import { Navbar } from "react-bootstrap";
// import{
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// }from "react-router-dom";
// import Home from "./components/homepage/Home";

// const Layout =()=>{
//   return(
//     <div className="app">
//       <Navbar/>
//         <Outlet/>
      
//     </div>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//       path :"/",
//       element:<Home/>,
//       },
//     ],
//   },
// ]);
//  function App(){
//   return(
//     <div>
//       <RouterProvider router ={router}/>
//     </div>
//   );
//  }
//   export default App;