import { Navigate, Route, Routes } from 'react-router-dom';
// import Layout from './';
// import Layout from './components/Layout/Layout';
import { useAuth } from './hooks/redux';
import { Home } from './pages';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import Layout from './layouts/Layout/Layout';
import TransactionDetails from './pages/TransactionDetails/TransactionDetails';
import PaymentInformation from './pages/PaymentInformation/PaymentInformation';
import SimpleLayout from './layouts/SimpleLayout/SimpleLayout';
import SuccessfulTransaction from './pages/SuccessfulTransaction/SuccessfulTransaction';
import FailedTransaction from './pages/FailedTransaction/FailedTransaction';
import About from './pages/About/About';
import Suggestions from './pages/Suggestions/Suggestions';
import Settings from './pages/Settings/Settings';
import Invite from './pages/Invite/Invite';
import Rules from './pages/Rules/Rules';
import MyCards from './pages/MyCards';

// Placeholder components for routes that don't exist yet
// const Login = () => <div className="p-8 text-center">Login Page - Coming Soon</div>;
// const Register = () => <div className="p-8 text-center">Register Page - Coming Soon</div>;
const Market = () => <div className="p-8 text-center">Market Page - Coming Soon</div>;
// const Portfolio = () => <div className="p-8 text-center">Portfolio Page - Coming Soon</div>;
// const Profile = () => <div className="p-8 text-center">Profile Page - Coming Soon</div>;
// const Trading = () => <div className="p-8 text-center">Trading Page - Coming Soon</div>;
// const Layout = ({ children }: any) => <div className="bg-black min-h-screen p-4.5">
//     {children}
// </div>;

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
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            {/* <Route
                path="/market"
                element={
                    // <Layout>
                    <Market />
                    // </Layout>
                }
            />
            <Route
                path="/transaction-details"
                element={
                    <SimpleLayout title="جزئیات پرداخت">
                        <TransactionDetails />
                    </SimpleLayout>
                }
            />
            <Route
                path="/payment-information"
                element={
                    <SimpleLayout title="اطلاعات پرداخت">
                        <PaymentInformation />
                    </SimpleLayout>
                }
            />
            <Route
                path="/successful-transaction"
                element={
                    <SuccessfulTransaction />
                }
            />
            <Route
                path="/failed-transaction"
                element={
                    <FailedTransaction />
                }
            />
            <Route
                path="/about"
                element={
                    <SimpleLayout title="درباره ما">
                        <About />
                    </SimpleLayout>
                }
            />
            <Route
                path="/suggestions"
                element={
                    <SimpleLayout title="نظرات و پیشنهادات">
                        <Suggestions />
                    </SimpleLayout>
                }
            />
            <Route
                path="/settings"
                element={
                    <SimpleLayout title="تنظیمات">
                        <Settings />
                    </SimpleLayout>
                }
            />
            <Route
                path="/invite"
                element={
                    <SimpleLayout title="دعوت از دوستان">
                        <Invite />
                    </SimpleLayout>
                }
            />
            <Route
                path="/rules"
                element={
                    <SimpleLayout title="قوانین و مقررات">
                        <Rules />
                    </SimpleLayout>
                }
            />
            <Route
                path="/my-cards"
                element={
                    <SimpleLayout title="کارت های من">
                        <MyCards />
                    </SimpleLayout>
                }
            />
            <Route
                path="/market"
                element={
                    // <Layout>
                    <Market />
                    // </Layout>
                }
            /> */}
            <Route
                path="/profile"
                element={
                    // <ProtectedRoute>
                    <Layout>
                        <Profile />
                    </Layout>
                    // </ProtectedRoute>
                }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
