import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CRMFramework from "../components/CRMFramework";
import Experience from "../components/Experience";
import About from "@/components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import CRMMaturityCheck from "../components/CRMMaturityCheck";


export default function Home() {
  return (
    <main className="bg-[#f3f3f1] text-black">
      <Navbar lang="en" />
      <Hero lang="en" />
      <Services lang="en" />
      <CRMMaturityCheck lang="en" />
      <CRMFramework lang="en" />
      <Experience lang="en" />
      <About lang="en" />
      <Contact lang="en" />
      <Footer lang="en" />
      


    </main>
  );
}

