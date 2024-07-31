import Hero from './components/Hero';
import FeaturedCources from './components/FeaturedCources';
import WhyChoosUs from './components/WhyChoosUs';
import Testimonials from './components/Testimonials';
import UpcomingWebinars from './components/UpcomingWebinars';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedCources />
      <WhyChoosUs />
      <Testimonials />
      <UpcomingWebinars />
    </main>
  );
}
