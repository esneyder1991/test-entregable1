import React from 'react'
import Button from './Button';
import "./styles/ContainerInfo.css"

const ContainerInfo = ({quote, handleNewQuote}) => {
   
  return (
    <section className="containerInfo">
      <h1 className="containerInfo__title">Galletas de la fortuna</h1>

       
      <Button handleNewQuote={handleNewQuote}/>

      <article className= "containerInfo__quote">
        <p>{quote.quote}</p>
        <img className = "quotes" src="/images/Vector.png"/>
      </article>

     
    </section>
  );
};

export default ContainerInfo
