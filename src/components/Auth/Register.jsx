import {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { register_url } from "../../Constants";
export const Register = (props) =>
{
  const initialValues={Username:"",Email:"",PhoneNumber:"",Password:"",ConfirmPassword:""};
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
    const errors={};
   

    const regex=/^[^\s@]+@gmail+\.com$/i;
    const pattern = /^[0-9]{10}$/i;
    const userregex = /^\S*$/;

    if (!values.Username)
    {
      errors.Username="Username is required";
    }
    else if(values.Username.length < 8 || values.Username.length > 16 || !userregex.test(values.Username))
    {
      // isValid = false;
      errors.Username = "Please enter valid username.";
    }
    if (!values.Email)
    {
      errors.Email="Email is required";
    }
    else if (!regex.test(values.Email))
   {
    errors.Email = "Invalid email format!";
  }
    if (!values.PhoneNumber)
    {
      errors.PhoneNumber="Phone number is required";
    }
    else if (!pattern.test(values.PhoneNumber)) 
    {       
      errors.PhoneNumber= "Please  Enter valid number";
  
    }
  
    if (!values.Password)
    {
      errors.Password="Password is required";
    }
    else if(values.Password.length < 4  )
    {
errors.Password="Password must have minimum 4 characters"
    }
    else if(values.Password.length >12  )
    {
errors.Password="Password must not exceed 12 characters"
    }

    
    if (!values.ConfirmPassword)
    {
      errors.ConfirmPassword="Password is required";
    }
    else if(values.ConfirmPassword.length < 4  )
    {
errors.ConfirmPassword="Password must have minimum 4 characters"
    }
    else if(values.ConfirmPassword.length >12  )
    {
errors.ConfirmPassword="Password must not exceed 12 characters"
    }
    else if(values.ConfirmPassword !== formValues.Password)
    {
      errors.ConfirmPassword="Passwords don't match"
    }

    
    return errors;
  };
  const handleApi = () => {
    console.log(formValues);
    axios.post(register_url,formValues)
    .then(result=> {
      console.log(result)
    })
    .catch(error => {

      console.log(error)
      
    })
  }
  return( 
    <>
     { Object.keys(formErrors).length ===0 && isSubmit ?(
      <section>
      <h1>You are now a new member</h1>
      <br/>
      <p>
      <a href = "/">Sign in</a>
      </p>
      </section>
    ):(
        <div className="auth-form-container">
        <div className="heading"><label>Register</label></div>
        
       
       <form className="register-form" onSubmit={handleSubmit} >
          
       <label htmlFor="Username">Username </label>
          <input   type="text"  id="Username" name="Username" value={formValues.Username} onChange={handleChange} />
          <br />
          <p> {formErrors.Username}</p>
          <label htmlFor="Email">Email </label>
          <input   type="text"  id="Email" name="Email" value={formValues.Email} onChange={handleChange} />
          <br />
          <p> {formErrors.Email}</p>
          <label htmlFor="PhoneNumber">Phone number </label>
          <input  type="text"  id="PhoneNumber" name="PhoneNumber" value={formValues.PhoneNumber} onChange={handleChange}/>
          <br/>
          <p> {formErrors.PhoneNumber}</p>
          <label htmlFor="Password">Password </label>
          <input type="password"  id="Password" name="Password" value={formValues.Password} onChange={handleChange} />
          <br/>
          <p> {formErrors.Password}</p>
          <label htmlFor="ConfirmPassword">Confirm Password </label>
          <input  type="password"  id="ConfirmPassword" name="ConfirmPassword" value={formValues.ConfirmPassword} onChange={handleChange} /><br />
          <br/>
          <p> {formErrors.ConfirmPassword}</p>
          <div className="center">
          <button className ="login-btn"  type="submit" onClick={handleApi} >Submit</button></div>
          <br/>
          <button className ="link-btn" onClick={submitHandler}>Already have an account? Sign in </button> 
        </form>
        </div>
      )}
      </>
    )
}
export default Register;
