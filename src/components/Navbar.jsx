import React from "react";

const leftIcons = [
  { src: "/images/svg/icon.svg", alt: "Logo", type: "logo" },
  { src: "/images/svg/home.svg", alt: "Home", type: "home" },
];

const rightOptions = [
  { label: "Premium", to: "/premium" },
  { label: "Support", to: "/support" },
  { label: "Download", to: "/download" },
];

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 bg-black text-white w-full flex justify-between items-center px-4 py-3">
      <div className="left flex items-center gap-4">
        {leftIcons.map((icon, idx) => (
          <div
            key={idx}
            className={`${
              icon.type === "logo" ? "icon" : "home hover:cursor-pointer hover:scale-110"
            } bg-[#242424] h-10 w-10 rounded-full p-1 flex items-center justify-center transition bg-neutral-800`}
          >
            <img src={icon.src} alt={icon.alt} className="h-full" />
          </div>
        ))}

        <div className="searchbar flex items-center bg-[#242424] rounded-full px-3 py-1 transition-all duration-500 ease-in hover:bg-[#121212] gap-2 bg-neutral-800">
          <img
            src="/images/svg/search.svg"
            alt="Search Icon"
            className="h-6 w-6 hover:cursor-pointer hover:scale-110 transition"
          />
          <input
            type="text"
            placeholder="What do you want to play?!"
            className="bg-transparent text-white px-4 py-2 w-[300px] font-semibold border-none focus:outline-none placeholder:text-sm"
          />
          <span className="w-px h-6 bg-gray-500"></span>
          <img
            src="/images/svg/briefcase.svg"
            alt="Briefcase Icon"
            className="h-6 w-6 hover:cursor-pointer hover:scale-110 transition"
          />
        </div>
      </div>

      <div className="right flex items-center gap-4 text-gray-300">
        <div className="options flex gap-4">
          {rightOptions.map((opt, idx) => (
            <button key={idx} className="hover:scale-105 transition">
              {opt.label}
            </button>
          ))}
        </div>

        <span className="w-px h-6 bg-gray-500"></span>

        <div className="install flex items-center gap-2 hover:scale-105 cursor-pointer transition">
          <img src="/images/svg/download.svg" alt="Download" className="h-6 w-6" />
          <button>Install App</button>
        </div>

        <button className="signup hover:scale-105 transition">Sign Up</button>
        <button className="login bg-white text-black rounded-full px-5 py-2 font-bold hover:scale-110 transition-all duration-500 ease-in">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
