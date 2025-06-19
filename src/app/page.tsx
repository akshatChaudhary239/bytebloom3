import About from "@/components/About";
import Navbar from "../components/Navbar";
import Banner from "@/components/Banner";
// import Apple from "../components/Apple"
import Contact from "@/components/Contact";
import PricingSection from "@/components/Pricing";
import Footer from "@/components/Footer";
// import Flipper from "@/components/Flipper";



export default function Home() {
  return (
   <>
    <div>
     
<Navbar/>
<Banner/>

      <section id="about" className="min-h-screen">
       <About/>
      </section>



      <section id="pricing" className="min-h-screen ">
       <PricingSection/>
      </section>

      <section id="contact" className="min-h-screen">
       <Contact/>
      </section>
      <Footer/>
    </div>
   </>
  );
}
