import TestA from "../components/Test/TestA";
import s from './style.module.css'
import { useState, useEffect } from "react";
import TestB from "../components/Test/TestB";
const axios = require('axios')

const coinGeckoApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const walletsTemplate = [
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
        name: 'XRP',
        code: 'XRP',
        address: '3333'
    }, 
]


const MainPage = () => {

    const [coins, setCoins] = useState(walletsTemplate)
    const [api, setApi] = useState()

    const cryptoNames = []

    useEffect(() => {
        const getCoins = async () => {
            try {
                const res = await axios.get(`/api/payment/wallets`)
                setCoins(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        const getCryptoApi = () => {
            axios.get(coinGeckoApi)
            .then(res => {
                setApi(res.data)
            })
            .catch(e => console.log(e))
        }
        getCoins()
        getCryptoApi()
    }, [])

    if(coins.length !== 0) {
        coins.forEach(item => cryptoNames.push(item.name))
    }

    let filteredApi = api ? api.filter(item => cryptoNames.includes(item.name)) : null


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

        let selectGive = document.querySelector('#give')
        let selectTake = document.querySelector('#take')

        if(selectGive.value === selectTake.value && selectGive.value !== 'Bitcoin') {
            selectTake.value = 'Bitcoin'
            setTakeName('Bitcoin')
        }
        if(selectGive.value === selectTake.value && selectGive.value !== 'Ethereum') {
            selectTake.value = 'Ethereum'
            setTakeName('Ethereum')
        }

        
    }
    const handleTakeChange = event => {
        setTakeName(event.target.value)

        let selectGive = document.querySelector('#give')
        let selectTake = document.querySelector('#take')

        if(selectTake.value === selectGive.value && selectTake.value !== 'Bitcoin') {
            selectGive.value = 'Bitcoin'
            setGiveName('Bitcoin')
        }
        if(selectTake.value === selectGive.value && selectTake.value !== 'Ethereum') {
            selectGive.value = 'Ethereum'
            setGiveName('Ethereum')
        }
    }
    return (
        <div className={s.container}>
            <TestA
                giveName={giveName}
                takeName={takeName}
                handleGiveChange={handleGiveChange}
                handleTakeChange={handleTakeChange}
                handleSwitch={handleSwitch}
                filteredApi={filteredApi}
                walletsTemplate={walletsTemplate}
            />
            <br/>
            <TestB
                giveName={giveName}
                takeName={takeName} 
                coinsDb={coins}
                walletsTemplate={walletsTemplate}
            />
        </div>
    );
};

export default MainPage;