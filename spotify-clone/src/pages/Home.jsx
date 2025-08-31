import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        {/* Main content goes here */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
