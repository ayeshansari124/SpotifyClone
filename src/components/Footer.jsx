import React from "react";

const sections = [
  {
    title: "Company",
    links: ["About", "Jobs", "For The Record"],
  },
  {
    title: "Communities",
    links: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
  },
  {
    title: "Useful Links",
    links: ["Support", "Free Mobile App", "Popular By Country"],
  },
  {
    title: "Spotify Plans",
    links: ["Premium Individual", "Premium Duo", "Premium Family", "Premium Student", "Spotify Free"],
  },
];

const socials = [
  { src: "./images/svg/insta.svg", alt: "Instagram" },
  { src: "./images/svg/twitter.svg", alt: "Twitter" },
  { src: "./images/svg/facebook.svg", alt: "Facebook" },
];

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-around m-5 p-5 h-[15vw]">
        {sections.map((section, idx) => (
          <div key={idx} className="flex flex-col">
            <span className="font-bold">{section.title}</span>
            {section.links.map((link, i) => (
              <span
                key={i}
                className="hover:cursor-pointer hover:underline"
              >
                {link}
              </span>
            ))}
          </div>
        ))}

        {/* Socials */}
        <div className="flex">
          {socials.map((social, idx) => (
            <div
              key={idx}
              className="home hover:cursor-pointer hover:scale-110 bg-darkgray h-[40px] w-[40px] rounded-full m-[5px] p-[5px] flex items-center justify-center"
            >
              <img src={social.src} alt={social.alt} className="invert" />
            </div>
          ))}
        </div>
      </footer>

      <hr />

      <footer className="m-5 p-5">
        <span>&copy; 2025 Spotify AB</span>
      </footer>
    </>
  );
};

export default Footer;
