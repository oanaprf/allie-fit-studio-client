import { ImgAboutMe1, ImgAboutMe2 } from '@/assets';
import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary w-screen">
      <div className="text-white-75 m-auto flex flex-col gap-5 px-10 py-15 text-lg md:px-[16%] md:text-2xl">
        <span className="text-white uppercase">{t('aboutMe')}</span>
        <span className="text-4xl font-bold text-white md:text-6xl">{t('aboutMeTitle')}</span>
        <span className="mt-5 font-medium">{t('aboutMeDescriptionRow1')}</span>
        <span className="font-medium">{t('aboutMeDescriptionRow2')}</span>
        <span className="font-medium">{t('aboutMeDescriptionRow3')}</span>
      </div>
      <div className="flex">
        <img src={ImgAboutMe1} alt="ImgAboutMe1" className="h-50 w-2/3 object-cover md:h-170" />
        <img src={ImgAboutMe2} alt="ImgAboutMe2" className="h-50 w-1/3 object-cover md:h-170" />
      </div>
    </div>
  );
};

export default AboutMe;
