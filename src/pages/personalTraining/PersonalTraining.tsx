import PersonalTrainingDescription from './personalTrainingDescription/PersonalTrainingDescription';
import PersonalTrainingNecessity from './personalTrainingNecessity/PersonalTrainingNecessity';
import Schedule from './schedule/Schedule';

const PersonalTraining = () => {
  return (
    <div>
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
