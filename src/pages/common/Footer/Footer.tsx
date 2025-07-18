import { ImgRoFlag, ImgUkFlag } from '@/assets';
import i18next, { LanguageEnum } from '@/config/i18next/i18next';
import { FacebookFilled, InstagramFilled } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const onLanguageChange = (lng: LanguageEnum) => () => {
    localStorage.setItem('lng', lng);
    i18next.changeLanguage(lng);
  };

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
      <div className="mt-5 flex gap-5">
        <img
          src={ImgRoFlag}
          alt="ImgRoFlag"
          className="w-10 cursor-pointer rounded-sm object-cover"
          onClick={onLanguageChange(LanguageEnum.RO)}
        />
        <img
          src={ImgUkFlag}
          alt="ImgUkFlag"
          className="w-10 cursor-pointer rounded-sm object-cover"
          onClick={onLanguageChange(LanguageEnum.EN)}
        />
      </div>
      <span className="text-white-50 text-md my-5">{t('footerCopyright')}</span>
    </div>
  );
};

export default Footer;
