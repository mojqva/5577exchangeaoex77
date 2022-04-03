import { useState, useEffect } from "react";
import Bestchanger from '../Bestchanger/Bestchanger'
import Gamity from '../Gamity/Gamity'
import Navbar from '../Navbar/Navbar'
import s from './middle.module.css'
import TestA from '../Test/TestA'
import TestB from '../Test/TestB'
import ExchangerIn from "../Exchangers/ExchangerIn";
const axios = require('axios')

const coinGeckoApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

const walletsTemplate = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        address: '1111',
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        address: '2222',
        image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
    },
    {
        name: 'XRP',
        symbol: 'XRP',
        address: '3333',
        image: "https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
    }, 
]

const HeaderMiddle = () => {

    const [coins, setCoins] = useState(walletsTemplate)
    const [api, setApi] = useState()
    const [selected, setSelected] = useState({
        give: coins[0],
        take: coins[1]
    })

    const selectCurrency = (code, give) => {
        const item = filteredApi.find(item => item.symbol === code)
        give ? setSelected(prev => ({
            take: prev.take,
            give: item
        }))
        : setSelected(prev => ({
            give: prev.give,
            take: item
        }))
    }

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
    console.log(filteredApi);


    const [giveName, setGiveName] = useState(coins[0])
    const [takeName, setTakeName] = useState(coins[1])


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

    // const sameChange = (give) => {
    //     console.log(selected);
    //     if(selected.give.name === selected.take.name) {
    //         if(give) {
    //             selected.give === coins[0] ? setSelected(...selected.give, selected.take = coins[1]) : setSelected(...selected.give, selected.take = coins[0])
    //         }
    //         selected.take === coins[0] ? setSelected(...selected.take, selected.give = coins[1]) : setSelected(...selected.take, selected.give = coins[0])   
    //     }
    // }


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
        <div className={s.headerMiddle}>
            <div className={s.inner}>
                <Gamity/>
                <Bestchanger/>
                <div className={s.exchange}>
                    {/* <TestA
                        giveName={giveName}
                        takeName={takeName}
                        handleGiveChange={handleGiveChange}
                        handleTakeChange={handleTakeChange}
                        handleSwitch={handleSwitch}
                        filteredApi={filteredApi}
                        walletsTemplate={walletsTemplate}
                    />
                    <TestB
                        giveName={giveName}
                        takeName={takeName} 
                        coinsDb={coins}
                        walletsTemplate={walletsTemplate}
                    /> */}
                    <ExchangerIn
                        selected={selected}
                        selectCurrency={selectCurrency}
                        filteredApi={filteredApi}
                        walletsTemplate={walletsTemplate}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle
