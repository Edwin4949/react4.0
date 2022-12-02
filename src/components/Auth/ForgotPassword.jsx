// import axios from "axios";
// import { useState ,useEffect} from "react";
// import { useNavigate } from "react-router";


// export default function ForgotPassword(){
 
//   const initialValues = {Email:""};
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const navigate = useNavigate();
  
//   const submitHandler = (e) => {
//     setIsSubmit(true);
//     navigate("/");

//   }

// const handleChange = (e) => {
//   console.log(e.target)
//   const { name, value } = e.target;
//   setFormValues({ ...formValues, [name]: value });
//   console.log(formValues)
// };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setFormErrors(validate(formValues));
//   setIsSubmit(true);
//    };

// const validate = (values) => {
//   let errors = {};
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

//   if (!values.Email)
//    {
//     errors.Email = "Email is required!";
//   }
//    else if (!regex.test(values.Email))
//    {
//     errors.Email = "Invalid email format!";
//   }
//   return errors;
// };

// const handleApi = () => {
//   console.log({ formValues });
//   setFormErrors(validate(formValues));
//   setIsSubmit(true);
// };

// return(

  
//   <div className="auth-form-container">
//     <div className="heading"><label>Forgot password</label></div>

     
  
//   <form className= "login-form"  onSubmit={handleSubmit}>
//     <label htmlFor="Email">Email </label>
//     <input  type="Email" id="Email"  name="Email" value={formValues.Email}   onChange={handleChange} />
//     <br />
//     <p> {formErrors.EmailId}</p>
   
//     <div className="center">
//          <button   className ="login-btn"     type="submit"     onClick={handleApi}>send</button>
//          <button className ="link-btn" onClick={submitHandler}>Back to login</button>
//     </div>
//   <br/>
//  </form>
//     </div>
    
    
//   )
//  }     


import {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { forget_url } from "../../Constants";
function Forgot()
{
  const initialValues={Email:""};
  const [formValues,setFormValues] =useState(initialValues);
  const [formErrors,setFormErrors] =useState({});
  const [isSubmit,setIsSubmit]= useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    setIsSubmit(true);
    navigate("/");

  }

  const handleChange = (e) => {
    console.log(e.target);
    const {name,value} = e.target;
    setFormValues({...formValues, [name]:value});
    console.log(formValues);
      };
    
     const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
     };
   
  useEffect( () => {
    console.log(formErrors);
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(formValues); 
    }

  },[formErrors]);

    const validate = (values) => {
      
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.Email)
    {
      errors.Email="email is required";
    }
    else if (!regex.test(values.Email))
   {
    errors.Email = "Invalid email format!";
  }
       
    return errors;
  };
  const handleApi = () => {
    console.log(formValues);
    axios.post(forget_url,formValues)
    .then(result=> {
      console.log(result)
      alert("email sent successfully")
    })
    .catch(error => {

      console.log(error)
      alert("error")
      
    })
  }
  return( 
    
        <div className="auth-form-container">
        <div className="heading"><label>Forgot Password</label></div>
        
       
       <form className="forget-form" onSubmit={handleSubmit} >
          
          
          <label htmlFor="Email">Email </label>
          <input   type="text"  id="Email" name="Email" value={formValues.Email} onChange={handleChange} />
          <br />
          <p> {formErrors.Email}</p>
          
          <div className="center">
          <button className ="login-btn"  type="submit" onClick={handleApi} >Submit</button></div>
          <br/>
          <button className ="link-btn" onClick={submitHandler}>back to login </button> 
        </form>
        </div>
      )}
      
    

export default Forgot;

