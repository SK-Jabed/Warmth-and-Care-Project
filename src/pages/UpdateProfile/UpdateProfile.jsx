import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { authContext } from "../../provider/AuthProvider";
import Navbar from "../../components/Navbar/Navbar";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const UpdateProfile = () => {
  const { user } = useContext(authContext);
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [name, setName] = useState(user.displayName || "");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Update user profile in Firebase
      await updateProfile(user, { displayName: name, photoURL });
      toast.success("Profile updated successfully!");
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
      <div className="update-profile">
        <Navbar></Navbar>
      <h2 className="text-center text-xl font-bold mt-8 underline">Update Profile</h2>

      <form onSubmit={handleSubmit} className="card-body mb-20">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your updated name"
            className="input input-bordered"
            onChange={(e) => setName(e.target.value)}
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
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            value={photoURL}
            placeholder="Enter your photo url"
            className="input input-bordered"
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <button className="btn btn-neutral rounded-md text-white font-semibold text-base">
            Update Information
          </button>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default UpdateProfile;
