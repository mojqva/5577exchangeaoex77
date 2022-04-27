import React from 'react'
import { useLocation } from "react-router-dom";
import { useContext, useEffect} from "react";
import { AuthContext } from "../context/AuthContext";
import { useCountdown } from "../hooks/countdown.hook";
import PaymentInfo from "../components/Payment/PaymentInfo";
import CancelPage from "./CancelPage";
import s from './payment.module.css'


const PaymentPage = () => {
    const location = useLocation()
    const {giveName, giveSymbol, giveImg, takeName, takeSymbol, takeImg, userAddress, giveAmount, takeAmount, number, ownerAddress, day, month, year, minutes, hour, currDate, green, qr} = location.state || {}

    const auth = useContext(AuthContext)

    const newDate = Date.parse(new Date())

    const [timeH, timeM, timeS] = useCountdown(currDate, newDate)

    useEffect(() => {  
        auth.pay()
    }, [timeH, timeM, timeS, auth])

    if(timeH + timeM + timeS <= 0) {   
        auth.isPayment = false
    }

    return (
        <div className={s.payment}> 
            {
                auth.isPayment 
                ? <PaymentInfo
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
                day={day}
                month={month}
                year={year}
                minutes={minutes}
                hour={hour}
                ownerAddress={ownerAddress}
                timeH={timeH}
                timeM={timeM}
                timeS={timeS}
                green={green}
                qr={qr}
                    />
                : <CancelPage/>
            } 
        </div>
    );
};

export default PaymentPage;