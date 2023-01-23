import React from 'react'
import Twitter from './Twitter'
import Facebook from './Facebook'
import NewQuote from './NewQuote'

export default function Buttons({ quotes, number}) {
  return (
    <div className='buttons'>
        <Twitter className="buttons" quotes={quotes} number={number}/>
        <Facebook className="buttons" />
        <NewQuote className="buttons" />
    </div>
  )
}
