import React from 'react'


const ChangeQuote = ({handleNewQuote}) => {
  return (
    <div>
      <button className='button' onClick={handleNewQuote}>Ver otro</button>
    </div>
  )
}

export default ChangeQuote