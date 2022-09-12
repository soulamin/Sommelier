/* eslint-disable default-case */
import React from "react";
import "./wine.css";
import { Link } from "react-router-dom";
import { formatReal } from "../../helper";
import IconCart from "../../assets/images/icon-cart.svg";
import IconTemperatura from "../../assets/images/icon-temperatura.svg";
import IconCaracteristicas from "../../assets/images/icon-caracteristicas.svg";
import IconTipo from "../../assets/images/icon-tipo.svg";
import IconPais from "../../assets/images/icon-pais.svg";
import IconTeor from "../../assets/images/icon-teor.svg";
import IconVolume from "../../assets/images/icon-volume.svg";
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
import IconCircle from "../../assets/images/circle.svg";

function Wine({ product }) {
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
  var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';

  return (
    <section className="wine">
      <h1 className="title h1 text-support mb3">
        <strong>{product.titulo}</strong>
      </h1>
      <header class="info border-purple mb3">
        <figure>
          {/* <div
            class="flag"
            style={{ backgroundImage: `url(${getFlag(product.pais)})` }}
          ></div> */}
          <img src={product.imagem} alt="Vinho" />
        </figure>
        <div class="content">
          {/* <div class="mb1">
            <p class="text text-size-extrasmall text-secondary">
              País de Origem
            </p>
            <p class="text text-size-default text-support">{product.pais}</p>
          </div> */}
          <div class="mb1">
            <p class="text text-size-extrasmall text-primary">Nome</p>
            <p class="text text-size-default text-support">{product.tipo}</p>
          </div>
          {/*  {product.preco_promocional == null ? (
            <div class="mb2">
              <p class="price title h1 text-secondary">
                R$ {formatReal(product.preco)}
              </p>
            </div>
          ) : (
            <div class="mb2">
              <p class="price-old title h3 text-feature mb1">
                R$ {formatReal(product.preco)}
              </p>
              <p class="price title h1 text-secondary">
                R$ {formatReal(product.preco_promocional)}
              </p>
            </div>
          )} */}

          <div class="action">
            <Link
              to={"/sucesso"}
              state={{
                product: product,
              }}
              title="Quero esse!"
              class="button button-background button100 bg-purple text-support text-size-default"
            >
              <img src={IconCart} alt="Quero esse!" class="icon-button" />
              Quero esse!
            </Link>
          </div>
        </div>
      </header>

      <div class="more-info border-purple">
        <div class="description">
          <h3 class="title h2 text-primary mb3">
            <strong>Descrição</strong>
          </h3>
          <p class="text text-support text-size-default mb2">
            {product.descricao}
          </p>
        </div>
        <div class="infos">
          <div class="item">
            <div class="image">
              <img src={IconCircle} alt="Temperatura" />
            </div>
            <div>
              <p class="text text-size-extrasmall text-primary">
                Pixels
              </p>
              <p class="text text-size-default text-support">
                {product.temperatura}
              </p>
            </div>
          </div>

          <div class="item">
            <div class="image">
              <img src={IconCircle} alt="Características Visuais" />
            </div>
            <div>
              <p class="text text-size-extrasmall text-primary">
                Brilho
              </p>
              <p class="text text-size-default text-support">
                {product.caracteristicas_visuais}
              </p>
            </div>
          </div>
          <div class="item">
            <div class="image">
              <img src={IconCircle} alt="Tipo" />
            </div>
            <div>
              <p class="text text-size-extrasmall text-primary">Linha</p>
              <p class="text text-size-default text-support">{product.tipo}</p>
            </div>
          </div>

          <div class="item">
            <div class="image">
              <img src={IconCircle} alt="Teor Alcoólico" />
            </div>
            <div>
              <p class="text text-size-extrasmall text-primary">
                Tipo de Manutenção
              </p>
              <p class="text text-size-default text-support">
                {product.teor_alcoolico}
              </p>
            </div>
          </div>
          <div class="item">
            <div class="image">
              <img src={IconCircle} alt="Volume" />
            </div>
            <div>
              <p class="text text-size-extrasmall text-primary">Peso do Gabinete</p>
              <p class="text text-size-default text-support">
                {product.volume}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="more-info border-purple text-center">
        <div class="answers grid oneColuna text-center" >
            <p class="text text-size-default text-support mt-1 mb2 text-center">
              Escaneie pelo seu celular
            </p>
            <div class="image text-center">
              <img src={GoogleChartAPI + product.setor} alt="QRcode" />
            </div>
        </div>
      </div>

    </section >
  );
}

export default Wine;
