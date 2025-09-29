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
      rounded-lg border border-red-400
      text-red-600 font-bold text-sm
      transition hover:bg-red-600 hover:text-white
    "
            >
                <LuLogOut className="w-5 h-5" />
                <span>خروج از حساب کاربری</span>
            </button>
        </div>
    );
};

export default LogoutButton;
