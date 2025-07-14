import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useState } from 'react';

import { Menu } from '@/components';
import { useIsMobile } from '@/utils';
import { useMenu } from '@/utils/useMenu';
import { MainMenuItemKey } from '../utils';

function MainMenu() {
  const isMobile = useIsMobile();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const { items, onMenuItemClick } = useMenu(Object.values(MainMenuItemKey));

  const onMobileMenuClick = () => setIsMobileDrawerOpen(!isMobileDrawerOpen);

  const onMobileMenuItemClick = (key: string) => {
    onMenuItemClick(key);
    setIsMobileDrawerOpen(false);
  };

  return isMobile ? (
    <>
      <Drawer
        placement="right"
        closable={false}
        open={isMobileDrawerOpen}
        width={430}
        classNames={{ body: 'flex flex-col' }}
      >
        <Button
          icon={<CloseOutlined />}
          onClick={onMobileMenuClick}
          type="text"
          size="large"
          className="ml-auto"
        />
        <div className="mt-10 ml-10">
          <Menu items={items} onSelect={onMobileMenuItemClick} mode="vertical" />
        </div>
      </Drawer>
      <Button onClick={onMobileMenuClick} type="text">
        <MenuOutlined className="text-xl" />
      </Button>
    </>
  ) : (
    <Menu items={items} onSelect={onMenuItemClick} />
  );
}

export default MainMenu;
