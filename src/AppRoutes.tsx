import { Navigate, Route, Routes } from 'react-router-dom';
// import Layout from './';
// import Layout from './components/Layout/Layout';
import { useAuth } from './hooks/redux';
import { Home } from './pages';
import Loading from './pages/Loading';
import Starter from './pages/Starter';

// Placeholder components for routes that don't exist yet
const Login = () => <div className="p-8 text-center">Login Page - Coming Soon</div>;
const Register = () => <div className="p-8 text-center">Register Page - Coming Soon</div>;
const Market = () => <div className="p-8 text-center">Market Page - Coming Soon</div>;
const Portfolio = () => <div className="p-8 text-center">Portfolio Page - Coming Soon</div>;
const Profile = () => <div className="p-8 text-center">Profile Page - Coming Soon</div>;
const Trading = () => <div className="p-8 text-center">Trading Page - Coming Soon</div>;

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

// Public Route Component (redirect to home if authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

// App Routes Component
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Public Routes */}

            <Route
                path="/loading"
                element={
                    // <Layout>
                    <Loading />
                    // </Layout>
                }
            />

            <Route path="/starter" element={<Starter />} />
            <Route
                path="/login"
                element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                }
            />
            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />

            {/* Protected Routes with Layout */}
            <Route
                path="/"
                element={
                    // <Layout>
                    <Home />
                    // </Layout>
                }
            />
            <Route
                path="/portfolio"
                element={
                    <ProtectedRoute>
                        {/* <Layout> */}
                        <Portfolio />
                        {/* </Layout> */}
                    </ProtectedRoute>
                }
            />
            <Route
                path="/trading"
                element={
                    // <Layout>
                    <Trading />
                    // </Layout>
                }
            />
            <Route
                path="/market"
                element={
                    // <Layout>
                    <Market />
                    // </Layout>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        {/* <Layout> */}
                        <Profile />
                        {/* </Layout> */}
                    </ProtectedRoute>
                }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
