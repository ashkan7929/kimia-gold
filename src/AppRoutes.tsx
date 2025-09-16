import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './stores/auth.store';
import Layout from './layouts/Layout/Layout';
import SimpleLayout from './layouts/SimpleLayout/SimpleLayout';
import AuthGuard from './components/AuthGuard';
import { MobilePage, OtpPage, AuthPage } from './pages/Auth';
import About from './pages/About/About';
import Buy from './pages/Buy/Buy';
import FailedTransaction from './pages/FailedTransaction/FailedTransaction';
import Home from './pages/Home/Home';
import Invite from './pages/Invite/Invite';
import Loading from './pages/Loading/Loading';

import MessageBox from './pages/MessageBox/MessageBox';
import MyCards from './pages/MyCards/MyCards';
import Products from './pages/Product/Products';
import ProductDetail from './pages/Product/ProductDetail';
import ProductDetailCard from './pages/Product/ProductDetailCard';
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
import PaymentInsurance from './pages/Product/PaymentInsurance';
import ProductTransaction from './pages/Product/ProductTransaction';
// import ChooseMethodPage from './pages/Auth/ChooseMethodPage';
import alborzImg from '../src/assets/images/alborzImg.png';
import alborLightzImg from '../src/assets/images/bimeAlborz.png';
import { useTheme } from '@emotion/react';
// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <AuthGuard>{children}</AuthGuard>;
};

// Public Route Component (redirect to app if authenticated)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? <>{children}</> : <Navigate to="/app" replace />;
};

// App Routes Component
const AppRoutes: React.FC = () => {
    const theme = useTheme();
    const isDark = theme === 'dark';
    return (
        <Routes>
            {/* Auth Routes */}
            <Route
                path="/auth"
                element={
                    <PublicRoute>
                        <MobilePage />
                    </PublicRoute>
                }
            />
            {/* <Route path="/auth/choose" element={<PublicRoute><ChooseMethodPage /></PublicRoute>} /> */}
            <Route
                path="/auth/otp"
                element={
                    <PublicRoute>
                        <OtpPage />
                    </PublicRoute>
                }
            />
            <Route
                path="/auth/unified"
                element={
                    <PublicRoute>
                        <AuthPage />
                    </PublicRoute>
                }
            />

            {/* Public Routes */}
            <Route path="/loading" element={<Loading />} />
            <Route path="/" element={<Navigate to="/auth/unified" replace />} />
            <Route
                path="/register"
                element={
                    <PublicRoute>
                        <Register />
                    </PublicRoute>
                }
            />

            <Route
                path="/app"
                element={
                    <ProtectedRoute>
                        <Layout>
                            <Home />
                        </Layout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <ProtectedRoute>
                        <Layout>
                            <Profile />
                        </Layout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/my-cards"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="کارت‌های من">
                            <MyCards />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/wallet"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="کیف پول">
                            <Wallet />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />

            <Route
                path="/products"
                element={
                    <SimpleLayout headerImg={isDark ? alborzImg : alborLightzImg}>
                        <Products />
                    </SimpleLayout>
                }
            />
            <Route
                path="/products/:id"
                element={
                    <SimpleLayout headerImg={isDark ? alborzImg : alborLightzImg}>
                        <ProductDetailCard />
                    </SimpleLayout>
                }
            />
            <Route
                path="/products/:id/card"
                element={
                    <SimpleLayout headerImg={isDark ? alborzImg : alborLightzImg}>
                        <ProductDetail />
                    </SimpleLayout>
                }
            />

            <Route
                path="/paymentInsurance"
                element={
                    <SimpleLayout headerImg={isDark ? alborzImg : alborLightzImg}>
                        <PaymentInsurance />
                    </SimpleLayout>
                }
            />
            <Route
                path="/productTransaction"
                element={
                    <SimpleLayout headerImg={isDark ? alborzImg : alborLightzImg}>
                        <ProductTransaction />
                    </SimpleLayout>
                }
            />

            <Route
                path="/buy"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="سرمایه‌گذاری در طلا">
                            <Buy />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route path="/successful-transaction" element={<SuccessfulTransaction />} />
            <Route path="/failed-transaction" element={<FailedTransaction />} />
            <Route
                path="/payment-information"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="اطلاعات پرداخت">
                            <PaymentInformation />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/transactions"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="تراکنش‌ها">
                            <Transactions />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/transaction-details"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="جزئیات پرداخت">
                            <TransactionDetails />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/rules"
                element={
                    // <ProtectedRoute>
                    <SimpleLayout title="قوانین و مقررات">
                        <Rules />
                    </SimpleLayout>
                    // </ProtectedRoute>
                }
            />
            <Route
                path="/invite"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="دعوت دوستان">
                            <Invite />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/suggestions"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="نظرات و پیشنهادات">
                            <Suggestions />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/about"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="درباره‌ی ما">
                            <About />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/settings"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="تنظیمات">
                            <Settings />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/message-box"
                element={
                    <ProtectedRoute>
                        <SimpleLayout title="صندوق پیام‌ها">
                            <MessageBox />
                        </SimpleLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/myCard"
                element={
                    <SimpleLayout title="افزودن کارت‌های من">
                        <MyCards />
                    </SimpleLayout>
                }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
