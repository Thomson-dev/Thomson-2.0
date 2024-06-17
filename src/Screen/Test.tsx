// src/App.js
import React, { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <button
        className="p-2 bg-blue-500 text-white rounded"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="p-2 bg-red-500 text-white rounded absolute top-2 right-2"
          onClick={toggleSidebar}
        >
          Close
        </button>
        <ul className="p-4">
          <li className="mb-2">Link 1</li>
          <li className="mb-2">Link 2</li>
          <li className="mb-2">Link 3</li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className={`transition-all duration-300 ${isOpen ? "ml-64" : ""}`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            fringilla, justo id sollicitudin ullamcorper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
