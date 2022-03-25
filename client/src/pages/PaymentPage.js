import { useLocation } from "react-router-dom";
import CancelPage from "./CancelPage";

const wallets = {
    'Bitcoin': '1111',
    'Ethereum': '2222',
    'Ripple': '3333',
}

const PaymentPage = () => {
    const location = useLocation()
    const {give, take, address, email, telegram, giveName} = location.state || {}
    const toCoinWallet = wallets[giveName]
    return (
        <div>
            PaymentPage
            <p>Отдаете {give}</p>
            <p>Получаете {take}</p>
            <p>На адрес {address}</p>
            <p>Ваша почта {email}</p>
            <p>Ваш телеграм {telegram}</p>   
            <br/>
            <p>Нужно оплатить {give} {giveName} по адресу {toCoinWallet}</p>
        </div>
    );
};

export default PaymentPage;