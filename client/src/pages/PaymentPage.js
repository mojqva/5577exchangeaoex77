import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { useCountdown } from "../hooks/countdown.hook";
import PaymentInfo from "../components/Payment/PaymentInfo";
import CancelPage from "./CancelPage";
import s from './payment.module.css'


const PaymentPage = () => {
    const location = useLocation()
    const {giveName, giveSymbol, giveImg, takeName, takeSymbol, takeImg, userAddress, giveAmount, takeAmount, number, hash, ownerAddress, day, month, year, minutes, hour} = location.state || {}
    const storageName = hash

    const [state, setState] = useState({
        timer: {}
    })
    // const distance = new Date().getTime() - (new Date().getTime() + 100000)
    const [countDownNum, setCountDownNum] = useState(10000)

    const auth = useContext(AuthContext)

    // const [countDown] = useCountdown()

    // const getReturnValues = (countDown) => {
    //     // calculate time left
    //     const hoursTimer = Math.floor(
    //         (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //     );
    //     const minutesTimer = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    //     const secondsTimer = Math.floor((countDown % (1000 * 60)) / 1000);

    //     return [hoursTimer, minutesTimer, secondsTimer];
    // };

    const [timeH, timeM, timeS] = useCountdown(countDownNum)

    useEffect(() => {
        localStorage.setItem(storageName, JSON.stringify({isPayment: auth.isPayment, timeH, timeM, timeS}))
        const localStorageRef = localStorage.getItem(storageName)
        auth.isPayment = JSON.parse(localStorageRef).isPayment
        if(auth.isPayment) {
            auth.pay()
        }
        console.log(localStorageRef);
    }, [])

    useEffect(() => {  
        if(auth.isPayment) {
            auth.pay()
            localStorage.setItem(storageName, JSON.stringify({isPayment: auth.isPayment, timeH, timeM, timeS}))
            const localStorageRef = localStorage.getItem(storageName)
            setState({timer: JSON.parse(localStorageRef)})
            // setCountDownNum(prev => prev - 1000)
            // setCountDownNum(JSON.parse(localStorageRef.count))
        }  
    }, [timeH, timeM, timeS, auth])

    if(timeH + timeM + timeS <= 0) {   
        auth.isPayment = false
        localStorage.setItem(storageName, JSON.stringify({isPayment: auth.isPayment, timeH: '00', timeM: '00', timeS: '00'}))
        localStorage.removeItem(storageName)
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
                timeH={state.timer.timeH}
                timeM={state.timer.timeM}
                timeS={state.timer.timeS}
                    />
                : <CancelPage/>
            } 
        </div>
    );
};

export default PaymentPage;