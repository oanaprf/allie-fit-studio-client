import { MainMenu } from "@/pages/common";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className="flex justify-between items-center w-screen md:py-8 md:px-15 p-6">
            <div className={pathname === '/' ? 'invisible' : ''}><Logo /></div>
            <MainMenu />
        </header>
    );
};

export default Header;
