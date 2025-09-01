import React from "react";

const LibraryCard = ({ title, subtitle, buttonText }) => (
  <div className="flex flex-col bg-neutral-800 m-5 rounded-lg p-2">
    <div className="m-3 flex flex-col gap-1">
      <span className="font-bold">{title}</span>
      <span>{subtitle}</span>
    </div>
    <button className="w-[130px] bg-white text-black rounded-full py-2 m-2 font-bold hover:scale-105 transition-all duration-500 ease-in">
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
    <div className="flex flex-wrap gap-4 p-3 m-5 text-sm text-gray-400">
      {links.map((link, i) => (
        <span key={i} className="cursor-pointer hover:underline">
          {link}
        </span>
      ))}
    </div>
  );
};

const LanguageSelector = () => (
  <div className="flex items-center m-5 w-[120px] p-1 rounded-full border-2 border-neutral-800 font-bold hover:scale-110 hover:border-white transition-all duration-500 ease-in cursor-pointer">
    <img
      src="./images/svg/globe.svg"
      alt="globe"
      className="h-[30px] w-[30px] m-1 p-1"
    />
    <button>English</button>
  </div>
);

const Sidebar = () => {
  return (
    <aside className="w-[25vw] flex flex-col bg-[#121212] rounded-lg m-2">
      {/* Header */}
      <div className="flex justify-between items-center h-[10vh] p-4 font-bold">
        <span>Your Library</span>
        <img
          src="./images/svg/add.svg"
          alt="add"
          className="h-[30px] w-[30px] rounded-full m-1 p-1 hover:scale-110 hover:bg-[#242424] cursor-pointer"
        />
      </div>

      {/* Reusable Cards */}
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

      {/* Footer Links */}
      <FooterLinks />

      {/* Language Selector */}
      <LanguageSelector />
    </aside>
  );
};

export default Sidebar;
