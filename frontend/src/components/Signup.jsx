import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup successful");
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      toast.error("Error: " + errorMessage);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Modal close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-black">Sign Up</h3>

            {/* Name input */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: "Name is required" })}
              />
              <br />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  {errors.fullname.message}
                </span>
              )}
            </div>

            {/* Email input */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password input */}
            <div className="mt-4 space-y-2">
              <span className="text-black">Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Submit button */}
            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <Link to="/login" className="underline text-blue-500">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
