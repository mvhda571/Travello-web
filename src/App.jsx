import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Destinations from "./components/Destinations";
import BookTrip from "./components/BookTrip";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#181E4B]">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BookTrip />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;