import './App.css'
import React, { useState } from 'react'
import axios from "axios";
import { toast } from 'react-toastify';

// import axios from "axios";
function App() {
  // const {url, setToken} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data , setData] = useState({
      name:"",
      email:"",
      password:""
  })

  const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({
          ...data,[name]:value
      }))
  }

  const onLogin = async (event) =>{
      event.preventDefault();
      let newUrl = `http://localhost:4000`;
      if(currState === "Login"){
          newUrl += "/api/user/login";
      }
      else{
          newUrl += "/api/user/register";
      }
      const response = await axios.post(newUrl, data);
      console.log(response.data)
      if (response.data.success) {
        toast.success("Succes fully Register");
          
      }
      else{
          alert(response.data.message);
      }
  }
  return (
    <>
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
               
            </div>
            <div className="login-popup-inputes">
                {currState === "Login"?<></>:<input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder="Your name" required />}              
                <input onChange={onChangeHandler} name='email' value={data.email}  type="email" placeholder="Your email" required />
                <input onChange={onChangeHandler} name='password' value={data.password}  type="password" placeholder="Password" required />
            </div>
            <button type='submit'>{currState === "Sign Up"?"Create account":"Log in"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState === "Login"
            ?        
             <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>    
              :   
              <p>Alredy have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>        
            }
        </form>
    </div>
    </>
  )
}

export default App


