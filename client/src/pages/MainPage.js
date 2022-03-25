import TestA from "../components/Test/TestA";
import s from './style.module.css'
import { useState, useEffect } from "react";
import TestB from "../components/Test/TestB";
const axios = require('axios')

const coins1 = [
    {
        name: 'Bitcoin',
        code: 'BTC',
        address: '1111'
    },
    {
        name: 'Ethereum',
        code: 'ETH',
        address: '2222'
    },
    {
        name: 'Ripple',
        code: 'XRP',
        address: '3333'
    },
    
]


const MainPage = () => {
    const [coins, setCoins] = useState(coins1)

    //test func for date
    const getDate = () => {
        const today = new Date(Date.now()).toLocaleString();
        console.log(today)
    }

    useEffect(() => {
        const getCoins = async () => {
            try {
                const res = await axios.get(`/api/payment/wallets`)
                setCoins(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getCoins()
    }, [])


    const [giveName, setGiveName] = useState(coins[0].name)
    const [takeName, setTakeName] = useState(coins[1].name)

    console.log(coins);

    const handleSwitch = ()=> {
        const temp = giveName
        setGiveName(takeName)
        setTakeName(temp)

        let selectGive = document.querySelector('#give')
        let selectTake = document.querySelector('#take')
        selectTake.value = [selectGive.value, selectGive.value = selectTake.value][0]
        // [selectGive.value, selectTake.value] = [selectTake.value, selectGive.value]

        const giveCoins = document.querySelector('#giveCoins')
        const takeCoins = document.querySelector('#takeCoins')
        takeCoins.value = [giveCoins.value, giveCoins.value = takeCoins.value][0]
        getDate()
    }

    const handleGiveChange = event => {
        setGiveName(event.target.value)
    }
    const handleTakeChange = event => {
        setTakeName(event.target.value)
    }
    return (
        <div className={s.container}>
            <TestA
                giveName={giveName}
                takeName={takeName}
                handleGiveChange={handleGiveChange}
                handleTakeChange={handleTakeChange}
                handleSwitch={handleSwitch}
                coins={coins}
            />
            <br/>
            <TestB
                giveName={giveName}
                takeName={takeName} 
                coins={coins}
            />
        </div>
    );
};

export default MainPage;