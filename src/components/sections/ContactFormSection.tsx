import ContactFormCard from '../ui/ContactFormCard';
import { contactFormData } from '../../data/contactFormData';

export default function ContactFormSection() {
  return (
    <section
      id='contact'
      className='
        w-full flex items-center justify-center px-4 md:px-16
        lg:px-11xl pt-10 md:py-20
      '
    >
      <ContactFormCard data={contactFormData} />
    </section>
  );
}
