import React from 'react'

export default function QuoteText({ quotes, number }) {
  return (
    <div className='quote-text' id='text'>{quotes[number][1]}</div>
  )
}
