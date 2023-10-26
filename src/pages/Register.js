import axios from "axios";
import "../style/Auth.css";
import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);

  const handleRegister = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios.post("https://tickitz-be.onrender.com/rama/auth/register", {
      email: email,
      password: password,
      fullname: fullName,
      phone_number: phoneNumber,
    }).then (() => {
      setIsSuccess(true)
      console.log("berhasil")
    }).catch((error) => {
      setIsSuccess(false)
      setErrMsg("Something wrong in our app")
      console.log("gagal", error)
    }).finally(() => {
      setIsLoading(false)
    });
  };
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
            <div className="alert alert-success" role="alert">
              <p>Register Account Sucess. Please Check Your Email</p>
            </div>
            <div className="alert alert-danger" role="alert">
              <p></p>
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Full Name
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your full name"
                onChange={(event) => {
                  setFullName(event.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Phone Number
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your phone number"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write your password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <button onClick={handleRegister} type="button" disabled ={isLoading} class="btn btn-primary">
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <p className="text-center mt-3">
              Already have account?{" "}
              <Link>
                <span style={{ color: "#5F2EEA", textDecoration: "underline" }}>
                  Sign In
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
