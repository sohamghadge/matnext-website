import Header from './components/Header';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import LiveMetrics from './components/LiveMetrics';
import Customers from './components/Customers';
import WhyMatnext from './components/WhyMatnext';
import ReadySection from './components/ReadySection';
import LearnMore from './components/LearnMore';
import AICoreSection from './components/AICoreSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureGrid />
        <LiveMetrics />
        <Customers />
        <AICoreSection />
        <WhyMatnext />
        <Testimonials />
        <ReadySection />
        <LearnMore />
        <Footer />
      </main>
    </>
  );
}
