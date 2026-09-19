import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedVideo from '@/components/FeaturedVideo';
import Videos from '@/components/Videos';
import Categories from '@/components/Categories';
import Gallery from '@/components/Gallery';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import SocialMedia from '@/components/SocialMedia';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedVideo />
        <Videos />
        <Categories />
        <Gallery />
        <Achievements />
        <Testimonials />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
