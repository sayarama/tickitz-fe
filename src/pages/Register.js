import axios from "axios";
import "../style/Auth.css";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);

  React.useEffect(() => {
    if(localStorage.getItem("token") && localStorage.getItem("profile")) {
        navigate("/");
    }
}, []);

  const handleRegister = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://pijar-camp-batch15-tickitz.cyclic.app/aulia/auth/register", {
        email: email,
        password: password,
        fullname: fullName,
        phone_number: phoneNumber,
      })
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        const errFullname = error?.response?.data?.messages?.fullname?.message;
        const errEmail = error?.response?.data?.messages?.email?.message;
        const errPhoneNumber = error?.response?.data?.messages?.phoneNumber?.message;
        const errPassword = error?.response?.data?.messages?.password?.message;
        setIsSuccess(false);
        setErrMsg(
          errFullname ??
            errEmail ??
            errPhoneNumber ??
            errPassword ??
            "Something wrong in our app"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div id="page_register">
      <div className="row">
        {/* left Banner */}
        <div className="col col-md-7">
          <div className="left-box">
            <img className="white-tickitz" src="/images/Logo/tickitz-white.png" />
            <h2>Wait, Watch, Wow!</h2>
          </div>
        </div>
        {/* Right  */}
        <div className="col col-md-5">
          <div className="right-box">
            <h1>Sign Up</h1>
            <p className="text-secondary mb-4">Fill your additional details</p>

            {isSuccess ? (
              <div className="alert alert-success" role="alert">
                <p>Register Account Sucess. Please Check Your Email</p>
              </div>
            ) : null}

            {errMsg ? (
              <div className="alert alert-danger" role="alert">
                {errMsg}
              </div>
            ) : null}
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <div className="mb-4">
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
            <button
              onClick={handleRegister}
              type="button"
              disabled={isLoading}
              className="btn btn-primary"
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
            <p className="text-center mt-3">
              Already have account?{" "}
              <Link to="/login">
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
