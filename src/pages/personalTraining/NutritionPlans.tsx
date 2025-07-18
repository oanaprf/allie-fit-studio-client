import { ImgNutritionPlans } from '@/assets';
import { PriceCard } from '@/components';
import { useIsMobile } from '@/utils';
import { useTranslation } from 'react-i18next';

const NutritionPlans = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-background flex flex-col gap-10 px-10 py-10 md:px-[16%]">
        <span className="text-text-primary text-2xl font-bold md:text-4xl">
          {t('nutritionPlansTitle')}
        </span>
        <div className={`align-center flex md:gap-10 ${isMobile && 'flex-col gap-5'}`}>
          {isMobile && (
            <img
              src={ImgNutritionPlans}
              alt="ImgPersonalTraining2"
              className="w-screen rounded-3xl object-cover"
            />
          )}
          <div className="text-text-secondary flex flex-col gap-5 text-base md:text-lg">
            <div>{t('nutritionPlansDescriptionRow1')}</div>
            <div>{t('nutritionPlansDescriptionRow2')}</div>
            <div>{t('nutritionPlansDescriptionRow3')}</div>
          </div>
          {!isMobile && (
            <img
              src={ImgNutritionPlans}
              alt="ImgPersonalTraining2"
              className="h-auto w-100 rounded-3xl object-cover"
            />
          )}
        </div>

        <span className="text-text-primary mt-10 text-2xl font-bold md:text-4xl">
          {t('nutritionalPlansServicesTitle')}
        </span>
        <div className="flex flex-wrap gap-10 text-xl font-semibold">
          <div className="bg-elevated flex w-screen items-center justify-center rounded-xl px-5 py-15 md:w-[30%]">
            {t('evaluation')}
          </div>
          <div className="bg-elevated flex w-screen items-center rounded-xl px-5 py-15 text-center md:w-[30%]">
            {t('creatingTheNutritionalPlan')}
          </div>
          <div className="bg-elevated flex w-screen items-center rounded-xl px-5 py-15 text-center md:w-[30%]">
            {t('dailyTracking')}
          </div>
        </div>
        <div className="text-text-secondary flex flex-col gap-2 text-base md:text-lg">
          {t('nutritionalPlansServicesDescriptionRow1')}
          <ul className="ml-5 list-disc">
            <li>{t('nutritionalPlansServicesDescriptionRow2')}</li>
            <li>{t('nutritionalPlansServicesDescriptionRow3')}</li>
          </ul>
        </div>

        <div className="text-text-primary mt-10 text-2xl font-bold md:text-4xl">{t('price')}</div>
        <div className={`flex flex-col gap-5`}>
          <PriceCard title="300" titleSuffix={t('currency')} description={t('monthly')} />
          <div className="text-text-secondary text-base md:text-lg">
            {t('nutritionPlansPriceDescriptionRow2')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlans;
