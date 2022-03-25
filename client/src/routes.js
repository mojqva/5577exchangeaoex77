import { Routes, Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import AccountPage from './pages/AccountPage'
import BlogPage from './pages/BlogPage'
import BoosterPage from './pages/BoosterPage'
import CryptoPage from './pages/CryptoPage'
import ErrorPage from './pages/ErrorPage'
import HelpPage from './pages/HelpPage'
import SupportPage from './pages/SupportPage'
import MainPage from './pages/MainPage'
import PartnersPage from './pages/PartnersPage'
import ReviewsPage from './pages/ReviewsPage'
import CancelPage from './pages/CancelPage'
import PaymentPage from './pages/PaymentPage'

export const useRoutes = (isAuthenticated, isPayment) => {
    if (isAuthenticated) {
        return (
            <Routes>
                {'//General'}
                {
                    isPayment ? <Route path="/payment/go/:id" element={<PaymentPage/>}/> : null
                }
                <Route path="/" exact element={<MainPage/>}/>
                <Route path="/booster" exact element={<BoosterPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/pages/help" element={<HelpPage/>}/>
                <Route path="/reviews" element={<ReviewsPage/>}/>
                <Route path="/partners" element={<PartnersPage/>}/>
                <Route path="/pages/crypto-helper" element={<CryptoPage/>}/>
                <Route path="/support" element={<SupportPage/>}/>
                <Route path="/account" element={<AccountPage/>}/>
                <Route path="/payment/go/:id" element={<CancelPage/>}/>
                <Route path="*" exact element={<ErrorPage/>} />
                {'//RU'}
                <Route path="/ru/" exact element={<MainPage/>}/>
                <Route path="/ru/booster" exact element={<BoosterPage/>}/>
                <Route path="/ru/blog" element={<BlogPage/>}/>
                <Route path="/ru/about" element={<AboutPage/>}/>
                <Route path="/ru/pages/help" element={<HelpPage/>}/>
                <Route path="/ru/reviews" element={<ReviewsPage/>}/>
                <Route path="/ru/partners" element={<PartnersPage/>}/>
                <Route path="/ru/pages/crypto-helper" element={<CryptoPage/>}/>
                <Route path="/ru/support" element={<SupportPage/>}/>
                <Route path="/ru/account" element={<AccountPage/>}/>
                <Route path="/ru/payment/go/:id" element={<CancelPage/>}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" exact element={<MainPage/>}/>
            {
                isPayment ? <Route path="/payment/go/:id" element={<PaymentPage/>}/> : null
            }
            <Route path="/booster" exact element={<BoosterPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/pages/help" element={<HelpPage/>}/>
            <Route path="/reviews" element={<ReviewsPage/>}/>
            <Route path="/partners" element={<PartnersPage/>}/>
            <Route path="/pages/crypto-helper" element={<CryptoPage/>}/>
            <Route path="/support" element={<SupportPage/>}/>
            <Route path="/payment/go/:id" element={<CancelPage/>}/>
            <Route path="*" exact element={<ErrorPage/>} />

            <Route path="/ru/" exact element={<MainPage/>}/>
            <Route path="/ru/booster" exact element={<BoosterPage/>}/>
            <Route path="/ru/blog" element={<BlogPage/>}/>
            <Route path="/ru/about" element={<AboutPage/>}/>
            <Route path="/ru/pages/help" element={<HelpPage/>}/>
            <Route path="/ru/reviews" element={<ReviewsPage/>}/>
            <Route path="/ru/partners" element={<PartnersPage/>}/>
            <Route path="/ru/pages/crypto-helper" element={<CryptoPage/>}/>
            <Route path="/ru/support" element={<SupportPage/>}/>
            <Route path="/ru/payment/go/:id" element={<CancelPage/>}/>
        </Routes>
    )
}