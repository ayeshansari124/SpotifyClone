import React from "react";

const LibraryCard = ({ title, subtitle, buttonText }) => (
  <div className="flex flex-col bg-neutral-800 m-2 sm:m-5 rounded-lg p-2 ">
    <div className="m-2 sm:m-3 flex flex-col gap-1 text-gray-200">
      <span className="font-bold text-sm sm:text-base">{title}</span>
      <span className="text-xs sm:text-sm">{subtitle}</span>
    </div>
    <button className="w-[110px] sm:w-[130px] bg-white text-black rounded-full py-1 sm:py-2 m-2 font-bold hover:scale-105 transition-all duration-500 ease-in text-xs sm:text-sm">
      {buttonText}
    </button>
  </div>
);

const FooterLinks = () => {
  const links = [
    "Legal",
    "Safety & Privacy Centre",
    "Privacy Policies",
    "Cookies",
    "About Ads",
    "Accessibility",
  ];
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 p-2 sm:p-3 m-2 sm:m-5 text-xs sm:text-sm text-gray-400">
      {links.map((link, i) => (
        <span key={i} className="cursor-pointer hover:underline">{link}</span>
      ))}
    </div>
  );
};

const LanguageSelector = () => (
  <div className="flex items-center m-2 sm:m-5 w-[100px] sm:w-[120px] p-1 sm:p-2 rounded-full border-2 border-neutral-800 font-bold hover:scale-110 hover:border-white transition-all duration-500 ease-in cursor-pointer text-xs sm:text-sm text-gray-200">
    <img src="./images/svg/globe.svg" alt="globe" className="h-5 sm:h-6 w-5 sm:w-6 m-1" />
    <button>English</button>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-full sm:w-[25vw] flex flex-col bg-[#121212] rounded-lg m-2 fixed">
      {/* Header */}
      <div className="flex justify-between items-center h-[10vh] p-2 sm:p-4 font-bold">
        <span className="text-sm sm:text-base text-gray-200">Your Library</span>
        <img
          src="./images/svg/add.svg"
          alt="add"
          className="h-6 sm:h-8 w-6 sm:w-8 rounded-full m-1 p-1 hover:scale-110 hover:bg-[#242424] cursor-pointer"
        />
      </div>

      <LibraryCard
        title="Create Your First Playlist"
        subtitle="It’s easy, we’ll help you"
        buttonText="Create Playlist"
      />
      <LibraryCard
        title="Let’s find some podcasts to follow"
        subtitle="We’ll keep you updated on new episodes"
        buttonText="Browse Podcasts"
      />

      <FooterLinks />

      <LanguageSelector />
    </aside>
  );
};

export default Sidebar;
