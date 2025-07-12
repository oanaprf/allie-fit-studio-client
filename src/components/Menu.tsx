import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export interface MenuItem {
  key: string;
  label: string;
}

interface MenuProps {
  items: MenuItem[];
  defaultSelectedKey?: string;
  mode?: 'vertical' | 'horizontal';
  onSelect: (key: string) => void;
}

function Menu({ items, mode = 'horizontal', onSelect }: MenuProps) {
  const flexDirection = mode === 'vertical' ? 'flex-col' : 'flex-row';
  const { pathname } = useLocation();

  const onItemClick = useCallback(
    (key: string) => () => {
      onSelect(key);
    },
    [onSelect]
  );

  return (
    <ul className={`flex ${flexDirection} gap-10 text-2xl md:text-lg`}>
      {items.map(item => (
        <li
          key={item.key}
          className="group text-white-75 flex cursor-pointer flex-col"
          onClick={onItemClick(item.key)}
        >
          {item.label}
          <div
            className={`mt-1 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-10 ${pathname.substring(1) === item.key ? 'w-10' : 'w-0'}`}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
