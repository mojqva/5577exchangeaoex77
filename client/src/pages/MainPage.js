import TestA from "../components/Test/TestA";
import s from './style.module.css'
import { useState } from "react";
import TestB from "../components/Test/TestB";

const coins = [
    {
        name: 'Bitcoin',
        code: 'BTC'
    },
    {
        name: 'Ethereum',
        code: 'ETH'
    },
    {
        name: 'Ripple',
        code: 'XRP'
    },
    
]


const MainPage = () => {

    const [giveName, setGiveName] = useState(coins[0].name)
    const [takeName, setTakeName] = useState(coins[1].name)

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