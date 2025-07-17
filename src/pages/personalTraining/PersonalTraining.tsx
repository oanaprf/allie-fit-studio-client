import { Menu } from '@/components';
import { useMenu } from '@/utils/useMenu';
import Schedule from '../common/schedule/Schedule';
import PersonalTrainingDescription from './personalTrainingDescription/PersonalTrainingDescription';
import PersonalTrainingNecessity from './personalTrainingNecessity/PersonalTrainingNecessity';
import { PersonalMenuItemKey } from './utils';

const PersonalTraining = () => {
  const { items, onMenuItemClick } = useMenu(Object.values(PersonalMenuItemKey));

  return (
    <div>
      <Menu
        items={items}
        onSelect={onMenuItemClick}
        className="my-5 px-10 text-sm md:px-[16%] md:text-4xl"
      />

      <PersonalTrainingDescription />
      <PersonalTrainingNecessity />
      <div className="bg-background text-text-primary px-10 py-20 md:px-[16%]">
        <Schedule
          scheduleItems={[
            {
              startHour: '08',
              startMinutes: '30',
              endHour: '14',
              endMinutes: '00',
              description: 'scheduleOnSiteOnline',
            },
            {
              startHour: '14',
              startMinutes: '00',
              endHour: '16',
              endMinutes: '00',
              description: 'scheduleOnline',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default PersonalTraining;
