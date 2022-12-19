
import axios from "axios";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router";
import { login_url } from "../../Constants";

function Login()
{
  const initialValues={username:"",password:""};
  const [formValues,setFormValues] =useState(initialValues);
  const [formErrors,setFormErrors] =useState({});
  const [isSubmit,setIsSubmit]= useState(false);
  const navigate = useNavigate();

  

  const submitHandler = (e) => {
    setIsSubmit(true);
    navigate("/register");

  }
  const submitForgotHandler = (e) => {
    setIsSubmit(true);
    navigate("/forgot");

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
    const errors={};
    
    if (!values.username){
      errors.username="username is required";
    }
    if (!values.password){
      errors.password="password is required";
    }else if(values.password.length <4){
      errors.password="password must be more than 4 charactes"
    }else if(values.password.length >10){
      errors.password="password must be more than 10 charactes"
    }
    
    return errors;
  };

  const handleApi = () => {
    
    console.log(formValues);
    axios.post(login_url,formValues)
    .then((result) => {
      console.log(result)
      alert('success')
     
      localStorage.setItem('token',result.data)
    })
    .catch(error => {
      alert('Invalid Username or Password')
      console.log(error)
    });


  };
  return(
    <div className="auth-form-container">
      <div className="heading"><label>Sign in</label></div>

     {/* { Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui message succes"> signed in successfully</div>) :('')} */}
    
    {/* <pre> {JSON.stringify(formValues,undefined,2)} </pre>  */}
    <form className= "login-form"  onSubmit={handleSubmit}>
      <label htmlFor="username">User name </label>
      <input  type="text" id="username" name="username"  value={formValues.username} onChange={handleChange} />

      <br />
      <p> {formErrors.username}</p>
      <label htmlFor="password">Password</label>
      <input   type="password"  id="password" name="password" value={formValues.password}  onChange={handleChange}/><br />
        <p> {formErrors.password}</p>
      <div className="center"><button className ="login-btn" type="submit" onClick={handleApi}>Log In</button></div>
      <br/>
      <button className ="link-btn" onClick={submitHandler}>Don't have an Account?Register</button>
      <button className ="link-btn" onClick={submitForgotHandler}>Forgot Password</button>
      
    </form>
    </div>
    )
  }
  export default Login;

     

