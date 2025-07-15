import { Menu } from '@/components';
import { useMenu } from '@/utils/useMenu';
import PersonalTrainingDescription from './personalTrainingDescription/PersonalTrainingDescription';
import PersonalTrainingNecessity from './personalTrainingNecessity/PersonalTrainingNecessity';
import Schedule from './schedule/Schedule';
import { PersonalMenuItemKey } from './utils';

function PersonalTraining() {
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
      <Schedule />
    </div>
  );
}

export default PersonalTraining;
