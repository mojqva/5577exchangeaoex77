import { useLocation } from "react-router-dom";
import PaymentInfo from "../components/Payment/PaymentInfo";
import s from './payment.module.css'

const PaymentPage = () => {
    const location = useLocation()
    const {giveName, giveSymbol, giveImg, takeName, takeSymbol, takeImg, userAddress, giveAmount, takeAmount, number, ownerAddress} = location.state || {}

    return (
        <div className={s.payment}> 
            <PaymentInfo
                giveName={giveName}
                takeName={takeName}
                giveSymbol={giveSymbol}
                takeSymbol={takeSymbol}
                giveImg={giveImg}
                takeImg={takeImg}
                userAddress={userAddress}
                giveAmount={giveAmount}
                takeAmount={takeAmount}
                number={number}
                ownerAddress={ownerAddress}
            />
        </div>
    );
};

export default PaymentPage;