import Hero from "./components/Hero";
import SmoothScroll from "./components/SmoothScroll";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Work />
      <Footer />
      <SmoothScroll />
    </div>
  );
}

export default App;
