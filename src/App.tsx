import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/layout/Navbar';
import PartnerList from './components/ui/PartnerList';
import TestimonialsSection from './components/sections/TestimonialsSection';
import StatSection from './components/sections/StatSection';
import ProcessTimeline from './components/sections/ProcessSection';
import ServicesSection from './components/sections/ServicesSection';
import HeroSection from './components/sections/HeroSection';
import IndustrySection from './components/sections/IndustrySection';
import PortfolioSection from './components/sections/PortfolioSection';
import FAQSection from './components/sections/FAQSection';
import ConsultationCard from './components/ui/ConsultationCard';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <PartnerList />
      <StatSection />
      <ProcessTimeline />
      <ServicesSection />
      <IndustrySection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
    </ThemeProvider>
  );
}

export default App;
