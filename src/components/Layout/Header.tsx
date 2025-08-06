import { CiGrid41 } from 'react-icons/ci';
import { IoNotificationsOutline } from 'react-icons/io5';
import vemAPP from '../../assets/logoSite.png';
import { FaUsers } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <header className="container bg-primary-light rounded-lg mb-3 mx-8 max-w-light">
                <nav
                    className="flex items-center justify-between mx-4"
                    style={{
                        boxShadow: '0 0 67px 0 rgba(0, 0, 0, 0.09)',
                    }}
                >
                    <div className="flex gap-2">
                        <button className="text-white border-[#213163] border-[0.7px] rounded-[1.204375rem] w-[2.125rem] h-[2.125rem] flex items-center justify-center ">
                            <CiGrid41 className="w-5 h-5" />
                        </button>

                        <button className="text-white border-[#213163] border-[0.7px] rounded-[1.204375rem] w-[2.125rem] h-[2.125rem] flex  items-center justify-center">
                            <IoNotificationsOutline className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <img src={vemAPP} alt="logo" className="h-16 w-16 bg-cover" />
                    </div>

                    <div className="flex justify-end">
                        <button className="text-white border-[#213163] border-[0.7px] rounded-[1.204375rem] w-[2.125rem] h-[2.125rem] flex items-center justify-center">
                            <FaUsers />
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
