import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { authContext } from "../../provider/AuthProvider";

const ForgotPassword = () => {
  const { email } = useContext(authContext); // Access the email from the context
  const [userEmail, setUserEmail] = useState(email || ""); // Initialize with email from context


  const handlePasswordReset = async () => {
    try {
      if (!userEmail) {
        alert("Please enter a valid email address.");
        return;
      }
      await sendPasswordResetEmail(auth, userEmail);
      alert("Password reset email sent! Check your inbox.");
      window.location.href = "https://mail.google.com/";
    } catch (error) {
      console.error("Error sending reset email:", error.message);
      alert("Failed to send password reset email.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-xl shadow-2xl px-[53px] py-[56px]">
        <h2 className="text-2xl font-semibold text-[#403F3F] text-center pb-8 border-b-2">
          Reset Your Password
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)} // Update local state
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-4">
            <button
              type="button"
              onClick={handlePasswordReset}
              className="btn btn-neutral rounded-md text-white font-semibold text-base"
            >
              Reset Password
            </button>
          </div>
        </form>
        <p className="text-center font-semibold text-[#706F6F] mt-4">
          Remembered your password?{" "}
          <Link to="/auth/login" className="text-red-500 font-bold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
