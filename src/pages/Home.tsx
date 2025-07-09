import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Logo } from "@/components";
import { MainMenuItemKey } from "@/pages/common/MainMenu/MainMenu.utils";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onClick = () => {
    navigate(MainMenuItemKey.CONTACT);
  };

  return (
    <div className="flex flex-col md:mt-15 mt-10 items-center">
      <h1 className="md:text-6xl text-3xl text-white px-2 text-center">{t('homeTitle')}</h1>
      <Logo className="md:transform-[scale(3)] transform-[scale(1.2)] md:mt-15 mt-6" />
      <span className="md:text-2xl text-lg text-white-75 px-5 md:w-[55%] text-center mt-6 md:mt-15">
        {t('homeDescription')}
      </span>
      <Button type="default" className="mt-6" size="large" onClick={onClick}>
        <span className="font-bold">{t('homeActionButton')}</span>
      </Button>
    </div>
  );
}

export default Home;
