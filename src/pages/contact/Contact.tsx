import { useIsMobile } from '@/utils';
import { useTranslation } from 'react-i18next';
import ContactForm from './contactForm/ContactForm';

const Contact = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <div>
      <h1 className="mt-10 px-10 text-4xl font-bold text-white md:px-[16%] md:text-6xl">
        {t('contact')}
      </h1>
      <h1 className="text-white-75 mt-10 px-10 text-lg md:px-[16%] md:text-2xl">
        {t('contactDescription')}
      </h1>
      <div
        className={`bg-background mt-10 flex justify-center gap-10 gap-y-5 p-5 md:gap-7 md:px-40 md:py-20 lg:px-65 ${isMobile ? 'flex-col' : ''}`}
      >
        <iframe
          src="https://maps.google.com/maps?q=Soseaua%20Pipera%20Tunari%20nr%2049A&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          title="Soseaua Pipera Tunari nr 49A"
          aria-label="Soseaua Pipera Tunari nr 49A"
          className="h-96 grow"
        />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
