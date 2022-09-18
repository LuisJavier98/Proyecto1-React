import React, { useState } from 'react'
import Button from './Button'
import quotes from './json/quotes.json'


const Quotebox = ({ colorRandom, getColorRandom }) => {
    const selectQuote = () => quotes[Math.floor(Math.random() * quotes.length)]
    const [randomQuote, setfirst] = useState(selectQuote())
    const getRandomAll = () => {
        setfirst(selectQuote());
        getColorRandom()
    }
    return (

        <article style={{ color: colorRandom }} className='card'>
            <div className='card_firstLine'>
                <em style={{ color: colorRandom }} className='card_comillas'>“</em>
                <p className='card_quote'>{randomQuote.quote}</p>
            </div>
            <h1 className='card_author'>{randomQuote.author}</h1>
            <Button
            getRandomAll={getRandomAll}
            colorRandom={colorRandom}/>
        </article>

    )
}

export default Quotebox