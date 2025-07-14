import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export interface MenuItem {
  key: string;
  label: string;
}

interface MenuProps {
  items: MenuItem[];
  mode?: 'vertical' | 'horizontal';
  className?: string;
  onSelect: (key: string) => void;
}

function Menu({ items, mode = 'horizontal', onSelect, className }: MenuProps) {
  const flexDirection = mode === 'vertical' ? 'flex-col' : 'flex-row';
  const { pathname } = useLocation();

  const paths = pathname?.split('/');

  const onItemClick = useCallback(
    (key: string) => () => {
      onSelect(key);
    },
    [onSelect]
  );

  return (
    <ul
      className={`flex ${flexDirection} text-white-75 gap-10 text-2xl font-medium md:text-lg ${className}`}
    >
      {items.map(item => (
        <li
          key={item.key}
          className="group flex cursor-pointer flex-col"
          onClick={onItemClick(item.key)}
        >
          {item.label}
          <div
            className={`mt-1 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-10 ${paths.includes(item.key) ? 'w-10' : 'w-0'}`}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
