import { useState } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import ContactModal from '../../components/feature/ContactModal';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Differentiators from './components/Differentiators';
import PricingSection from './components/PricingSection';
import SavingsCounter from './components/SavingsCounter';
import ServicesOverview from './components/ServicesOverview';
import MilitarySection from './components/MilitarySection';
import OwnerPortal from './components/OwnerPortal';
import Testimonials from './components/Testimonials';
import OnboardingTimeline from './components/OnboardingTimeline';
import CTASection from './components/CTASection';

export default function Home() {
  const [modal, setModal] = useState<'analysis' | 'call' | null>(null);

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Navbar />
      <Hero onAnalysis={() => setModal('analysis')} onCall={() => setModal('call')} />
      <TrustBar />
      <Differentiators />
      <PricingSection onAnalysis={() => setModal('analysis')} />
      <SavingsCounter onAnalysis={() => setModal('analysis')} />
      <ServicesOverview />
      <MilitarySection onCall={() => setModal('call')} />
      <OwnerPortal onAnalysis={() => setModal('analysis')} />
      <Testimonials />
      <OnboardingTimeline />
      <CTASection onAnalysis={() => setModal('analysis')} onCall={() => setModal('call')} />
      <Footer />
      <ContactModal isOpen={modal !== null} onClose={() => setModal(null)} type={modal ?? 'analysis'} />
    </div>
  );
}
