import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    IoNotificationsOutline,
    PiUsersThreeBold,
    TbLayoutGrid,
} from '../../Icons';
import { useTheme } from '../../contexts/ThemeContext';
import { BiSolidMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';
import logoLightMode from '/images/vemLogoSite.png';
import logoDarkMode from '/images/vemLogo1.png';
import Menu from '../../components/menu/Menu';

const Layout = ({ children }: { children: any }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    const location = useLocation();
    const isHome = location.pathname === '/app';

    const [showMenu, setShowMenu] = useState(false);

    // const navigate = useNavigate();

    const handleShowMenu = () => setShowMenu(!showMenu);

    // const handleNavigate = (link: string) => {
    //     navigate(link);
    //     handleShowMenu();
    // };

    return (
        <>
            <div className="bg-black light:bg-primary-whiteSpecial min-h-screen p-4.5">
                <header className="bg-primary-darker light:bg-white grid grid-cols-3 w-full rounded-lg py-2.5 px-4 mb-3">
                    <div className="flex gap-1">
                        <div
                            onClick={handleShowMenu}
                            className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 light:border-primary-gray-50 cursor-pointer"
                        >
                            <TbLayoutGrid fontSize={19} className="text-white light:text-black" />
                        </div>
                        <Link to={'/message-box'}>
                            <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 light:border-primary-gray-50 cursor-pointer">
                                <IoNotificationsOutline
                                    fontSize={19}
                                    className="text-white light:text-black"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            to={'/home'}
                            style={{
                                pointerEvents: isHome ? 'none' : 'auto',
                                cursor: isHome ? 'default' : 'pointer',
                            }}
                        >
                            {isDark ? (
                                <img alt="" src={logoDarkMode} width={34} height={34} />
                            ) : (
                                <img alt="" src={logoLightMode} width={34} height={34} />
                            )}
                        </Link>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                        <button onClick={toggleTheme} className="-ml-2 p-2 bg-secondary rounded">
                            {isDark ? (
                                <FiSun className="text-white light:text-black" size={18} />
                            ) : (
                                <BiSolidMoon className="text-white light:text-black" size={18} />
                            )}
                        </button>

                        <Link to={'/profile'}>
                            <div className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 border-primary-lighter/70 light:border-primary-gray-50 cursor-pointer">
                                <PiUsersThreeBold
                                    fontSize={19}
                                    className="text-white light:text-black"
                                />
                            </div>
                        </Link>
                    </div>
                </header>
                {children}
            </div>
            {showMenu && <Menu handleShowMenu={handleShowMenu} setShowMenu={setShowMenu}/>}
        </>
    );
};

export default Layout;