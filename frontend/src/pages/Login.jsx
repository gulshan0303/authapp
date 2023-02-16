
import "./style.css";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import {login,reset} from "../features/auth/authSlice"
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {user,isLoading,isError,message,isSuccess} = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {email, password} = formData;

  const onChanges = (e) => {
    setFormData((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value
    }))
  };
  const Onsubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,password
    }
    dispatch(login(userData))
  };
  useEffect( () =>{
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }
    dispatch(reset());
},[isError,isSuccess,message,dispatch,user,navigate])

if(isLoading){
  return <p>Loading...</p>
}
  return (
    <>
    <div className="login">
    <section className="heading">
          <h1>
            <FaUser /> Login
          </h1>
          <p>Please signIn your Account</p>
        </section>
        <section className="form">
          <form onSubmit={Onsubmit}>
            
            <div className="input">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={onChanges}
               
              />
            </div>
            <div className="input">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={onChanges}
              />
            </div>
            
            <div className="input">
              <button className="btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </section>
    </div>
    </>
  )
}

export default Login