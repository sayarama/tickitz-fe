import React from "react";
import "../style/Auth.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [errMsg, setErrMsg] = React.useState(null);

    React.useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("profile")) { 
            navigate("/");
        }
    }, []);

    const handleLogin = () => {
        setIsLoading(true);
        setErrMsg(null);

        axios
            .post("https://tickitz-be.onrender.com/aulia/auth/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                const token = response?.data?.data?.token;
                const profile = response?.data?.data?.result;

                localStorage.setItem("token", token);
                localStorage.setItem("profile", JSON.stringify(profile));
                setIsSuccess(true);
                
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            })
            .catch((error) => {
                const errEmail = error?.response?.data?.messages?.email?.message;
                const errPassword = error?.response?.data?.messages?.password?.message;
                setIsSuccess(false);
                setErrMsg(errEmail ?? errPassword ??error?.response?.data?.messages ?? "Something wrong in our app");
            })
            .finally(() => { 
                setIsLoading(false);
            });
    };
    return (
        <div id="page_login">
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

                        {isSuccess ? (
                            <div className="alert alert-success" role="alert">
                                <p>Login success, please wait for redirect to our app</p>
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
                        <button
                            onClick={handleLogin}
                            type="button"
                            disabled={isLoading}
                            class="btn btn-primary"
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

export default Login;
