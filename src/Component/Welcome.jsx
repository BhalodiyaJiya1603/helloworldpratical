import React from "react";

function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-lg">
        
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Hello React!
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Welcome to React Application
        </h2>

        <p className="text-lg text-gray-600 mb-2">
          This is my first React application.
        </p>

        <p className="text-lg text-gray-600">
          React makes it easy to build user interfaces.
        </p>

      </div>

    </div>
  );
}

export default Welcome;