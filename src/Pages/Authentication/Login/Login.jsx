import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { auth } from "../../../firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
// import PasswordReset from "../PasswordReset/PasswordReset";

const Login = () => {
  const [showHide, setShowHide] = useState(false);
  const { handleLogIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  // const emailRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    handleLogIn(email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Login Done");
          navigate(from)
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleResetBtn = () => {
    const email = getValues("email");
    console.log(email);

    setErrorMessage(" ");

    // Send a password reset email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("A Password rest email is send. Please check your email.");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold mb-2">Login Now!</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                required
                type="email"
                {...register("email")}
                className="input"
                placeholder="Email"
              />

              {/* password */}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showHide ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                  })}
                  className="input "
                  placeholder="Password"
                />

                <span
                  onClick={() => setShowHide(!showHide)}
                  className="absolute cursor-pointer mt-3 -ml-8 z-15"
                >
                  {showHide ? (
                    <AiTwotoneEyeInvisible size={18} />
                  ) : (
                    <AiTwotoneEye size={18} />
                  )}
                </span>

                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password Must be 6 characters or longer
                  </p>
                )}
              </div>
              <div onClick={handleResetBtn} className="cursor-pointer">
                {/* <Link to="/PasswordReset" className="link link-hover"> */}
                Forgot password?
                {/* </Link> */}
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              )}
              <button className="btn btn-primary text-black mt-4">Login</button>
            </fieldset>
            <p>
              <small>
                New to this website?{" "}
                <Link className="btn-link text-blue-500" to="/register">
                  Register
                </Link>{" "}
              </small>
            </p>
          </form>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
