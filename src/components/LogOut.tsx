import { useAuth } from '../stores/auth.store';
import { useNavigate } from 'react-router-dom';
import {
LuLogOut
} from '../Icons';
const LogoutButton = () => {
    const { setUser, setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');

        navigate('/auth/unified');
    };

    return (
        <div className="flex items-center justify-center w-full mx-auto">
            <button
                type="button"
                onClick={handleLogout}
                className="
      flex flex-row items-center justify-center gap-2
      w-full max-w-[420px] px-5 py-3
      rounded-lg 
      text-red-900 shadow font-bold text-sm
      transition bg-red-500/60 dark:bg-black
      dark:border-red-500
    "
            >
                <LuLogOut className="w-5 h-5" />
                <span>خروج از حساب کاربری</span>
            </button>
        </div>
    );
};

export default LogoutButton;
