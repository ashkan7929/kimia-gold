import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong, TbLayoutGrid } from '../../Icons';
import Menu from '../../components/menu/Menu';

const SimpleLayout = ({
    children,
    title,
    img,
    headerImg,
}: {
    children: any;
    title?: string;
    img?: any;
    headerImg?: string;
}) => {
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();

    const handleShowMenu = () => setShowMenu(!showMenu);

    return (
        <>
            <div className="dark:bg-gray-900 bg-primary-whiteSpecial min-h-screen p-4.5">
                <header className="dark:bg-black bg-white grid grid-cols-3 w-full rounded-lg py-2.5 px-4 mb-3">
                    <div className="flex gap-1">
                        <div
                            onClick={handleShowMenu}
                            className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 dark:border-primary-lighter/70 border-primary-gray-50 cursor-pointer"
                        >
                            <TbLayoutGrid fontSize={19} className="dark:text-white text-black" />
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        {headerImg ? (
                            <img src={headerImg} alt="" className="h-6 object-contain" />
                        ) : (
                            <Typography
                                className="!font-alibaba dark:text-white text-black"
                                fontWeight="bold"
                                fontSize={11}
                            >
                                {title}
                            </Typography>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <div
                            onClick={() => navigate(-1)}
                            className="w-8.5 h-8.5 flex justify-center items-center rounded-full border-2 dark:border-primary-lighter/70 border-primary-gray-50 cursor-pointer"
                        >
                            <FaArrowLeftLong fontSize={13} className="dark:text-white text-black" />
                        </div>
                    </div>
                </header>
                {img && (
                    <div className="mb-3">
                        <img src={img} alt="" className="w-full rounded-lg object-cover" />
                    </div>
                )}

                {children}
            </div>
            {showMenu && <Menu handleShowMenu={handleShowMenu} setShowMenu={setShowMenu} />}
        </>
    );
};

export default SimpleLayout;
