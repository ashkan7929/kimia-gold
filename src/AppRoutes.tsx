import { Navigate, Route, Routes } from 'react-router-dom';
// import { useAuth } from './hooks/redux';
import Layout from './layouts/Layout/Layout';
import SimpleLayout from './layouts/SimpleLayout/SimpleLayout';
import About from './pages/About/About';
import Buy from './pages/Buy/Buy';
import FailedTransaction from './pages/FailedTransaction/FailedTransaction';
import Home from './pages/Home/Home';
import Invite from './pages/Invite/Invite';
import Loading from './pages/Loading/Loading';
import Login from './pages/Login/Login';
import MessageBox from './pages/MessageBox/MessageBox';
import MyCards from './pages/MyCards/MyCards';
import PaymentInformation from './pages/PaymentInformation/PaymentInformation';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Rules from './pages/Rules/Rules';
import Settings from './pages/Settings/Settings';
import SuccessfulTransaction from './pages/SuccessfulTransaction/SuccessfulTransaction';
import Suggestions from './pages/Suggestions/Suggestions';
import TransactionDetails from './pages/TransactionDetails/TransactionDetails';
import Transactions from './pages/Transactions/Transactions';
import Wallet from './pages/Wallet/Wallet';

// Protected Route Component
// const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//     const { isAuthenticated } = useAuth();
//     return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
// };

// Public Route Component (redirect to home if authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const { isAuthenticated } = useAuth();
    return <>{children}</>
    // return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
};

// App Routes Component
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route
                path="/loading"
                element={
                    <Loading />
                }
            />
            <Route
                path="/"
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

            <Route
                path="/home"
                element={
                    <Layout>
                        <Home />
                    </Layout>
                }
            />
            <Route
                path="/profile"
                element={
                    <Layout>
                        <Profile />
                    </Layout>
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
                path="/wallet"
                element={
                    <SimpleLayout title="کیف پول">
                        <Wallet />
                    </SimpleLayout>
                }
            />
            <Route
                path="/buy"
                element={
                    <SimpleLayout title="خرید طلا">
                        <Buy />
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
                path="/payment-information"
                element={
                    <SimpleLayout title="اطلاعات پرداخت">
                        <PaymentInformation />
                    </SimpleLayout>
                }
            />
            <Route
                path="/transactions"
                element={
                    <SimpleLayout title="تراکنش ها">
                        <Transactions />
                    </SimpleLayout>
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
                path="/rules"
                element={
                    <SimpleLayout title="قوانین و مقررات">
                        <Rules />
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
                path="/suggestions"
                element={
                    <SimpleLayout title="نظرات و پیشنهادات">
                        <Suggestions />
                    </SimpleLayout>
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
                path="/settings"
                element={
                    <SimpleLayout title="تنظیمات">
                        <Settings />
                    </SimpleLayout>
                }
            />
            <Route
                path="/message-box"
                element={
                    <SimpleLayout title="صندوق پیام ها">
                        <MessageBox />
                    </SimpleLayout>
                }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
