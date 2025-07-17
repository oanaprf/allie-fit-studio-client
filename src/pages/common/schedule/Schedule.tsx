import { useTranslation } from 'react-i18next';
import ScheduleCard from './scheduleCard/ScheduleCard';

interface ScheduleProps {
  scheduleItems?: {
    startHour: string;
    startMinutes: string;
    endHour: string;
    endMinutes: string;
    description: string;
  }[];
}

const Schedule = ({ scheduleItems }: ScheduleProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-2xl font-bold md:text-4xl">{t('schedule')}</div>
      <div className="flex items-center justify-between gap-2 md:justify-start md:gap-10">
        {scheduleItems?.map((item, index) => (
          <ScheduleCard
            key={index}
            startHour={item.startHour}
            startMinutes={item.startMinutes}
            endHour={item.endHour}
            endMinutes={item.endMinutes}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
};

export default Schedule;
