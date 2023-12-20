import React from "react";
import '../style/App.css'
import axios from "axios";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);

  const handleForgotPassword = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://pijar-camp-batch15-tickitz.cyclic.app/aulia/auth/forgot-password", {
        email: email,
      })
      .then(() => {
        setIsSuccess(true);

        setTimeout(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        const errorEmail = error?.response?.data?.messages?.email?.message;

        setIsSuccess(false);
        setErrMsg(
          errorEmail ??
            error?.response?.data?.messages ??
            "something wrong in our app"
        );
        console.log("gagal", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="page_password">
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
                        <h1>Reset Password</h1>
                        <p className="text-secondary mb-4">Fill your email to verification</p>

                        {isSuccess ? (
                            <div className="alert alert-success" role="alert">
                                <p>Reset success please wait for the email.</p>
                            </div>
                        ) : null}

                        {errMsg ? (
                            <div className="alert alert-danger" role="alert">
                                {errMsg}
                            </div>
                        ) : null}
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
                        <button
                            onClick={handleForgotPassword}
                            type="button"
                            disabled={isLoading}
                            class="btn btn-primary"
                        >
                            {isLoading ? "Loading..." : "Reset"}
                        </button>
                        <p className="text-center mt-3">
                            Already set new password?{" "}
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

export default ForgotPassword;