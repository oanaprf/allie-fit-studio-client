import { Menu } from '@/components';
import { useMenu } from '@/utils/useMenu';
import { Outlet } from 'react-router-dom';
import { PersonalMenuItemKey } from './utils';

const PersonalTrainingPackage = () => {
  const { items, onMenuItemClick } = useMenu(Object.values(PersonalMenuItemKey), true);

  return (
    <div>
      <Menu
        items={items}
        onSelect={onMenuItemClick}
        className="my-5 px-10 text-sm md:px-[16%] md:text-4xl"
      />
      <Outlet />
    </div>
  );
};

export default PersonalTrainingPackage;
