import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import TravelPlan from '@/components/TravelPlan/TravelPlan';
import TravelHistory from '@/components/TravelHistory/TravelHistory';
import Blog from '@/components/Blog/Blog';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TravelPlan />
      <TravelHistory />
      <Blog />
      <Contact />
    </main>
  );
}
