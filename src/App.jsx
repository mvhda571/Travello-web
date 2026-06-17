import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";

function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#181E4B]">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
    </main>
  );
}

export default App;