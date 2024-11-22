import React from "react";
import { User, FileImage, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = ({ userData }) => {
  // Check if userData is null or missing fields
  if (!userData) {
    return (
      <div className="w-full bg-gradient-to-br from-[#B9E5E8] to-[#7AB2D3] p-8 rounded-2xl shadow-2xl my-10 mr-10 text-center">
        <div className="bg-[#7AB2D3] rounded-full p-4 inline-block mb-4">
          <User className="w-12 h-12 text-[#4A628A]" />
        </div>

        <h2 className="text-3xl font-bold text-[#4A628A] mb-4">No Profile Data</h2>
        <p className="text-[#4A628A] mb-6">Create a profile to unlock personalized insights</p>

        {/* Button to redirect to profile creation */}
        <Link to="/profile">
          <button className="bg-[#DFF2EB] text-[#4A628A] px-6 py-3 rounded-lg hover:bg-[#B9E5E8] transition-colors">
            Create Profile
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full grid grid-cols-3 grid-rows-2 gap-4 bg-white rounded-2xl shadow-2xl p-6">
      {/* Name Section */}
      <div className="col-span-2 flex items-center space-x-4 bg-[#DFF2EB] p-4 rounded-lg">
        <User className="w-10 h-10 text-[#4A628A]" />
        <div>
          <p className="text-sm text-[#4A628A] font-medium">Name</p>
          <p className="text-xl font-bold text-[#4A628A]">{userData.name || "Not Provided"}</p>
        </div>
      </div>

      {/* Age Section */}
      <div className="row-start-2 col-span-2 flex items-center space-x-4 bg-[#B9E5E8] p-4 rounded-lg">
        <Calendar className="w-10 h-10 text-[#4A628A]" />
        <div>
          <p className="text-sm text-[#4A628A] font-medium">Age</p>
          <p className="text-xl font-bold text-[#4A628A]">
            {userData.age ? `${userData.age} years` : "Not Provided"}
          </p>
        </div>
      </div>

      {/* Uploaded File Section (Profile Picture) */}
      {userData.file && (
        <div className="row-span-2 col-start-3 bg-[#DFF2EB] p-4 rounded-lg flex items-center justify-center">
          <div className="relative group w-full h-full">
            <img
              src={userData.file}
              alt="Uploaded file"
              className="w-full h-full object-cover rounded-lg shadow-md 
                transition-transform duration-300 
                group-hover:scale-105 group-hover:shadow-xl"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-0 
              group-hover:bg-opacity-20 transition-all duration-300 
              rounded-lg flex items-center justify-center">
              <FileImage
                className="w-12 h-12 text-white 
                opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
