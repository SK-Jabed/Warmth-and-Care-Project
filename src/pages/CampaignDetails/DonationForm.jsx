import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    quantity: "",
    itemType: "",
    pickupLocation: "",
    additionalNotes: "",
  });

//   Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Display toast notification
    toast.success("Thank you! We will reach your destination soon.");

    // Clear form data
    setFormData({
      quantity: "",
      itemType: "",
      pickupLocation: "",
      additionalNotes: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg my-20">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Donate Winter Clothes
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Quantity */}
        <div>
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity of Items
          </label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 2 jackets, 3 blankets"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Item Type */}
        <div>
          <label
            htmlFor="itemType"
            className="block text-sm font-medium text-gray-700"
          >
            Item Type
          </label>
          <select
            name="itemType"
            id="itemType"
            value={formData.itemType}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="" disabled>
              Select Item Type
            </option>
            <option value="blanket">Blanket</option>
            <option value="jacket">Jacket</option>
            <option value="sweater">Sweater</option>
          </select>
        </div>

        {/* Pickup Location */}
        <div>
          <label
            htmlFor="pickupLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Pickup Location
          </label>
          <input
            type="text"
            name="pickupLocation"
            id="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Additional Notes */}
        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-sm font-medium text-gray-700"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            name="additionalNotes"
            id="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            placeholder="Add any specific instructions or notes"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-md hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition duration-300 ease-in-out"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
