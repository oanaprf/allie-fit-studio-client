import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-15 flex flex-col items-center gap-5 text-white">
      <span className="text-xl md:text-4xl">{t('footerText')}</span>
      <div className="flex gap-10 text-lg md:text-xl">
        <div className="flex gap-2">
          <FacebookFilled className="text-2xl" />
          allie.cretu
        </div>
        <div className="flex gap-2">
          <InstagramFilled className="text-2xl" />
          alliefitstudio
        </div>
      </div>
      <span className="text-white-50 text-md my-5">{t('footerCopyright')}</span>
    </div>
  );
};

export default Footer;
