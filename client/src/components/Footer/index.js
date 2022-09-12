import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./footer.css";
import IconBack from "../../assets/images/icon-back.svg";
import IconHome from "../../assets/images/icon-home.svg";

function Footer({
  init = true,
  link = "/",
  isGoHome = false,
  fixed = false,
  customNavigate = () => {},
}) {
  const navigate = useNavigate();
  const layoutInit = () => {
    return (
      <footer className="footer pdall50">
        {/* <p className="text text-size-small text-support">
        THELED.COM.BR
        </p> */}
      </footer>
    );
  };

  const layoutInterno = () => {
    return (
      <footer className={`footer ${fixed ? "fixed" : "padding50"}`}>
        <div className="container" style={{ flexDirection: "column" }}>
          <ul className="menu-footer">
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
                <>
                  <Link
                    to={"/"}
                    title="Voltar"
                    className="text text-support text-size-default"
                  >
                    <img src={IconHome} alt="Voltar" />
                    Inicio
                  </Link>
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
                </>
              ) : (
                <>
                  <Link
                    to={"/"}
                    title="Voltar"
                    className="text text-support text-size-default"
                  >
                    <img src={IconHome} alt="Voltar" />
                    Inicio
                  </Link>
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
                </>
              )}
            </li>
          </ul>
          {/* <div className="copy">
            <p className="text text-size-small text-support">
            THELED.COM.BR
            </p>
          </div> */}
        </div>
      </footer>
    );
  };

  return init ? layoutInit() : layoutInterno();
}

export default Footer;
