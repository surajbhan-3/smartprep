import React from 'react';
import ChatBox from '../Components/ChatBox';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
   
  return (
    
    <div className="bg-gray-200 flex flex-col justify-between flex-grow">
         <Navbar/>
      <header className="bg-white shadow">
        {/* <nav className="container mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold">Welcome to SmartPrep</h1>
        </nav> */}
      </header>
      <div className="flex-1 container mx-auto py-8 px-6 flex">
        <div className="w-1/4 bg-white rounded-lg shadow-lg p-6 mr-4">
          {/* Sidebar content */}
          {/* <h2 className="text-xl font-bold mb-4">Sidebar</h2> */}
          {/* Add sidebar content here */}
          <Sidebar/>
        </div>
        <div className="w-3/4 bg-white rounded-lg shadow-lg p-6">
          {/* <h2 className="text-xl font-bold mb-4">Chat Logs</h2> */}
          {/* Add chat logs display here */}
           <ChatBox/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;