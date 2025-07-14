import { Card, Menu, PriceCard } from '@/components';
import { useMenu } from '@/utils/useMenu';
import { useTranslation } from 'react-i18next';
import ScheduleCard from './scheduleCard/ScheduleCard';
import { PersonalMenuItemKey } from './utils';

function PersonalTraining() {
  const { t } = useTranslation();
  const { items, onMenuItemClick } = useMenu(Object.values(PersonalMenuItemKey));

  return (
    <div>
      <Menu
        items={items}
        onSelect={onMenuItemClick}
        className="my-5 px-10 text-sm md:px-[16%] md:text-4xl"
      />
      <div className="bg-background px-10 py-10 md:px-[16%]">
        <span className="text-text-primary text-2xl font-bold md:text-4xl">
          {t('personalTrainingServicesTitle')}
        </span>
        <div className="mt-5 flex flex-wrap gap-10">
          <Card
            title={t('initialEvaluationTitle')}
            description={t('initialEvaluationDescription')}
          />
          <Card title={t('nutritionPlanTitle')} description={t('nutritionPlanDescription')} />
          <Card title={t('trainingPlanTitle')} description={t('trainingPlanDescription')} />
          <Card title={t('supportTitle')} description={t('supportDescription')} />
        </div>
        <div className="text-text-secondary mt-8 text-base md:text-lg">
          {t('personalTrainingServicesAdditionalInfo')}
        </div>

        <div className="text-text-primary mt-20 text-2xl font-bold md:text-4xl">
          {t('subscriptions')}
        </div>
        <div className="mt-8 flex gap-5 md:gap-10">
          <PriceCard title="850" titleSuffix={t('currency')} description={`8 ${t('sessions')}`} />
          <PriceCard
            title="1.250"
            titleSuffix={t('currency')}
            description={`12 ${t('sessions')}`}
          />
        </div>
        <div className="text-text-secondary m-auto flex flex-col gap-5 text-base">
          <span className="mt-8">{t('sessionsDescriptionRow1')}</span>
          <span>{t('sessionsDescriptionRow2')}</span>
          <span>{t('sessionsDescriptionRow3')}</span>
        </div>
      </div>

      <div className="bg-primary flex flex-col px-10 py-15 text-base text-white md:px-[16%] md:text-2xl">
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

      <div className="bg-background text-text-primary px-10 py-10 md:px-[16%]">
        <div className="text-2xl font-bold md:text-4xl">{t('schedule')}</div>
        <div className="flex items-center justify-between gap-2 md:justify-start md:gap-10">
          <ScheduleCard
            startHour="08"
            startMinutes="30"
            endHour="14"
            endMinutes="00"
            description={t('scheduleOnSiteOnline')}
          />
          <ScheduleCard
            startHour="14"
            startMinutes="00"
            endHour="16"
            endMinutes="00"
            description={t('scheduleOnline')}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalTraining;
