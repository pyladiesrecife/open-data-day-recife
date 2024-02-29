import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <Hero />
        <Schedule />
        <Footer />
      </div>
    </>
  );
}

export default App;
