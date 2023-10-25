import "../style/Auth.css";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div id="page_register">
      <div className="row">
        {/* left Banner */}
        <div className="col col-md-7">
          <div className="left-box">
            <img src="/images/Logo/tickitz-white.png" />
            <h2>Wait, Watch, Wow!</h2>
          </div>
        </div>
        {/* Right  */}
        <div className="col col-md-5">
          <div className="right-box">
            <h1>Sign Up</h1>
            <p className="text-secondary mb-4">Fill your additional details</p>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your full name"
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your phone number"
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your email"
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your password"
              />
            </div>
            <button type="button" class="btn btn-primary">Sign Up</button>
            <p className="text-center mt-3">Already have account? <Link>
            <span style={{color: "#5F2EEA", textDecoration: "underline"}}>Sign In</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
