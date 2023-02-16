import "./style.css";
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { name, email, password, cpassword } = formData;

  const onChanges = (e) => {
    setFormData((prevState) => ({
       ...prevState,
       [e.target.name]: e.target.value
    }))
  };
  const Onsubmit = (e) => {
    e.preventDefoult();
  };
  return (
    <>
      <div className="register">
        <section className="heading">
          <h1>
            <FaUser /> Register
          </h1>
          <p>Please create your Account</p>
        </section>
        <section className="form">
          <form onSubmit={Onsubmit}>
            <div className="input">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={onChanges}
              />
            </div>
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
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="Enter your Confirm Password"
                value={cpassword}
                onChange={onChanges}
              />
            </div>
            <div className="input">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Register;
