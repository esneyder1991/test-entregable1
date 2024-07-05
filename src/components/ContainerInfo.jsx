import React from "react";
import Button from "./Button";
import "./styles/ContainerInfo.css";

const ContainerInfo = ({ quote, handleNewQuote }) => {
  return (
    <section className="containerInfo">
      <h1 className="containerInfo__title">Fortune Cookies</h1>

      <Button handleNewQuote={handleNewQuote} />

      <article className="containerInfo__quote">
        <p>{quote.quote}</p>
        <img className="quotes" src="/images/Vector.png" />
      </article>
      <article>
        <h4>Author : {quote.author}</h4>
      </article>
    </section>
  );
};

export default ContainerInfo;
