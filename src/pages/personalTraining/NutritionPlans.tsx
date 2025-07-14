import { Menu } from '@/components';
import { useMenu } from '@/utils/useMenu';
import { PersonalMenuItemKey } from './utils';

function NutritionPlans() {
  const { items, onMenuItemClick } = useMenu(Object.values(PersonalMenuItemKey));

  return (
    <div>
      <Menu items={items} onSelect={onMenuItemClick} className="text-4xl text-white md:text-4xl" />
      <div>
        <h1>Nutrition Plans</h1>
        <p>Here you can find various nutrition plans tailored to your needs.</p>
      </div>
    </div>
  );
}

export default NutritionPlans;
