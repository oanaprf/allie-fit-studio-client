import { MainMenu } from '@/pages/common';
import { useLocation } from 'react-router-dom';
import Logo from '../../components/Logo';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex w-screen items-center justify-between p-6 md:px-10 md:py-8">
      <div className={pathname === '/' ? 'invisible' : ''}>
        <Logo />
      </div>
      <MainMenu />
    </header>
  );
};

export default NavBar;
