import { useLocation } from "react-router-dom";
import CancelPage from "./CancelPage";

const PaymentPage = () => {
    const location = useLocation()
    const {give, take, address, email, telegram} = location.state || {}
    return (
        <div>
            PaymentPage
            <p>Отдаете {give}</p>
            <p>Получаете {take}</p>
            <p>На адрес {address}</p>
            <p>Ваша почта {email}</p>
            <p>Ваш телеграм {telegram}</p>   
        </div>
    );
};

export default PaymentPage;