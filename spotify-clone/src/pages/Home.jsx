import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import TrendingSongs from "../components/sections/TrendingSongs";
import PopularArtists from "../components/sections/PopularArtists";
import PopularAlbums from "../components/sections/PopularAlbums";

function Home() {
  return (
    <div className="bg-black h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[25vw] h-full bg-black">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          <div className="ml-6 mt-2 bg-[#121212] rounded-lg p-4">
            <TrendingSongs />
            <PopularArtists />
            <PopularAlbums />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
