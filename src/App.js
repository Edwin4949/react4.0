import React from "react";
import './App.css';


import Login from "./components/Auth/Login";
import Register from"./components/Auth/Register";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Home from "./components/homepage/Home";
import Cart from "./components/homepage/Cart";
import Offer from "./components/homepage/Offer";
import ProductDetails from "./components/Products/ProductDetails";




function App() {
  
  

    
    return(
      
    <div className="App">
         
         
      
      <Routes>
      
        <Route path="/" element = {<Home/>}/>
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/> } />
        <Route path="/forgot" element={<ForgotPassword/> } />
        <Route path="/offer" element={<Offer/>}/>
        <Route path="/productdetails" element={<ProductDetails/>}/>
        
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