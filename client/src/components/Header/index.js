import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import IconBack from "../../assets/images/icon-back.svg";
import IconHome from "../../assets/images/icon-home.svg";

function Header({
  logo,
  init = true,
  link = "/",
  isGoHome = false,
  customNavigate = () => {},
}) {
  const navigate = useNavigate();
  const layoutInit = () => {
    return (
      <header className="header mb5">
        <div className="logo">
          <img src={logo} alt="Pão de Açúcar Adega" />
        </div>
      </header>
    );
  };

  const layoutInterno = () => {
    return (
      <header class="header mb4">
        <div className="container">
          <ul className="menu-header">
            <li>
              {isGoHome ? (
                <Link
                  to={link}
                  title="Voltar"
                  className="text text-support text-size-default"
                >
                  <img src={IconHome} alt="Voltar" />
                  Inicio
                </Link>
              ) : link === "pergunta" ? (
                <Link
                  to={link}
                  title="Voltar"
                  className="text text-support text-size-default"
                  onClick={(e) => {
                    e.preventDefault();
                    customNavigate();
                  }}
                >
                  <img src={IconBack} alt="Voltar" />
                  Voltar
                </Link>
              ) : (
                <Link
                  to={link}
                  title="Voltar"
                  className="text text-support text-size-default"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                  }}
                >
                  <img src={IconBack} alt="Voltar" />
                  Voltar
                </Link>
              )}
            </li>
          </ul>
          <div className="title">
            <img
              src={logo}
              alt="Pão de Açúcar Adega"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
        </div>
      </header>
    );
  };

  return init ? layoutInit() : layoutInterno();
}

export default Header;
