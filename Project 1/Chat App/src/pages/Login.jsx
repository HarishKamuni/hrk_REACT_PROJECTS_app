import React from 'react';

const Login = () => {
  return (
    <div className="bg-blue-200 h-screen flex justify-center items-center">
      <div className="bg-white flex flex-col items-center w-[350px] p-4 rounded-md shadow-lg">
        <h1 className="text-blue-500 text-xl font-bold mb-2 hover:underline underline-offset-4 cursor-pointer">
          HRK CHAT
        </h1>
        <p className="text-sm uppercase font-thin">Login</p>
        <form className="flex flex-col gap-4 w-full p-5">
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

          <button className="bg-blue-400 py-2 px-4 rounded-sm text-white font-bold hover:bg-blue-300 mt-2">
            Sign In
          </button>
        </form>
        <p className="text-xs text-slate-400 ">
          You don't have an account?
          <span className="px-2 cursor-pointer hover:underline underline-offset-2 hover:text-blue-400">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
