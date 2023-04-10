import React from 'react'
import ChangeQuote from './ChangeQuote'


const ContainerInfo = ({quote, handleNewQuote}) => {
  return (
    <div>
      <section className='containerInfo__title'>
        <h1>GALLETAS DE LA FORTUNA</h1>

        <article className='containerInfo__phrase'>
          <p>{quote.quote}</p>
        </article>
      </section>

      <ChangeQuote handleNewQuote={handleNewQuote} />

    </div>
  )
}

export default ContainerInfo