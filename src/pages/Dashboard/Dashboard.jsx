import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(authContext);

  return (
    <div className="dashboard container w-11/12 mx-auto my-20">
      {/* Welcome Header */}
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Welcome, {user.displayName || "User"}!
      </h1>

      {/* Profile Card */}
      <div className="profile-info max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Profile Image */}
        <div className="flex justify-center bg-gray-100 p-6">
          <img
            src={user?.photoURL || "default-profile.jpg"}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />
        </div>

        {/* User Info */}
        <div className="p-6 text-center">
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-blue-500">Email:</strong> {user.email}
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong className="text-blue-500">Name:</strong>{" "}
            {user.displayName || "Not Provided"}
          </p>

          {/* Update Profile Button */}
          <Link to="/update-profile">
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
