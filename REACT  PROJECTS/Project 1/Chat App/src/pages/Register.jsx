import React from 'react';
import pic from '../assets/defaultpic.png';

const Register = () => {
  return (
    <div className="bg-blue-200 h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col items-center w-[350px] p-4 rounded-md shadow-lg">
        <h1 className="text-blue-500 text-xl font-bold mb-2 hover:underline underline-offset-4 cursor-pointer">
          HRK CHAT
        </h1>
        <p className="text-sm uppercase font-thin">Register</p>
        <form className="flex flex-col gap-4 w-full p-5">
          <input
            type="text"
            placeholder="Username"
            className=" outline-none border-b-2 border-blue-200 p-1"
          />
          <input
            type="text"
            placeholder="Email"
            className=" outline-none border-b-2 border-blue-200 p-1"
          />
          <input
            type="text"
            placeholder="Password"
            className=" outline-none border-b-2 border-blue-200 p-1"
          />
          <input type="file" id="file" className=" hidden" />
          <label
            htmlFor="file"
            className="flex items-center gap-2 cursor-pointer relative"
          >
            <img src={pic} alt="img" className="w-[60px] rounded-md " />
            <span className="text-xl text-blue-500 font-extrabold absolute -top-2 left-10">
              +
            </span>
            <span className="text-sm text-slate-400">Add profile pic</span>
          </label>
          <button className="bg-blue-400 py-2 px-4 rounded-sm text-white font-bold hover:bg-blue-300 mt-2">
            Sign Up
          </button>
        </form>
        <p className="text-xs text-slate-400 ">
          You do have an account?
          <span className="px-2 cursor-pointer hover:underline underline-offset-2 hover:text-blue-400">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
