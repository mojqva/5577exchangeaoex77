import { useState, useEffect } from "react";
import Bestchanger from '../Bestchanger/Bestchanger'
import Gamity from '../Gamity/Gamity'
import s from './middle.module.css'
import TestA from '../Test/TestA'
import TestB from '../Test/TestB'
import ExchangerIn from "../Exchangers/ExchangerIn";
import ExchangerOut from "../Exchangers/ExchangerOut";
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
    const cryptoNames = []

    let isCancel = false

    useEffect(() => {
        
        // const getCoins = async () => {
        //     try {
        //         if(!isCancel) {
        //             const res = await axios.get(`/api/payment/wallets`)
        //             const data = await res.data
        //             setCoins(data)

        //             return data
        //         }
                
        //     } catch (error) {
        //         console.error(error)
        //     }
        // }  

        const getCryptoApi = async () => {
            try {
                if(!isCancel) {
                    const response = await axios.get(coinGeckoApi)
                    const data = await response.data
                    setApi(data)
        
                    return data
                }   
            } catch (e) {
                throw new Error(e)
            }
        }
        getCryptoApi()
        // getCoins()


        //Cleanup
        return () => {isCancel = true}
        
    }, [])


    coins.forEach(item => cryptoNames.push(item.symbol.toLowerCase()))

    let filteredApi = coins && api ? api.filter(item => cryptoNames.includes(item.symbol)): []
    
    const [selected, setSelected] = useState({
        give: 'btc',
        take: 'eth'
    })

    const selectCurrency = (code, give) => {
        const item = filteredApi.find(item => item.symbol === code)
        if(give) {
            let equal = item.symbol === selected.take
            if(equal) {
                if(item.symbol === 'btc') {
                    setSelected(prev => ({
                        give: item.symbol,
                        take: 'eth'
                    }))
                    return
                }
                setSelected(prev => ({
                    give: item.symbol,
                    take: 'btc'
                }))
                return
            }
            setSelected(prev => ({
                give: item.symbol,
                take: prev.take
            }))
            return
        }
        if(!give) {
            let equal = item.symbol === selected.give
            if(equal) {
                if(item.symbol === 'btc') {
                    setSelected(prev => ({
                        give: 'eth',
                        take: item.symbol
                    }))
                    return
                }
                setSelected(prev => ({
                    give: 'btc',
                    take: item.symbol
                }))
                return
            }
            setSelected(prev => ({
                give: prev.give,
                take: item.symbol
            }))
        }
        

        // give ? setSelected(prev => ({
        //     take: prev.take,
        //     give: item.symbol
        // }))
        // : setSelected(prev => ({
        //     give: prev.give,
        //     take: item.symbol
        // }))
    }

    // const sameChange = () => {
    //     setSelected(prev => ({
    //         take: prev.take,
    //         give: coins[0]
    //     }))
    // }

    // useEffect(() => {
    //     console.log('newItem from header middle', selected.give)
    //     sameChange()       
    // })

    return (
        <div className={s.headerMiddle}>
            <div className={s.inner}>
                <Gamity/>
                <Bestchanger/>
                {
                    filteredApi.length !== 0 ?
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
                    <ExchangerOut
                        selected={selected}
                        coins={coins}
                        filteredApi={filteredApi}
                    />
                    </div>
                    :null
                }
                
            </div>
        </div>
    )
}

export default HeaderMiddle
