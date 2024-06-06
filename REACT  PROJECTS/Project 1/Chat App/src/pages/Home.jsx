import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Chat from '../components/Chat/Chat';

const Home = () => {
  return (
    <div className="bg-blue-200 h-screen flex justify-center items-center ">
      <div className="border-2 border-emerald-50 w-[65%] h-[80%] rounded-md flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
