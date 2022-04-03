import {useState, useEffect} from 'react'
import s from './style.module.css'
import cn from 'classnames'

const Dropdown = ({sameChange, selected, selectCurrency, give, filteredApi, walletsTemplate}) => {
    const List = filteredApi ? filteredApi : walletsTemplate
    
    const Selected = give ? selected.give : selected.take

    console.log(List);

    const [isListOpen, setIsListOpen] = useState(false)

    const [filter, setFilter] = useState('')

    const selectItem = (item) => {
        selectCurrency(item.symbol, give)
        setIsListOpen(false)
    }


    return (
        <div className={s.customCurrencyDropdown}>
            {
                isListOpen
                ?   <div className={s.search}>
                        <input
                            type='text'
                            className={s.inp}
                            placeholder='Какая валюта нужна'
                            value={filter}
                            onChange={(event) => setFilter(event.target.value)}
                        />
                        <span className={cn(s.icon, s.eas)}></span>
                        <span className={cn(s.arrow, s.close, s.eas)}>
                            <span className={s.flaticonArrTop} onClick={() => setIsListOpen(false)}>
                                /\
                            </span>
                        </span>
                    </div>
                :   <div className={s.selected}>
                        <span className={cn(s.icon, s.customCurrencyGiveIcon)}>
                            <img src={Selected.image} alt={Selected.name}></img>
                        </span>
                        <span className={s.customCurrencyDropdownTitle}>
                            <span className={cn(s.name, s.customCurrencyGiveName)}>
                                {Selected.name}
                            </span>
                            <span className={cn(s.currency, s.customCurrencyGiveCurrency)}>
                                {Selected.symbol}
                            </span>
                        </span>
                        <span className={cn(s.arrow, s.eas)}>
                            <span className={s.flaticonArrDown} onClick={() => setIsListOpen(true)}>
                                \/
                            </span>
                        </span>
                    </div>
            }
            {
                isListOpen && (
                    <ul className={s.list}>
                        {List.length !== 0
                        ?   List.filter(i => i.name.toLowerCase().includes(filter.toLowerCase()) || i.symbol.toLowerCase().includes(filter.    toLowerCase()) ||filter === '').map(item => (
                                <li key={item.code} onClick={() => selectItem(item)}>
                                    <span className={s.icon}>
                                        <img src={item.image} alt={item.name}></img>
                                    </span>
                                    <span className={s.customCurrencyDropdownTitle}>
                                        <span className={s.name}>{item.name}</span>
                                        <span className={s.currency}>{item.symbol}</span>
                                        {
                                            !give && (
                                                <span>{item.current_price}</span>
                                            )
                                        }
                                    </span>
                                </li>
                            ))
                        : <li className={s.empty}>Ничего не найдено</li>
                        }
                    </ul>
                )
            }
            
            
        </div> 
    )
}

export default Dropdown