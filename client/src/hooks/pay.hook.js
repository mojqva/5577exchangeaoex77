import {useState, useCallback, useEffect} from 'react'
const storageName = 'paymentUser'
const test = 'form, giveItem, takeItem, owner, day, month, year, time'

const usePay = () => {
    const [payment, setPayment] = useState(false)
    const [giveName, setGiveName] = useState(null)
    const [hoursTimer, setHoursTimer] = useState('00')
    const [minutesTimer, setMinutesTimer] = useState('00')
    const [secondsTimer, setSecondsTimer] = useState('00')

    const pay = useCallback(() => {
        setPayment(true)
        // setGiveName(nameGive)
        // setHoursTimer(hoursTimer)
        // setMinutesTimer(minutesTimer)
        // setSecondsTimer(secondsTimer)

        // localStorage.setItem(storageName, JSON.stringify({
        //     giveName: nameGive,
        // }))
    }, [])

    const cancelPay = useCallback(() => {
        setPayment(false)

        // localStorage.removeItem(storageName)
    }, [])

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem(storageName))

    //     if (data) {
    //         pay(data.giveName, data.hoursTimer, data.minutesTimer, data.secondsTimer)
    //     } else {
    //         setPayment(false)
    //     }
    // }, [pay])

    return {payment, pay, cancelPay, giveName, hoursTimer, minutesTimer, secondsTimer}
}

export default usePay