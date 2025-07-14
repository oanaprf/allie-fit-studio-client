import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ImgHome1, ImgHome2 } from '@/assets';
import { Logo } from '@/components';
import { MainMenuItemKey } from '@/pages/common/utils';

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(MainMenuItemKey.CONTACT);
  };
  return (
    <>
      <h1 className="px-10 text-center text-3xl text-white md:text-6xl">{t('homeTitle')}</h1>
      <Logo className="mt-6 transform-[scale(1.2)] md:mt-15 md:transform-[scale(3)]" />
      <div className="text-white-75 mt-15 px-5 text-center text-lg md:mt-30 md:w-[55%] md:text-2xl">
        {t('homeDescription')}
      </div>
      <Button type="default" className="mt-8" size="large" onClick={onClick}>
        <span className="font-bold">{t('homeActionButton')}</span>
      </Button>
      <div className="mt-10 flex">
        <img src={ImgHome1} alt="ImgHome1" className="w-1/2" />
        <img src={ImgHome2} alt="ImgHome2" className="w-1/2" />
      </div>
    </>
  );
};

export default Header;
