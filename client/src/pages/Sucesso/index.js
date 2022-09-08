import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../assets/images/loader.svg";
import Logo from "../../assets/images/logo-header.svg";
import { Redirect } from "../../components/Redirect";

function Sucesso() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { product } = location.state;
  const perguntas = window.sessionStorage.getItem("perguntasSalvar");
  const tipo = window.sessionStorage.getItem("tipoEscolha");
  const unidade = window.sessionStorage.getItem("unidade");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const requestProduct = await axios.post(
      `http://localhost:5000/api/v1/save-log`,
      {
        tipo: tipo,
        vinho_escolhido: product.titulo,
        perguntas: perguntas == null ? null : JSON.parse(perguntas),
        unidade: unidade,
        send_wordpress: false,
        created_at: new Date(),
      }
    );

    

    console.log(requestProduct);

    setIsLoading(false);
  }

  return (
    <>
      {!isLoading ? (
        <>
          <main>
           {/*  <Header logo={Logo} init={false} isGoHome={true} link={"/"} /> */}
            <div className="container mt4">
              <section className="content mt5 mb5">
                <div className="success">
                  <h1 className="title h1 text-support">
                    Obrigado pela{" "}
                    <strong className="text-primary">preferência...</strong>
                  </h1>
                  <div className="div-success"></div>
                  <div>
                    <h2 className="title h2 text-support mb3">
                      O Produto escolhido...
                    </h2>
                    <div className="choose-wine">
                      <figure>
                        <img src={product.imagem} alt="Vinho" />
                      </figure>
                      <h3 className="title h2 text-primary">
                        <strong>{product.titulo}</strong>
                      </h3>
                    </div>
                  </div>
                  <div className="div-success"></div>
                                    
                 {/*  {(product.tipo === "Vinhos Tintos") && 
                  (<h3 className="title h3 text-support mb5">
                    O vinho se encontra no corredor respectivo de sua nacionalidade: <br></br> <strong class="text-secondary">{product.pais}</strong>                    
                  </h3>)} */}
                  
                  {/* <h2 className="title h1 text-support mb5">
                    Se encontra no corredor{" "}
                    <span className="text-secondary">{product.corredor}</span>{" "}
                    no{" "}
                    <span className="text-secondary">
                      setor de {product.setor}
                    </span>
                  </h2> */}

                  <div className="action">
                    <Link
                      to={"/"}
                      title="Finalizar"
                      className="button button-background bg-purple text-support text-size-default"
                    >
                      Finalizar
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <Footer init={false} link={"/"} fixed={true} isGoHome={true} />
        </>
      ) : (
        <div style={styles.divLoading}>
          <img src={Loader} />
        </div>
      )}
      <Redirect />
    </>
  );
}

const styles = {
  divLoading: {
    display: "flex",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Sucesso;
