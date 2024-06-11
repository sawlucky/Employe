import React, { useState } from "react";
import axios from "axios";
import "./up.css";

const Signup = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    axios
      .post("http://localhost:5000/", formdata)
      .then((response) => {
        console.log(response.data);
        setFormdata({
          username: "",
          email: "",
          phone: "",
          address: "",
        });
      })
      .catch((error) => {
        console.error("There was an error submitting the form!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };
  return (
    <div className="container">
      <form action="/" method="post" onSubmit={HandleSubmit}>
        <div className="box">
          <h1>Enter Details</h1>
          <div className="user">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Full Name"
              value={formdata.username}
              onChange={handleChange}
            />
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formdata.email}
              onChange={handleChange}
            />
            <i className="fas fa-unlock-alt"></i>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={formdata.phone}
              onChange={handleChange}
            />
            <i className="fas fa-unlock-alt"></i>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              value={formdata.address}
              onChange={handleChange}
            />
          </div>
          <div className="login-btn">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
