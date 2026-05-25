import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/layout/Navbar';
import PartnerList from './components/ui/PartnerList';
import TestimonialsSection from './components/sections/TestimonialsSection';
import StatSection from './components/sections/StatSection';
import ServicesSection from './components/sections/ServicesSection';
import HeroSection from './components/sections/HeroSection';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <PartnerList />
      <StatSection />
      <ServicesSection />
      <TestimonialsSection />
    </ThemeProvider>
  );
}

export default App;
