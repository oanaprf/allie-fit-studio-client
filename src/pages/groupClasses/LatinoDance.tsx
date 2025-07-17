import { ImgLatinoDance } from '@/assets';
import { PriceCard } from '@/components';
import { useIsMobile } from '@/utils';
import { useTranslation } from 'react-i18next';
import { Schedule } from '../common';

const LatinoDance = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <div className="bg-background flex flex-col gap-10 px-10 py-10 md:px-[16%]">
      <span className="text-text-primary text-2xl font-bold md:text-4xl">
        {t('latinoDanceTitle')}
      </span>
      <div className={`align-center flex md:gap-10 ${isMobile && 'flex-col gap-5'}`}>
        {isMobile && (
          <img
            src={ImgLatinoDance}
            alt="ImgLatinoDance"
            className="w-screen rounded-3xl object-cover"
          />
        )}
        <div className="text-text-secondary flex flex-col gap-5 text-base md:text-lg">
          <div>{t('latinoDanceDescriptionRow1')}</div>
          <div>{t('latinoDanceDescriptionRow2')}</div>
          <div>{t('latinoDanceDescriptionRow3')}</div>
          <div>{t('latinoDanceDescriptionRow4')}</div>
          <div>{t('latinoDanceDescriptionRow5')}</div>
          <div>{t('latinoDanceDescriptionRow6')}</div>
          <div>{t('latinoDanceDescriptionRow7')}</div>
        </div>
        {!isMobile && (
          <img
            src={ImgLatinoDance}
            alt="ImgLatinoDance"
            className="h-auto w-70 rounded-3xl object-cover"
          />
        )}
      </div>

      <div className="text-text-primary mt-10 text-2xl font-bold md:text-4xl">
        {t('subscriptions')}
      </div>
      <div className="flex flex-wrap gap-5 md:gap-10">
        <PriceCard
          title="60"
          titleSuffix={t('currency')}
          description={t('session', { sessionCount: 1 })}
        />
        <PriceCard
          title="220"
          titleSuffix={t('currency')}
          description={t('sessions', { sessionCount: 4 })}
        />
      </div>

      <div className="mt-10">
        <Schedule
          scheduleItems={[
            {
              startHour: '20',
              startMinutes: '00',
              endHour: '21',
              endMinutes: '00',
              description: 'monday',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default LatinoDance;
