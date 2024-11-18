import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiGoogleFill } from "react-icons/ri";
import { RxGithubLogo } from "react-icons/rx";
import { authContext } from '../../provider/AuthProvider';

const Register = () => {
    const { createNewUser, signInWithGoogle, signInWithGitHub, user, setUser } =
      useContext(authContext);

    const handleGoogleSignIn = () => {
      signInWithGoogle()
        .then((result) => {
          setUser(result.user);
          navigate("/");
        })
        .catch((error) => console.log("ERROR", error.message));
    };

    const handleGitHubSignIn = () => {
      signInWithGitHub()
        .then((result) => {
          setUser(result.user);
          navigate("/");
        })
        .catch((error) => console.log("ERROR", error.message));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        console.log(name, email, photo, password);

        createNewUser(email, password);
    }

    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl rounded-none px-[53px] py-[56px]">
          <h2 className="text-2xl font-semibold text-[#403F3F] text-center pb-8 border-b-2">
            Register your account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            {/* {error.name && (
              <label className="label text-base font-semibold text-rose-600">
                {error.name}
              </label>
            )} */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter your photo url"
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
            <div className="form-control">
              <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
                Register
              </button>
            </div>
          </form>
          <p className="text-center font-semibold text-[#706F6F]">
            Already Have An Account ?{" "}
            <Link to={"/auth/login"} className="text-red-500 font-bold">
              Login
            </Link>
          </p>

          <div>
            <h2 className="text-lg font-semibold text-[#403F3F] mb-3">
              Login With
            </h2>
            <div className="flex flex-col gap-2">
              <button
                onClick={handleGoogleSignIn}
                className="btn text-blue-700 text-lg font-medium bg-white border-2 border-blue-700 hover:text-white hover:bg-blue-400 hover:border-none hover:shadow-lg"
              >
                <RiGoogleFill />
                Login with Google
              </button>
              <button
                onClick={handleGitHubSignIn}
                className="btn text-[#403F3F] text-lg font-medium bg-white border-2 border-[#403F3F] hover:text-white hover:bg-[#403F3F] hover:border-none hover:shadow-lg"
              >
                <RxGithubLogo />
                Login with GitHub
              </button>
              {/* {user && (
                <div>
                  <h2>User: {user.displayName}</h2>
                  <p>Email: {user.email}</p>
                  <img src={user.photoURL} alt="" />
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;