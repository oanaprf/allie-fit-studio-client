import { useCallback, useState } from "react";



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

function Menu({ items, defaultSelectedKey, mode = 'horizontal', onSelect }: MenuProps) {
  const flexDirection = mode === 'vertical' ? 'flex-col' : 'flex-row';
  const [selectedKey, setSelectedKeyState] = useState(defaultSelectedKey || null);

  const onItemClick = useCallback((key: string) => () => {
    setSelectedKeyState(key);
    onSelect(key);
  }, [onSelect]);

  return (
    <ul className={`flex ${flexDirection} gap-10 text-xl md:text-lg`}>
      {items.map((item) => (
        <li
          key={item.key}
          className='cursor-pointer text-white flex flex-col'
          onClick={onItemClick(item.key)}
        >
          {item.label}
          <div
            className={`mt-1 h-0.5 bg-white transition-all duration-300 ease-in-out ${selectedKey === item.key ? 'w-10 opacity-100' : 'w-0 opacity-0'}`}
          />
        </li>
      ))}
    </ul>
  );
}

export default Menu;
