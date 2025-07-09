import { useCallback, } from "react";
import { useLocation, } from "react-router-dom";

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

  const onItemClick = useCallback((key: string) => () => {
    onSelect(key);
  }, [onSelect]);

  return (
    <ul className={`flex ${flexDirection} gap-10 text-xl md:text-lg items-end`}>
      {items.map((item) => (
        <li
          key={item.key}
          className='cursor-pointer text-white flex flex-col'
          onClick={onItemClick(item.key)}
        >
          {item.label}
          <div
            className={`mt-1 h-0.5 bg-white transition-all duration-300 ease-in-out ${pathname.substring(1) === item.key ? 'w-10 opacity-100' : 'w-0 opacity-0'}`}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
