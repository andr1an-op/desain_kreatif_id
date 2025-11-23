import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ExtraServices from "./components/ExtraServices";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <ExtraServices />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/628xxxxxxx?text=Halo%20DesainKreatif.id%20saya%20ingin%20pesan%20desain"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl text-white text-2xl"
      >
        📞
      </a>

      <Footer />
    </>
  );
}
