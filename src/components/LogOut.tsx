import { useAuth } from "../stores/auth.store";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { setUser, setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");

    navigate("/autoPage");
  };

  return (
    <button onClick={handleLogout}>
		خروج از حساب کاربری
    </button>
  );
};

export default LogoutButton;
