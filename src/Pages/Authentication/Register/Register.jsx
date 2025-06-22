import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { Link } from "react-router";

const Register = () => {
  const [showHide, setShowHide] = useState(false);
  const { handleRegister } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterForm = (data) => {
    const { email, password } = data;

    handleRegister(email, password)
      .then((res) => {
        console.log(res);
        if (res) {
          toast.success("Register Done");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="card bg-base-100 w-full max-w-sm shrink-0">
        <div className="card-body">
          <h1 className="text-3xl text-center font-bold mb-2">Register Now!</h1>
          <form onSubmit={handleSubmit(handleRegisterForm)}>
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                required
                {...register("email", { required: true })}
                type="email"
                className="input"
                placeholder="Email"
              />

              {/* password */}
              <div className=" relative">
                <label className="label">Password</label>
                <input
                  {...register("password", { required: true, minLength: 6 })}
                  type={showHide ? "text" : "password"}
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

                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
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

              <button className="btn btn-primary text-black mt-4">Register</button>
            </fieldset>
            <p><small>Already have a account? <Link className="btn-link text-blue-500" to="/login">Login</Link> </small></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
