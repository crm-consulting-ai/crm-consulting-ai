import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CRMFramework from "@/components/CRMFramework";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CRMMaturityCheck from "../../components/CRMMaturityCheck";

export default function SpanishHome() {
  return (
    <main className="bg-[#f3f3f1] text-black">
      <Navbar lang="es" />
      <Hero lang="es" />
      <Services lang="es" />
      <CRMMaturityCheck lang="es" />
      <CRMFramework lang="es" />
      <Experience lang="es" />
      <About lang="es" />
      <Contact lang="es" />
      <Footer lang="es" />
    </main>
  );
}