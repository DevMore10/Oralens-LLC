import React, { useState } from "react";
import { Upload } from "lucide-react";
import { Navigate } from "react-router-dom";

// Profile component
const Profile = ({ setUserData }) => {
  // State hooks to store user inputs
  const [name, setName] = useState(""); // Stores the name of the user
  const [age, setAge] = useState(""); // Stores the age of the user
  const [file, setFile] = useState(null); // Stores the uploaded file (profile picture)
  const [error, setError] = useState(""); // Stores error messages
  const [redirectToDashboard, setRedirectToDashboard] = useState(false); // Manages redirect to dashboard

  // Handles the file input change event
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]; // Get the selected file
    if (selectedFile && (selectedFile.type === "image/png" || selectedFile.type === "image/jpeg")) {
      setFile(selectedFile); // Set the selected file
      setError(""); // Clear any previous error
    } else {
      setError("Please upload a PNG or JPEG file."); // Show error if file type is invalid
    }
  };

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior

    // Check if all fields are filled
    if (!name || !age || !file) {
      setError("All fields are required."); // Show error if any field is empty
      return;
    }

    // Log the file to the console (for debugging purposes)
    console.log(file);

    // Set user data in the parent component
    setUserData({
      name,
      age,
      file: URL.createObjectURL(file), // Create object URL for the uploaded file
    });

    // Redirect to the Dashboard after successful form submission
    setRedirectToDashboard(true);
  };

  // Redirect to Dashboard
  if (redirectToDashboard) {
    return <Navigate to="/" />; // Redirect if the form was successfully submitted
  }

  return (
    <div className="w-full grid grid-cols-3 gap-6 bg-white rounded-2xl shadow-2xl p-8 mt-5">
      {/* Form Section */}
      <div className="col-span-2">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#4A628A]">Create Profile</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6">
          {/* Name Input Field */}
          <div>
            <label className="block text-[#7AB2D3] mb-2 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update name state on input change
              placeholder="Enter your name"
              required
              className="w-full p-3 border-2 border-[#DFF2EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7AB2D3] transition-all"
            />
          </div>

          {/* Age Select Field */}
          <div>
            <label className="block text-[#7AB2D3] mb-2 font-medium">Age</label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)} // Update age state on selection change
              required
              className="w-full p-3 border-2 border-[#DFF2EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7AB2D3] transition-all">
              <option value="">Select Age</option>
              {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                <option
                  key={num}
                  value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* File Upload Field */}
          <div>
            <label className="block text-[#7AB2D3] mb-2 font-medium">Upload Photo</label>
            <div className="flex items-center">
              <input
                type="file"
                onChange={handleFileChange} // Handle file input change
                accept="image/png, image/jpeg" // Accept only PNG or JPEG files
                className="hidden"
                id="file-upload"
              />
              {/* File Upload Button */}
              <label
                htmlFor="file-upload"
                className="flex items-center px-4 py-2 bg-[#DFF2EB] text-[#4A628A] rounded-lg cursor-pointer hover:bg-[#B9E5E8] transition-colors">
                <Upload className="mr-2" />
                {file ? file.name : "Choose File"} {/* Display file name or "Choose File" */}
              </label>
            </div>
          </div>

          {/* Error Message Display */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#4A628A] text-white font-semibold rounded-lg hover:bg-[#7AB2D3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7AB2D3]">
            Create Profile
          </button>
        </form>
      </div>

      {/* Profile Picture Preview Section */}
      <div className="flex items-center justify-center bg-[#DFF2EB] rounded-lg p-6">
        <div className="w-full h-full flex items-center justify-center">
          {/* Show profile picture if uploaded */}
          {file ? (
            <img
              src={URL.createObjectURL(file)} // Display the uploaded file as an image
              alt="Profile Preview"
              className="max-w-full max-h-full object-cover rounded-lg shadow-lg"
            />
          ) : (
            // Default message if no file is uploaded
            <div className="flex flex-col items-center text-[#4A628A]">
              <Upload className="w-16 h-16 mb-4" />
              <p className="text-center">Your profile picture will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
