import React from "react";
import "./assets/css/profile.css";
const UserProfile = () => {
  const user = {
    name: "فرزام ولیزاده",
    email: "farzam@example.com",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    address: "آدرس ناکجا آباد",
    joinDate: "۱۴۰۰/۰۵/۲۰",
    bio: "این بیو تست پروفایل کاربری است",
  };

  return (
<div
  className="bg-gradient-to-br from-brown-100 to-brown-200 text-black h-full flex flex-col items-center justify-start py-8 px-4"
>

      <div className="max-w-md w-full  p-6 transition duration-500">

      <div className="flex items-center space-x-4 p-4">
        <img
          src="https://via.placeholder.com/250"
          alt="User Avatar"
          className="w-24 h-24 rounded-full border-4 border-blue-200 shadow-md"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold text-black mr-4">{user.name}</h1>
          <p className="mt-4 mr-8 text-gray-600 text-sm text-justify">{user.bio}</p>
        </div>
      </div>


        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <span className="w-10 h-10 flex justify-center items-center bg-blue-200 text-blue-800 rounded-full shadow-md ml-2">
              <i className="fas fa-envelope"></i>
            </span>
            <p className="ml-4 text-black">ایمیل: {user.email}</p>
          </div>
          <div className="flex items-center">
            <span className="w-10 h-10 flex justify-center items-center bg-blue-200 text-blue-800 rounded-full shadow-md ml-2">
              <i className="fas fa-phone"></i>
            </span>
            <p className="ml-4 text-black">تلفن: {user.phone}</p>
          </div>
          <div className="flex items-center">
            <span className="w-10 h-10 flex justify-center items-center bg-blue-200 text-blue-800 rounded-full shadow-md ml-2">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <p className="ml-4 text-black">آدرس: {user.address}</p>
          </div>
          <div className="flex items-center">
            <span className="w-10 h-10 flex justify-center items-center bg-blue-200 text-blue-800 rounded-full shadow-md ml-2">
              <i className="fas fa-calendar-alt"></i>
            </span>
            <p className="ml-4 text-black">تاریخ عضویت: {user.joinDate}</p>
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button className="text-white px-4 py-2 rounded-lg hover:bg-blue-500 shadow-md transition duration-300 btn-edit">
            ویرایش 
          </button>
          <button className="text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition duration-300 btn-logout">
            خروج
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
