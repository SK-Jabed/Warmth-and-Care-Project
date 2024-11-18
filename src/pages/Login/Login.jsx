import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../provider/AuthProvider';
import { RiGoogleFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";

const Login = () => {
    const contextValue = useContext(authContext);
    

    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none px-[53px] py-[56px]">
          <h2 className="text-2xl font-semibold text-[#403F3F] text-center pb-8 border-b-2">
            Login your account
          </h2>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* {error.login && (
              <label className="label text-base font-semibold text-red-600">
                {error.login}
              </label>
            )} */}
            <div className="form-control">
              <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
                Login
              </button>
            </div>
          </form>
          <p className="text-center font-semibold text-[#706F6F]">
            Dont’t Have An Account ?{" "}
            <Link to={"/auth/register"} className="text-red-500 font-bold">
              Register
            </Link>
          </p>

          <div>
            <h2 className="text-lg font-semibold text-[#403F3F] mb-3">
              Login With
            </h2>
            <div className="flex flex-col gap-2">
              <button className="btn text-blue-700 text-lg font-medium bg-white border-2 border-blue-700 hover:text-white hover:bg-blue-400 hover:border-none hover:shadow-lg">
                <RiGoogleFill />
                Login with Google
              </button>
              <button className="btn text-[#403F3F] text-lg font-medium bg-white border-2 border-[#403F3F] hover:text-white hover:bg-[#403F3F] hover:border-none hover:shadow-lg">
                <RxGithubLogo />
                Login with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;