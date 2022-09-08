/* eslint-disable default-case */
import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import { formatReal } from "../../helper";
import FlagSouthAfrica from "../../assets/images/flag-south-africa.svg";
import FlagGermany from "../../assets/images/flag-germany.svg";
import FlagArgentina from "../../assets/images/flag-argentina.svg";
import FlagAustralia from "../../assets/images/flag-australia.svg";
import FlagBrazil from "../../assets/images/flag-brazil.svg";
import FlagChile from "../../assets/images/flag-chile.svg";
import FlagSpain from "../../assets/images/flag-spain.svg";
import FlagFrance from "../../assets/images/flag-france.svg";
import FlagHungary from "../../assets/images/flag-hungary.svg";
import FlagItaly from "../../assets/images/flag-italy.svg";
import FlagLebanon from "../../assets/images/flag-lebanon.svg";
import FlagNewZealand from "../../assets/images/flag-new-zealand.svg";
import FlagPortugal from "../../assets/images/flag-portugal.svg";
import FlagUruguay from "../../assets/images/flag-uruguay.svg";
import circle from "../../assets/images/circle.svg";

import IconCart from "../../assets/images/icon-cart.svg";

function Card({ produtos }) {
  const getFlag = (pais) => {
    switch (pais) {
      case "Uruguai":
        return FlagUruguay;
      case "Portugal":
        return FlagPortugal;
      case "Nova Zelândia":
        return FlagNewZealand;
      case "Líbano":
        return FlagLebanon;
      case "Itália":
        return FlagItaly;
      case "Hungria":
        return FlagHungary;
      case "Espanha":
        return FlagSpain;
      case "Chile":
        return FlagChile;
      case "Austrália":
        return FlagAustralia;
      case "Argentina":
        return FlagArgentina;
      case "África do Sul":
        return FlagSouthAfrica;
      case "Alemanha":
        return FlagGermany;
      case "Brasil":
        return FlagBrazil;
      case "França":
        return FlagFrance;
    }
  };

  return (
    <section className="cards">
      {produtos.map((product) => {
        return (
          <article className="card border-purple mb3" key={product.id}>
            <figure className="mb2">
              <div
                className="flag"
                style={{ backgroundImage: `url(${getFlag(product.pais)})` }}
              ></div>
              <img src={product.imagem} alt={product.titulo} />
            </figure>
            <div className="content">
              <h2 className="title text text-support text-size-default mb1">
                {product.titulo}
              </h2>
             {/*  {product.preco_promocional == null ? (
                <div className="price mb2">
                  <span className="old text text-support text-size-default text-feature"></span>
                  <span className="new title h2 text-secondary">
                    <strong>R$ {formatReal(product.preco)}</strong>
                  </span>
                </div>
              ) : (
                <div className="price mb2">
                  <span className="old text text-support text-size-default text-feature">
                    R$ {formatReal(product.preco)}
                  </span>
                  <span className="new title h2 text-secondary">
                    <strong>R$ {formatReal(product.preco_promocional)}</strong>
                  </span>
                </div>
              )} */}

              <div className="action">
                <Link
                  to={`/produto/${product.id}`}
                  title="Quero esse!"
                  className="button button-background button100 bg-purple text-support text-size-default"
                >
                  <img
                    src={IconCart}
                    alt="Quero esse!"
                    className="icon-button"
                  />
                  Quero esse!
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default Card;
