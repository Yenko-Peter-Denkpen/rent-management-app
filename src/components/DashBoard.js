import React from "react";
import logo from "../imgs/logo.jpg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"

function DashBoard() {
  return (
    <div className="container">
    <div className="landingpage">
      <header className="header">
      <div className="logoarea">
        <img src={logo} alt="logo" width="100px" height="80px" className="img" />
        </div>
        <div><h3>RENT MANAGEMENT DASHBOARD</h3></div>
        <nav className="navigation">
          <ul>
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/register">Register</Link>
          </li>
          <li>
          <Link to="/category">Category</Link>
          </li>
          <li>
          <Link to="/about">About</Link>
          </li>
          </ul>
        </nav>
      </header>
      <div className="heroText">
      <h2>Rent Management APP</h2><hr/>
      <p>You are welcome to rent management App. 
      We provide you access to vacant rooms within your locality.
      Hit on the signup link to register as a new user.
       If you are an old user you can login to access our services</p>
     
      </div>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default DashBoard;
