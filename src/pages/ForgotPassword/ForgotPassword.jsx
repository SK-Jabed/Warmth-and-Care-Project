import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";
 // Import your Firebase configuration.

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Pre-fill email if passed from the Login component.
  const [email, setEmail] = useState(location.state?.email || "");

  const handlePasswordReset = async () => {
    try {
      if (!email) {
        alert("Please enter a valid email address.");
        return;
      }
      // Trigger Firebase's password reset email.
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
      navigate("https://mail.google.com/"); // Redirect to Gmail.
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
