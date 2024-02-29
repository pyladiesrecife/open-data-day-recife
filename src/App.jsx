import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Schedule />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default App;
