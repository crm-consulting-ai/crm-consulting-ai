import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CRMFramework from "../components/CRMFramework";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f3f3f1] text-black">
      <Navbar />
      <Hero />
      <Services />
      <CRMFramework />
      <Experience />
      <Contact />
      <Footer />


    </main>
  );
}

