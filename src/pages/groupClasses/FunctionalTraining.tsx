import { ImgHome1 } from '@/assets';
import { PriceCard } from '@/components';
import { useIsMobile } from '@/utils';
import { useTranslation } from 'react-i18next';
import { Schedule } from '../common';

const FunctionalTraining = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <div className="bg-background flex flex-col gap-10 px-10 py-10 md:px-[16%]">
      <span className="text-text-primary text-2xl font-bold md:text-4xl">
        {t('functionalTrainingTitle')}
      </span>
      <div className={`align-center flex md:gap-10 ${isMobile && 'flex-col gap-5'}`}>
        {isMobile && (
          <img src={ImgHome1} alt="ImgHome1" className="w-screen rounded-3xl object-cover" />
        )}
        <div className="text-text-secondary flex flex-col gap-5 text-base md:text-lg">
          <div>{t('functionalTrainingDescriptionRow1')}</div>
          <div>{t('functionalTrainingDescriptionRow2')}</div>
          <div>{t('functionalTrainingDescriptionRow3')}</div>
        </div>
        {!isMobile && (
          <img src={ImgHome1} alt="ImgHome1" className="h-auto w-80 rounded-3xl object-cover" />
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
          title="210"
          titleSuffix={t('currency')}
          description={t('sessions', { sessionCount: 8 })}
        />
        <PriceCard
          title="350"
          titleSuffix={t('currency')}
          description={t('sessions', { sessionCount: 12 })}
        />
      </div>

      <div className="text-text-primary mt-10 text-2xl font-bold md:text-4xl">
        {t('comboSubscriptions')}
      </div>
      <div className="flex flex-wrap gap-5 md:gap-10">
        <PriceCard
          title="370"
          titleSuffix={t('currency')}
          description={t('comboSessions', { sessionCount: 4, sessionType: 'Kangoo Jumps' })}
          extraDescription={t('comboSessions', {
            sessionCount: 4,
            sessionType: 'Functional Training',
          })}
          isCombo
        />
        <PriceCard
          title="500"
          titleSuffix={t('currency')}
          description={t('comboSessions', { sessionCount: 8, sessionType: 'Kangoo Jumps' })}
          extraDescription={t('comboSessions', {
            sessionCount: 4,
            sessionType: 'Functional Training',
          })}
          isCombo
        />
        <PriceCard
          title="490"
          titleSuffix={t('currency')}
          description={t('comboSessions', { sessionCount: 4, sessionType: 'Kangoo Jumps' })}
          extraDescription={t('comboSessions', {
            sessionCount: 8,
            sessionType: 'Functional Training',
          })}
          isCombo
        />
        <PriceCard
          title="600"
          titleSuffix={t('currency')}
          description={t('comboSessions', { sessionCount: 8, sessionType: 'Kangoo Jumps' })}
          extraDescription={t('comboSessions', {
            sessionCount: 8,
            sessionType: 'Functional Training',
          })}
          isCombo
        />
      </div>
      <span className="text-text-secondary">
        {t('kangooJumpsComboSubscriptionsDescriptionRow1')}
      </span>

      <div className="mt-10">
        <Schedule
          scheduleItems={[
            {
              startHour: '19',
              startMinutes: '00',
              endHour: '20',
              endMinutes: '00',
              description: 'mondayAndWednesday',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default FunctionalTraining;
