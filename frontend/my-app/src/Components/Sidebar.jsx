import React from 'react';

const Sidebar = () => {
    return (
        <div className="flex h-screen">
          <div className="bg-gray-200 w-64 flex flex-col justify-between">
            <div className="p-4">
              {/* New Chat Option */}
              <div className="bg-white p-4 rounded-md shadow mb-4">
                <h2 className="text-lg font-semibold">New Chat</h2>
                {/* Chat form or button can be added here */}
              </div>
            </div>
    
          
           
          </div>
        </div>
      );
    };


export default Sidebar;
