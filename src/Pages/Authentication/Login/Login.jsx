import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import { Link } from "react-router";

const Login = () => {
  const [showHide, setShowHide] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

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
        </div>
      </div>
    </div>
  );
};

export default Login;
