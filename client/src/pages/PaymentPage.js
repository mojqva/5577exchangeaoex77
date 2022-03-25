import { useLocation } from "react-router-dom";
import PaymentInfo from "../components/Payment/PaymentInfo";

const PaymentPage = () => {
    const location = useLocation()
    const {give, take, address, email, telegram, giveName, ownerAddress} = location.state || {}

    console.log(ownerAddress);
    return (
        <div> 
            <PaymentInfo
                give={give}
                take={take}
                address={address}
                email={email}
                telegram={telegram}
                giveName={giveName}
                cryptoAddress={ownerAddress}
            />
        </div>
    );
};

export default PaymentPage;