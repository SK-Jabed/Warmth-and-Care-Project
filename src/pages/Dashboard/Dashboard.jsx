import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(authContext);

  return (
    <div className="dashboard">
      <h1>Welcome, {user.displayName || "User"}!</h1>
      <div className="profile-info">
        <img src={user?.photoURL || "default-profile.jpg"} alt="Profile" />
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Name:</strong> {user.displayName || "Not Provided"}
        </p>
        <Link to="/update-profile">
          <button className="btn">Update Profile</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
