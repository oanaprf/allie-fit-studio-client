import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-15 flex flex-col items-center gap-5 text-white">
      <span className="text-xl md:text-2xl">{t('footerText')}</span>
      <div className="flex gap-10 text-lg font-semibold md:text-xl">
        <Link to="https://www.facebook.com/alliecretu/" className="flex gap-2" target="_blank">
          <FacebookFilled className="text-2xl" />
          allie.cretu
        </Link>
        <Link
          to="https://www.instagram.com/alliefitstudiopipera49a"
          className="flex gap-2"
          target="_blank"
        >
          <InstagramFilled className="text-2xl" />
          alliefitstudio
        </Link>
      </div>
      <span className="text-white-50 text-md my-5">{t('footerCopyright')}</span>
    </div>
  );
};

export default Footer;
