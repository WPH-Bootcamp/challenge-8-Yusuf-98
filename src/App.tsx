/**
 * Main App Component
 *
 * TODO untuk mentee:
 * 1. Import Home page component (setelah dibuat)
 * 2. Render Home component di sini
 * 3. Atau setup routing jika membuat multiple pages
 *
 * Current: Placeholder untuk testing Tailwind setup
 */

import Button from './components/ui/Button';
import Logo from './components/ui/Logo';
import CardService from './components/ui/CardService';
import webDevIcon from './assets/icons/Web-Development.png'
import TestimonialCard from './components/ui/TestimonialCard';
import QuoteSign from './assets/icons/tdesign_quote-filled.png'
import RatingStar from './assets/icons/star-icon.png'
import SarahTanImage from './assets/icons/Ellipse 1.png'

function App() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-5'>
      <Logo size='large' title='Your Logo'/>
      <Logo size='small' title='Your Logo'/>
      <CardService title='Web Development' description='Build fast, scalable, and SEO-friendly websites.' icon={webDevIcon}/>
      <Button
          type='button'
          onClick={() => {
            alert('aku nih');
          }}
          variant='primary'
          size='md'
          className='w-50'          
        >
          Let's Talk
        </Button>
        <TestimonialCard icon={QuoteSign} rating={RatingStar} description='"The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch."' name='Sarah Tan' role='Product Manager at Finovate' image={SarahTanImage}/>
    </div>
  );
}

export default App;
