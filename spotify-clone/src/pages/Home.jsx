import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";

function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <MainSection />
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Home;