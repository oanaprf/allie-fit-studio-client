import { useTranslation } from 'react-i18next';
import ScheduleCard from './scheduleCard/ScheduleCard';

const Schedule = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-background text-text-primary px-10 py-20 md:px-[16%]">
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
  );
};

export default Schedule;
