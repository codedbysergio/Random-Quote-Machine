import React, { useContext } from 'react'
import { QuoteContext } from './App'

export default function NewQuote() {

  const { handleNextQuote, handleNextColor } = useContext(QuoteContext)

  function handleClick() {
    handleNextQuote();
    handleNextColor();
  }

  return (
    <button 
      className="button"
      id="new-quote"
      onClick={() => handleClick()}
    >New Quote</button>
  )
}
