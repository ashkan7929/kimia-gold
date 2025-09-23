import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from './stores/auth.store';
import AppRoutes from './AppRoutes';
import Starter from './pages/Starter/Starter';

function App() {
  const { setToken, setUser } = useAuth();
  const [newUser, setNewUser] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    const userData = localStorage.getItem('user_data');

    if (token) setToken(token);

    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch {
        localStorage.removeItem('user_data');
      }
    }

    const seenStarter = localStorage.getItem('new-user') === 'done';
    setNewUser(!seenStarter); // اگر دیده نشده، newUser = true
  }, [setToken, setUser]);

  const onFinish = () => {
    localStorage.setItem('new-user', 'done'); 
    setNewUser(false);
  };

  if (newUser === null) return null;

  return (
    <Router>
      {newUser && <Starter onFinish={onFinish} />} {/* ✅ نمایش فقط برای یوزر جدید */}
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
