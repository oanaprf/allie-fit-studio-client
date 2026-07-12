import { useIsMobile } from '@/utils';
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import ContactCard from './contactCard/ContactCard';
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
      <div className="bg-background mt-10 flex flex-col justify-center gap-10 gap-y-5 p-5 md:gap-7 md:px-40 md:py-12 lg:px-65">
        <div className={`flex justify-between gap-10 ${isMobile ? 'flex-col' : ''}`}>
          <ContactCard
            Icon={<EnvironmentOutlined className="text-text-secondary text-5xl" />}
            label={t('address')}
            value="Strada Drumul Negru nr. 1C, Pipera, Voluntari"
          />
          <ContactCard
            Icon={<PhoneOutlined className="text-text-secondary text-5xl" />}
            label={t('phone')}
            value="0743 260 386"
          />
          <ContactCard
            Icon={<MailOutlined className="text-text-secondary text-5xl" />}
            label={t('email')}
            value="allie.cretu @gmail.com"
          />
        </div>

        <div
          className={`mt-5 flex justify-center gap-10 gap-y-5 md:gap-7 ${isMobile ? 'flex-col' : ''}`}
        >
          <iframe
            src="https://maps.google.com/maps?q=Strada+Drumul+Negru+nr.+1C,+Pipera,+Voluntari&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="Strada Drumul Negru nr. 1C, Pipera, Voluntari"
            aria-label="Strada Drumul Negru nr. 1C, Pipera, Voluntari"
            className="h-96 grow"
          />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
