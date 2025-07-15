import {
  ImgPersonalTraining1,
  ImgPersonalTraining2,
  ImgPersonalTraining3,
  ImgPersonalTraining4,
} from '@/assets';
import { useIsMobile } from '@/utils';
import { useTranslation } from 'react-i18next';

const PersonalTrainingNecessity = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-primary flex flex-col px-10 py-20 text-base text-white md:px-[16%] md:text-2xl">
        <div className="flex flex-col gap-10">
          <span className="text-2xl font-bold md:text-4xl">
            {t('personalTrainingNecessityTitle')}
          </span>
          <span>{t('personalTrainingNecessityDescriptionRow1')}</span>
          <span>{t('personalTrainingNecessityDescriptionRow2')}</span>
          <span>{t('personalTrainingNecessityDescriptionRow3')}</span>
        </div>
        <ul className="ml-5 list-disc">
          <li>{t('personalTrainingNecessityDescriptionRow4')}</li>
          <li>{t('personalTrainingNecessityDescriptionRow5')}</li>
          <li>{t('personalTrainingNecessityDescriptionRow6')}</li>
        </ul>
      </div>
      <div className="flex">
        <img
          src={ImgPersonalTraining1}
          alt="ImgPersonalTraining1"
          className="h-60 w-1/2 object-cover md:h-100 md:w-1/4"
        />
        {!isMobile && (
          <img
            src={ImgPersonalTraining2}
            alt="ImgPersonalTraining2"
            className="h-100 w-1/4 object-cover"
          />
        )}
        <img
          src={ImgPersonalTraining3}
          alt="ImgPersonalTraining3"
          className="h-60 w-1/2 object-cover md:h-100 md:w-1/4"
        />
        {!isMobile && (
          <img
            src={ImgPersonalTraining4}
            alt="ImgPersonalTraining4"
            className="h-100 w-1/4 object-cover"
          />
        )}
      </div>
    </>
  );
};

export default PersonalTrainingNecessity;
