import React from 'react';
import user from '../../assets/user.png';

const Navbar = () => {
  return (
    <div className="bg-slate-700 flex justify-between items-center h-[50px] p-2 text-slate-300 rounded-tl-md">
      <span className="text-md">HRK Chat</span>
      <div className="flex items-center gap-1">
        <span className="text-xs">Harish</span>
        <img
          src={user}
          alt="user logo"
          className="w-[40px] h-[40ox] rounded-full p-2"
        />

        <button className="bg-white text-sm px-2 rounded-sm text-slate-500">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
