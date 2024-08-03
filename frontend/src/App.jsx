import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo1 } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 sm:px-8 px-4 py-4 shadow-md">
        <Link to="/">
          <img src={logo1} alt="logo" className="w-28 object-contain" />
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-white text-indigo-600 px-4 py-2 rounded-md shadow hover:bg-indigo-100 transition duration-300 ease-in-out"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-b from-white to-indigo-100 min-h-[calc(100vh-80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
