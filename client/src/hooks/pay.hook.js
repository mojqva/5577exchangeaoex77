import {useState, useCallback} from 'react'

const usePay = () => {
    const [payment, setPayment] = useState(false)

    const pay = useCallback(() => {
        setPayment(true)
    }, [])

    return {payment, pay}
}

export default usePay