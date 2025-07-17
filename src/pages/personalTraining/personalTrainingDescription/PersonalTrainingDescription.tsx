import { Card, PriceCard } from '@/components';
import { useTranslation } from 'react-i18next';

const PersonalTrainingDescription = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background px-10 py-10 md:px-[16%]">
      <span className="text-text-primary text-2xl font-bold md:text-4xl">
        {t('personalTrainingServicesTitle')}
      </span>
      <div className="mt-5 flex flex-wrap gap-10">
        <Card title={t('initialEvaluationTitle')} description={t('initialEvaluationDescription')} />
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
        <PriceCard
          title="850"
          titleSuffix={t('currency')}
          description={t('sessions', { sessionCount: 8 })}
        />
        <PriceCard
          title="1.250"
          titleSuffix={t('currency')}
          description={t('sessions', { sessionCount: 12 })}
        />
      </div>
      <div className="text-text-secondary m-auto flex flex-col gap-5 text-base">
        <span className="mt-8">{t('sessionsDescriptionRow1')}</span>
        <span>{t('sessionsDescriptionRow2')}</span>
        <span>{t('sessionsDescriptionRow3')}</span>
      </div>
    </div>
  );
};

export default PersonalTrainingDescription;
