/* eslint-disable default-case */
import React from "react";
import "./card-pesquisa.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

import IconCart from "../../assets/images/icon-cart.svg";

function CardPesquisa({ produtos }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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
    <>
      {console.log(produtos)}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        // autoPlaySpeed={1000}
        keyBoardControl={false}
        // customTransition="all .5"
        // transitionDuration={500}
        containerClass="carousel-container card-pesquisa"
        // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        arrows={true}
      >
        {produtos.map((product) => {
          return (
            <div className="card border-purple mb3" key={product.id}>
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
                      <strong>
                        R$ {formatReal(product.preco_promocional)}
                      </strong>
                    </span>
                  </div>
                )} */}
                <div className="action">
                  <Link
                    to={`/produto/${product.id}`}
                    title="Quero esse!"
                    className="button button-background button100 bg-yellow text-primary text-size-default"
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
            </div>
          );
        })}
      </Carousel>
    </>
  );
}

export default CardPesquisa;
