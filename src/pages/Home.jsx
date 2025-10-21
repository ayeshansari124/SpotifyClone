import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import TrendingSongs from "../components/sections/TrendingSongs";
import PopularArtists from "../components/sections/PopularArtists";
import PopularAlbums from "../components/sections/PopularAlbums";

function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col sm:flex-row flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-full sm:w-[25vw] h-full">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide p-2 sm:p-6">
          <div className="bg-[#121212] rounded-lg p-2 sm:p-4 flex flex-col gap-4">
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
